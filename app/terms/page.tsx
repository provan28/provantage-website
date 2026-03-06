import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Terms of Use | Provantage",
  description: "Provantage Terms of Use — terms and conditions governing your use of our website and services.",
};

export default function TermsOfUse() {
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <Image
              src="/provantage_logo_darkblue.png"
              alt="Provantage"
              width={180}
              height={32}
              style={{ height: 32, width: "auto" }}
            />
          </Link>
          <Link href="/" style={{ color: "var(--navy)", fontWeight: 500, fontSize: 14 }}>
            &larr; Back to Home
          </Link>
        </div>
      </header>

      <section className="section section-cream" style={{ paddingTop: 120 }}>
        <div className="section-inner" style={{ maxWidth: 860 }}>
          <p className="section-label">Legal</p>
          <h1 className="section-heading">Terms of Use</h1>
          <p style={{ color: "var(--text-light)", marginBottom: 40 }}>
            Effective Date: March 1, 2026 &nbsp;|&nbsp; Last Updated: March 1, 2026
          </p>

          <div className="legal-content">
            <p>
              Welcome to provantagecapital.com (the &ldquo;Site&rdquo;), owned and operated by Provantage Capital Management Ltd. (&ldquo;Provantage,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using this Site, you agree to be bound by these Terms of Use. If you do not agree, please do not use this Site.
            </p>

            <h3>1. Use of the Site</h3>
            <p>
              This Site is provided for informational purposes only. You may use this Site for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul>
              <li>Use the Site in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the Site or its systems</li>
              <li>Introduce viruses, malware, or other harmful code</li>
              <li>Scrape, crawl, or use automated means to access the Site without our permission</li>
              <li>Impersonate or misrepresent your affiliation with any person or entity</li>
            </ul>

            <h3>2. No Professional Advice</h3>
            <p>
              The content on this Site is for general informational purposes only and does not constitute tax, legal, accounting, investment, or other professional advice. Nothing on this Site should be relied upon as a substitute for consultation with qualified professionals. You should consult your own advisors before making any financial or business decisions.
            </p>

            <h3>3. No Client Relationship</h3>
            <p>
              Use of this Site or submission of a contact form does not create a client-advisor relationship with Provantage or any of its affiliated entities. A formal client relationship is established only through the execution of a written engagement agreement.
            </p>

            <h3>4. Intellectual Property</h3>
            <p>
              All content on this Site, including text, graphics, logos, images, and software, is the property of Provantage Capital Management Ltd. or its licensors and is protected by applicable intellectual property laws. &ldquo;Provantage&rdquo; is a registered trademark of Provantage Capital Management Ltd. You may not reproduce, distribute, modify, or create derivative works from any content on this Site without our prior written consent.
            </p>

            <h3>5. Third-Party Links</h3>
            <p>
              This Site may contain links to third-party websites or services, including our Client Portal. These links are provided for convenience only. We do not control, endorse, or assume responsibility for the content, privacy policies, or practices of any third-party sites.
            </p>

            <h3>6. Client Portal</h3>
            <p>
              Access to the Provantage Client Portal is provided through a third-party platform and is subject to separate terms and conditions. Your use of the Client Portal is governed by those terms, not these Terms of Use.
            </p>

            <h3>7. Disclaimer of Warranties</h3>
            <p>
              THIS SITE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
            </p>

            <h3>8. Limitation of Liability</h3>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, PROVANTAGE CAPITAL MANAGEMENT LTD. AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>

            <h3>9. Indemnification</h3>
            <p>
              You agree to indemnify, defend, and hold harmless Provantage Capital Management Ltd. and its affiliates from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys&rsquo; fees) arising from your use of the Site or violation of these Terms.
            </p>

            <h3>10. Governing Law</h3>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved exclusively in the state or federal courts located in Los Angeles County, California.
            </p>

            <h3>11. Changes to These Terms</h3>
            <p>
              We reserve the right to modify these Terms of Use at any time. Changes will be posted on this page with an updated effective date. Your continued use of the Site after changes are posted constitutes your acceptance of the revised Terms.
            </p>

            <h3>12. Contact Us</h3>
            <p>If you have questions about these Terms of Use, please contact us:</p>
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
