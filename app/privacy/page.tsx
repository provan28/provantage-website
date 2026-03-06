import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Provantage",
  description: "Provantage Privacy Policy — how we collect, use and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <nav className="nav" style={{ background: "var(--navy)" }}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <Image
              src="/provantage_logo.png"
              alt="Provantage"
              width={200}
              height={36}
              className="nav-logo-img"
            />
          </Link>
          <Link href="/" style={{ color: "rgba(255,255,255,0.7)", fontWeight: 500, fontSize: 14, textDecoration: "none" }}>
            &larr; Back to Home
          </Link>
        </div>
      </nav>

      <section className="section section-cream" style={{ paddingTop: 120 }}>
        <div className="section-inner" style={{ maxWidth: 860 }}>
          <p className="section-label">Legal</p>
          <h1 className="section-heading">Privacy Policy</h1>
          <p style={{ color: "var(--text-light)", marginBottom: 40 }}>
            Effective Date: January 5, 2021 &nbsp;|&nbsp; Last Updated: January 5, 2021
          </p>

          <div className="legal-content">
            <p>
              Provantage Capital Management Ltd. (&ldquo;Provantage,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at provantagecapital.com (the &ldquo;Site&rdquo;) or engage our services.
            </p>

            <h3>1. Information We Collect</h3>
            <h4>Personal Information You Provide</h4>
            <p>We may collect personal information that you voluntarily provide to us, including but not limited to:</p>
            <ul>
              <li>Name, email address, phone number, and company/entity name</li>
              <li>Information submitted through our contact form or consultation requests</li>
              <li>Communications you send to us via email, phone, or other channels</li>
            </ul>

            <h4>Information Collected Automatically</h4>
            <p>When you visit our Site, we may automatically collect certain information, including:</p>
            <ul>
              <li>IP address, browser type, operating system, and device information</li>
              <li>Pages visited, time spent on pages, and referring URLs</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3>2. How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide requested services</li>
              <li>Communicate with you about our services, including updates and promotional materials (with your consent)</li>
              <li>Improve and optimize our website and services</li>
              <li>Comply with legal obligations and enforce our agreements</li>
              <li>Protect against fraud and unauthorized activity</li>
            </ul>

            <h3>3. Text Messaging</h3>
            <p>
              If you opt in to receive text messages from Provantage, we will send messages related to our services to the phone number you provide. Message and data rates may apply. Message frequency varies. You may opt out at any time by replying <strong>STOP</strong> to any message. Reply <strong>HELP</strong> for assistance. Consent to receive text messages is not a condition of service.
            </p>

            <h3>4. Sharing Your Information</h3>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Third parties who perform services on our behalf, such as hosting, analytics, and communication platforms</li>
              <li><strong>Professional Partners:</strong> Independent CPAs and other professionals engaged to provide services under your engagement agreement, as necessary to fulfill our obligations</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, subpoena, court order, or other legal process</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h3>5. Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar technologies to enhance your experience on our Site. You may disable cookies through your browser settings, but doing so may affect the functionality of certain features.
            </p>

            <h3>6. Data Security</h3>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>

            <h3>7. Data Retention</h3>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>

            <h3>8. Your Rights</h3>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
              <li>Access, correct, or delete your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Request information about the categories of personal data we collect and how it is used</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p>
              California residents may have additional rights under the California Consumer Privacy Act (CCPA). To exercise any of these rights, please contact us using the information below.
            </p>

            <h3>9. Third-Party Links</h3>
            <p>
              Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h3>10. Children&rsquo;s Privacy</h3>
            <p>
              Our Site and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>

            <h3>11. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
            </p>

            <h3>12. Contact Us</h3>
            <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
            <p>
              Provantage Capital Management Ltd.<br />
              445 S Figueroa St, Fl 31<br />
              Los Angeles, CA 90071<br />
              Email: <a href="mailto:support@provantagecapital.com">support@provantagecapital.com</a><br />
              Phone: <a href="tel:+18882165939">+1 (888) 216-5939</a>
            </p>
          </div>
        </div>
      </section>

      <footer className="footer" style={{ marginTop: 0 }}>
        <div className="footer-inner">
          <div className="footer-bottom" style={{ borderTop: "none" }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, textAlign: "center" }}>
              &copy; 2026 Provantage Capital Management Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
