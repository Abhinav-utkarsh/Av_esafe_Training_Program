
import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const UPI_ID = process.env.UPI_ID || "abhinavutkarsh3@okhdfcbank";
const PROGRAM_FEE = Number(process.env.PROGRAM_FEE) || 1299;

const QR_IMAGE_PATH = path.resolve(
  __dirname,
  process.env.QR_IMAGE_PATH || "../public/payment-qr.png"
);

app.use(helmet());

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  })
);

app.use(express.json({ limit: "20kb" }));

app.use(
  "/api/applications",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    standardHeaders: "draft-7",
    legacyHeaders: false,
  })
);

const allowedTracks = [
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "Java Development",
  "Python Development",
  "Software Testing",
  "Automation Testing",
  "Other",
];

const allowedStatuses = [
  "Student",
  "Working Professional",
  "Fresher",
  "Other",
];

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function requiredString(value, maxLength) {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.trim().length <= maxLength
  );
}

function createTransporter() {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error("Email configuration is incomplete.");
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    secure: String(SMTP_SECURE).toLowerCase() === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
  });
}

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/applications", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      track,
      currentStatus,
      goals,
    } = req.body || {};

    // Validate required fields.
    if (
      !requiredString(fullName, 100) ||
      !requiredString(email, 254) ||
      !requiredString(phone, 30) ||
      !requiredString(track, 100) ||
      !requiredString(currentStatus, 100) ||
      !requiredString(goals, 2000)
    ) {
      return res.status(400).json({
        message: "Please complete all required fields correctly.",
      });
    }

    const cleanName = fullName.trim();
    const cleanEmail = email.trim();
    const cleanPhone = phone.trim();
    const cleanGoals = goals.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return res.status(400).json({
        message: "Please enter a valid email address.",
      });
    }

    if (!allowedTracks.includes(track.trim())) {
      return res.status(400).json({
        message: "Please select a valid training track.",
      });
    }

    if (!allowedStatuses.includes(currentStatus.trim())) {
      return res.status(400).json({
        message: "Please select a valid current status.",
      });
    }

    if (!ADMIN_EMAIL) {
      throw new Error("Admin email is not configured.");
    }

    if (!fs.existsSync(QR_IMAGE_PATH)) {
      console.error("Payment QR image not found:", QR_IMAGE_PATH);

      return res.status(500).json({
        message:
          "The payment instructions are not configured yet. Please try again later.",
      });
    }

    const transporter = createTransporter();
    const from = `"Av_eSAFE Training" <${process.env.SMTP_USER}>`;

    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safePhone = escapeHtml(cleanPhone);
    const safeTrack = escapeHtml(track.trim());
    const safeStatus = escapeHtml(currentStatus.trim());
    const safeGoals = escapeHtml(cleanGoals).replace(/\n/g, "<br>");

    // Email 1: Send payment instructions to the student.
    const studentEmail = {
      from,
      to: cleanEmail,
      subject: "Av_eSAFE Training — Application Received & Payment Instructions",
      text: `Hi ${cleanName},

Thank you for applying to Av_eSAFE Training!

Program fee: INR ${PROGRAM_FEE}
UPI ID: ${UPI_ID}

Please complete the payment using the UPI ID above or the attached QR code.

After paying:
1. Reply to this email.
2. Attach your payment screenshot.
3. Include your UPI transaction/reference ID.

Your enrollment will be confirmed only after manual payment verification by the Av_eSAFE team.

If you have already paid, please reply with your payment proof.

Regards,
Av_eSAFE Training Team`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:auto;color:#222;line-height:1.7">
          <h2 style="color:#155eef">Av_eSAFE Training</h2>
          <p>Hi ${safeName},</p>
          <p>Thank you for applying to our training program. We have received your application.</p>

          <div style="background:#f4f7ff;padding:18px;border-radius:10px">
            <h3 style="margin-top:0">Payment Instructions</h3>
            <p><strong>Program fee:</strong> ₹${PROGRAM_FEE}</p>
            <p><strong>UPI ID:</strong> ${escapeHtml(UPI_ID)}</p>
            <p>Please scan the attached QR code using your preferred UPI app, or pay using the UPI ID above. Verify the recipient and amount before confirming payment.</p>
            <img
              src="cid:paymentqr"
              alt="Av_eSAFE payment QR code"
              width="240"
              style="display:block;max-width:100%;height:auto;margin:16px auto"
            />
          </div>

          <h3>After completing payment</h3>
          <ol>
            <li>Reply directly to this email.</li>
            <li>Attach your payment screenshot.</li>
            <li>Include your UPI transaction/reference ID.</li>
          </ol>

          <p><strong>Important:</strong> Your enrollment is confirmed only after the Av_eSAFE team manually verifies your payment and sends you a confirmation.</p>

          <p>If you have already paid, simply reply with your payment proof.</p>
          <p>Regards,<br><strong>Av_eSAFE Training Team</strong></p>
        </div>
      `,
      attachments: [
        {
          filename: "avesafe-payment-qr.png",
          path: QR_IMAGE_PATH,
          cid: "paymentqr",
        },
      ],
    };

    // Email 2: Notify the admin of the new application.
    const adminEmail = {
      from,
      to: ADMIN_EMAIL,
      replyTo: cleanEmail,
      subject: `New Av_eSAFE Training Application — ${cleanName}`,
      text: `A new training application has been received.

Full Name: ${cleanName}
Email: ${cleanEmail}
Phone: ${cleanPhone}
Training Track: ${track.trim()}
Current Status: ${currentStatus.trim()}
Goals: ${cleanGoals}

Program Fee: INR ${PROGRAM_FEE}

Action required:
Check the student's payment proof and manually verify the transaction before confirming enrollment.`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;color:#222;line-height:1.6">
          <h2>New Training Application</h2>
          <p>A new application has been submitted through the Av_eSAFE Training website.</p>

          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:10px;border:1px solid #ddd"><strong>Full Name</strong></td><td style="padding:10px;border:1px solid #ddd">${safeName}</td></tr>
            <tr><td style="padding:10px;border:1px solid #ddd"><strong>Email</strong></td><td style="padding:10px;border:1px solid #ddd">${safeEmail}</td></tr>
            <tr><td style="padding:10px;border:1px solid #ddd"><strong>Phone</strong></td><td style="padding:10px;border:1px solid #ddd">${safePhone}</td></tr>
            <tr><td style="padding:10px;border:1px solid #ddd"><strong>Training Track</strong></td><td style="padding:10px;border:1px solid #ddd">${safeTrack}</td></tr>
            <tr><td style="padding:10px;border:1px solid #ddd"><strong>Current Status</strong></td><td style="padding:10px;border:1px solid #ddd">${safeStatus}</td></tr>
            <tr><td style="padding:10px;border:1px solid #ddd"><strong>Goals</strong></td><td style="padding:10px;border:1px solid #ddd">${safeGoals}</td></tr>
            <tr><td style="padding:10px;border:1px solid #ddd"><strong>Program Fee</strong></td><td style="padding:10px;border:1px solid #ddd">₹${PROGRAM_FEE}</td></tr>
          </table>

          <p><strong>Next action:</strong> Verify the payment manually when the student sends their payment proof. Confirm enrollment only after verification.</p>
        </div>
      `,
    };

    // Send both emails and report failures clearly.
    const results = await Promise.allSettled([
      transporter.sendMail(studentEmail),
      transporter.sendMail(adminEmail),
    ]);

    const [studentResult, adminResult] = results;

    if (studentResult.status === "rejected") {
      console.error(
        "Student email failed:",
        studentResult.reason?.message || studentResult.reason
      );
    }

    if (adminResult.status === "rejected") {
      console.error(
        "Admin email failed:",
        adminResult.reason?.message || adminResult.reason
      );
    }

    if (
      studentResult.status === "rejected" ||
      adminResult.status === "rejected"
    ) {
      return res.status(502).json({
        message:
          "We couldn't send all application emails. Please contact Av_eSAFE before submitting again.",
      });
    }

    return res.status(201).json({
      success: true,
      message:
        "Application submitted successfully. Please check your inbox for payment instructions.",
    });
  } catch (error) {
    console.error("Application submission error:", error.message);

    return res.status(500).json({
      message:
        "Something went wrong while processing your application. Please try again later.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Av_eSAFE backend running at http://localhost:${PORT}`);
});
