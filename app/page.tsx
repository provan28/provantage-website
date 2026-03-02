"use client";

import { useState, useEffect, useCallback, FormEvent } from "react";
import Image from "next/image";

const heroImages = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80",
  "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1920&q=80",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you for your inquiry. A member of our team will be in touch shortly."
    );
  };

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <Image
              src="/provantage_logo.png"
              alt="Provantage"
              width={200}
              height={36}
              className="nav-logo-img"
              priority
            />
          </a>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li className="dropdown">
              <a href="#services">Services</a>
              <div className="dropdown-menu">
                <a href="#svc-tax">Tax Advisory</a>
                <a href="#svc-accounting">Accounting</a>
                <a href="#svc-crypto">Crypto &amp; Web3</a>
                <a href="#svc-consulting">Consulting</a>
                <a href="#svc-sports">Sports &amp; Entertainment</a>
                <div className="dm-divider"></div>
                <div className="dm-label">Premium</div>
                <a href="#svc-private">Private Client Services</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#industries">Industries</a>
              <div className="dropdown-menu dropdown-wide">
                <div className="dm-columns">
                  <div className="dm-col">
                    <a href="#ind-construction">Construction</a>
                    <a href="#ind-consumer">Consumer &amp; Industrial</a>
                    <a href="#ind-crypto">Cryptocurrency</a>
                    <a href="#ind-dealerships">Dealerships</a>
                  </div>
                  <div className="dm-col">
                    <a href="#ind-education">Education</a>
                    <a href="#ind-financial">Financial Services</a>
                    <a href="#ind-fnb">Food &amp; Beverage</a>
                    <a href="#ind-healthcare">Healthcare</a>
                  </div>
                  <div className="dm-col">
                    <a href="#ind-law">Law</a>
                    <a href="#ind-realestate">Real Estate</a>
                    <a href="#ind-technology">Technology</a>
                    <a href="#ind-entertainment">Entertainment</a>
                    <a
                      href="#industries"
                      style={{
                        color: "var(--gold)",
                        fontWeight: 600,
                        marginTop: 4,
                      }}
                    >
                      View All Industries &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a
                href="https://portal.provantagecapital.com/login?step=signIn"
                className="btn-portal-nav"
                target="_blank"
                rel="noopener noreferrer"
              >
                Client Portal &rarr;
              </a>
            </li>
          </ul>
          <button
            className="nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${mobileMenuOpen ? " active" : ""}`}>
        <a href="#about" onClick={closeMobileMenu}>
          About
        </a>
        <a href="#team" onClick={closeMobileMenu}>
          Team
        </a>
        <div className="mm-label">Services</div>
        <a href="#svc-tax" onClick={closeMobileMenu}>
          Tax Advisory
        </a>
        <a href="#svc-accounting" onClick={closeMobileMenu}>
          Accounting
        </a>
        <a href="#svc-crypto" onClick={closeMobileMenu}>
          Crypto &amp; Web3
        </a>
        <a href="#svc-consulting" onClick={closeMobileMenu}>
          Consulting
        </a>
        <a href="#svc-sports" onClick={closeMobileMenu}>
          Sports &amp; Entertainment
        </a>
        <a href="#svc-private" onClick={closeMobileMenu}>
          Private Client Services
        </a>
        <div className="mm-label">Industries</div>
        <a href="#ind-construction" onClick={closeMobileMenu}>
          Construction
        </a>
        <a href="#ind-consumer" onClick={closeMobileMenu}>
          Consumer &amp; Industrial
        </a>
        <a href="#ind-crypto" onClick={closeMobileMenu}>
          Cryptocurrency
        </a>
        <a href="#ind-dealerships" onClick={closeMobileMenu}>
          Dealerships
        </a>
        <a href="#ind-education" onClick={closeMobileMenu}>
          Education
        </a>
        <a href="#ind-financial" onClick={closeMobileMenu}>
          Financial Services
        </a>
        <a href="#ind-fnb" onClick={closeMobileMenu}>
          Food &amp; Beverage
        </a>
        <a href="#ind-healthcare" onClick={closeMobileMenu}>
          Healthcare
        </a>
        <a href="#ind-law" onClick={closeMobileMenu}>
          Law
        </a>
        <a href="#ind-realestate" onClick={closeMobileMenu}>
          Real Estate
        </a>
        <a href="#ind-technology" onClick={closeMobileMenu}>
          Technology
        </a>
        <a href="#ind-entertainment" onClick={closeMobileMenu}>
          Entertainment
        </a>
        <a href="#contact" onClick={closeMobileMenu}>
          Contact
        </a>
        <a
          href="https://portal.provantagecapital.com/login?step=signIn"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--gold)", fontWeight: 600 }}
        >
          Client Portal &rarr;
        </a>
      </div>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-slideshow">
          {heroImages.map((url, i) => (
            <div
              key={i}
              className={`hero-slide${i === currentSlide ? " active" : ""}`}
              style={{ backgroundImage: `url('${url}')` }}
            />
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-eyebrow">
            Tax Advisory &nbsp;&middot;&nbsp; Accounting &nbsp;&middot;&nbsp;
            Consulting
          </p>
          <h1>
            Your Business. Our Strategy. <em>Better Outcomes.</em>
          </h1>
          <p className="hero-sub">
            Strategic tax planning, expert accounting and business advisory.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">
              Schedule a Consultation
            </a>
            <a href="#services" className="btn-outline">
              Our Services
            </a>
          </div>
        </div>
        <div className="hero-announcement">
          <span className="announcement-badge">New Partnership</span>
          <span className="announcement-text">
            Accounting Partner of Send, Inc., a private cryptocurrency wallet
          </span>
          <span className="announcement-text-short">
            Send, Inc. — Crypto Wallet
          </span>
          <a href="https://send.it" target="_blank" rel="noopener noreferrer" className="announcement-link">
            Visit Send.it &rarr;
          </a>
        </div>
        <div className="hero-dots">
          {heroImages.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${i === currentSlide ? " active" : ""}`}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section section-cream" id="about">
        <div className="section-inner">
          <p className="section-label">About Provantage</p>
          <h2 className="section-heading">
            Strategy That Moves
            <br />
            Your Business Forward
          </h2>
          <p className="section-sub">
            We bring together tax planning, accounting and advisory under one
            roof &mdash; so every decision is informed, every dollar is optimized,
            and nothing falls through the cracks.
          </p>
          <div className="about-grid">
            <div className="about-text">
              <h3>The Team Behind Your Team</h3>
              <p>
                Provantage is a full-service tax advisory and accounting firm
                built to serve as an extension of your business. We handle the
                planning, the compliance and the financial oversight &mdash;
                giving you the freedom to focus on growth.
              </p>
              <p>
                From tax diagnostics and optimization reports to controller-level
                accounting and strategic consulting, our team delivers the
                expertise and execution that high-performing businesses demand.
              </p>
              <div className="about-features">
                <div className="about-feat">
                  <div className="about-feat-icon">&#9889;</div>
                  <div>
                    <h4>Single Point of Contact</h4>
                    <p>
                      One team manages everything &mdash; from tax planning to
                      bookkeeping to compliance.
                    </p>
                  </div>
                </div>
                <div className="about-feat">
                  <div className="about-feat-icon">&#9672;</div>
                  <div>
                    <h4>Proactive Tax Strategy</h4>
                    <p>
                      We don&rsquo;t wait for tax season. We plan year-round to
                      minimize liability and maximize savings.
                    </p>
                  </div>
                </div>
                <div className="about-feat">
                  <div className="about-feat-icon">&#9635;</div>
                  <div>
                    <h4>Built for Growth</h4>
                    <p>
                      Whether you&rsquo;re scaling, acquiring, or restructuring
                      &mdash; we build the financial roadmap to get you there.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-visual" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
              <div className="about-visual-overlay">
                <blockquote>
                  &ldquo;Understanding you is our ethos. Creativity, diligence,
                  and assertion drive our approach.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section" id="team">
        <div className="section-inner">
          <p className="section-label">Our Team</p>
          <h2 className="section-heading">
            The People Behind
            <br />
            Provantage
          </h2>
          <p className="section-sub">
            A team of advisors, accountants and strategists dedicated to
            helping you keep more of your money.
          </p>
          <div className="team-grid">
            {[
              { name: "Bill Barth", role: "Advisory", photo: "/bill-barth.png" },
              { name: "Jonathan Whitmore", role: "Advisory", photo: "/jonathan-whitmore.png" },
              { name: "Michael Rosenburg", role: "Advisory", photo: "/michael-rosenburg.png" },
              { name: "George Boudaghians", role: "Accounting", photo: "/george-boudaghians.png" },
              { name: "Kelly Petrovich", role: "Accounting", photo: "/kelly-petrovich.png" },
              { name: "Michelle Hayes", role: "Accounting", photo: "/michelle-hayes.png" },
              { name: "Ashley Macamay", role: "Accounting", photo: "/ashley-macamay.png" },
              { name: "Steven Morales", role: "Accounting", photo: "/steven-morales.png" },
              { name: "Rylee Fagan", role: "Client Engagement", photo: "/rylee-fagan.jpg" },
              { name: "Michael Collins", role: "Client Engagement", shy: true },
              { name: "Victoria Barth", role: "Operations", photo: "/victoria-barth.png" },
              { name: "Greg Zschaschel", role: "Operations", photo: "/greg-zschaschel.png" },
            ].map((member) => (
              <div className="team-card" key={member.name}>
                {member.photo ? (
                  <div className="team-photo" style={{
                    backgroundImage: `url('${member.photo}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                  }}></div>
                ) : member.shy ? (
                  <div className="team-photo team-photo-shy">
                    <span className="shy-emoji">404</span>
                    <span className="shy-text">Not found</span>
                  </div>
                ) : (
                  <div className="team-photo"></div>
                )}
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-dark" id="services">
        <div className="section-inner">
          <p className="section-label">Our Services</p>
          <h2 className="section-heading">
            Comprehensive Solutions,
            <br />
            One Trusted Firm
          </h2>
          <p className="section-sub">
            From tax advisory to crypto accounting to full business management
            &mdash; we deliver the strategy, execution and oversight your
            business needs.
          </p>
          <div className="services-grid">
            <div className="service-card" id="svc-tax">
              <div className="service-icon">&sect;</div>
              <h3>Tax Advisory</h3>
              <p>
                Proactive tax planning strategies designed to minimize liability
                and maximize savings. We build the plans &mdash; from high-level
                diagnostics to full optimization reports with implementation
                instructions for your bookkeepers.
              </p>
              <div className="service-tags">
                <span className="service-tag">Tax Planning</span>
                <span className="service-tag">Tax Diagnostic Reports</span>
                <span className="service-tag">Tax Optimization Plans</span>
                <span className="service-tag">Pre-Audit Preparation</span>
                <span className="service-tag">POA Management</span>
                <span className="service-tag">Quarterly Reviews</span>
              </div>
            </div>

            <div className="service-card" id="svc-accounting">
              <div className="service-icon">&#9648;</div>
              <h3>Accounting</h3>
              <p>
                Real-time clarity and controller-level services that empower
                smarter decisions. From monthly bookkeeping to CFO-level
                oversight, we manage the full financial back-office.
              </p>
              <div className="service-tags">
                <span className="service-tag">Monthly Bookkeeping</span>
                <span className="service-tag">Payroll Processing</span>
                <span className="service-tag">W-2 / 1099 e-Filing</span>
                <span className="service-tag">
                  Controller &amp; CFO Services
                </span>
                <span className="service-tag">Retirement Contributions</span>
                <span className="service-tag">Financial Reporting</span>
                <span className="service-tag">Accounts Payable</span>
                <span className="service-tag">Accounts Receivable</span>
              </div>
            </div>

            <div className="service-card" id="svc-crypto">
              <div className="service-icon">&#9671;</div>
              <h3>Crypto &amp; Web3</h3>
              <p>
                Full-service accounting and financial management for crypto
                startups, Web3 development companies and digital asset
                operations &mdash; from on-chain accounting to treasury auditing.
              </p>
              <div className="service-tags">
                <span className="service-tag">On-Chain Accounting</span>
                <span className="service-tag">Multi-Sig Management</span>
                <span className="service-tag">DeFi / Liquidity Pools</span>
                <span className="service-tag">Treasury Management</span>
                <span className="service-tag">Native Token Mgmt</span>
                <span className="service-tag">Crypto Treasury Auditing</span>
              </div>
            </div>

            <div className="service-card" id="svc-consulting">
              <div className="service-icon">&#9678;</div>
              <h3>Consulting</h3>
              <p>
                Strategic advisory on business investments, expansion,
                acquisition and risk analysis. We also provide domestic and
                offshore entity formation and specialized accounting support for
                divorce proceedings and prenuptial agreements.
              </p>
              <div className="service-tags">
                <span className="service-tag">
                  Business Investment Advisory
                </span>
                <span className="service-tag">
                  Expansion &amp; Acquisition
                </span>
                <span className="service-tag">Risk Analysis</span>
                <span className="service-tag">Entity Formation</span>
                <span className="service-tag">Offshore Structuring</span>
                <span className="service-tag">Moore-Marsden Analysis</span>
                <span className="service-tag">Prenup / Postnup Support</span>
              </div>
            </div>

            <div className="service-card" id="svc-sports">
              <div className="service-icon">&#9733;</div>
              <h3>Sports &amp; Entertainment</h3>
              <p>
                Full business management and administrative services for
                professional athletes, actors and entertainers &mdash; managing
                the financial complexity that comes with high-profile careers.
              </p>
              <div className="service-tags">
                <span className="service-tag">Full Business Management</span>
                <span className="service-tag">Administrative Management</span>
                <span className="service-tag">Financial Oversight</span>
                <span className="service-tag">Tax Strategy</span>
                <span className="service-tag">Cash Flow Management</span>
                <span className="service-tag">Investment Management</span>
                <span className="service-tag">Intellectual Property (NIL) Protection</span>
                <span className="service-tag">Accounting</span>
                <span className="service-tag">Payroll</span>
                <span className="service-tag">Risk Management</span>
              </div>
            </div>

            <div className="service-card premium" id="svc-private">
              <span className="service-badge">By Invitation</span>
              <div className="service-icon">&#9830;</div>
              <h3>Private Client Services</h3>
              <p>
                An exclusive, white-glove advisory experience for
                high-net-worth individuals and businesses. Your dedicated advisor
                becomes a permanent extension of your team &mdash; available
                year-round on retainer.
              </p>
              <div className="service-tags">
                <span className="service-tag">$10M+ Net Worth Minimum</span>
                <span className="service-tag">$1M+ Annual Revenue</span>
                <span className="service-tag">Dedicated Advisor</span>
                <span className="service-tag">Annual Retainer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section" id="industries">
        <div className="section-inner">
          <p className="section-label">Industries We Serve</p>
          <h2 className="section-heading">
            Deep Expertise Across
            <br />
            Key Sectors
          </h2>
          <p className="section-sub">
            Every industry has its own tax landscape, compliance requirements,
            and financial complexities. We bring specialized knowledge to each
            one.
          </p>
          <div className="industries-grid">
            <div className="ind-card" id="ind-construction">
              <div className="ind-card-icon">&#127959;</div>
              <h4>Construction</h4>
              <p>
                Job costing, contractor compliance and tax strategy for builders
                and general contractors.
              </p>
            </div>

            <div className="ind-card" id="ind-consumer">
              <div className="ind-card-icon">&#127981;</div>
              <h4>Consumer &amp; Industrial</h4>
              <p>
                Cost accounting, inventory valuation, supply chain finance, and
                R&amp;D tax credits for manufacturers and consumer brands.
              </p>
            </div>

            <div className="ind-card" id="ind-crypto">
              <div className="ind-card-icon">&#8383;</div>
              <h4>Cryptocurrency</h4>
              <p>
                On-chain accounting, DeFi reporting, token management, and
                regulatory compliance for digital asset companies.
              </p>
            </div>

            <div className="ind-card" id="ind-dealerships">
              <div className="ind-card-icon">&#9875;</div>
              <h4>Dealerships</h4>
              <p>
                Floor plan accounting, inventory management, sales tax
                compliance and financial reporting for marine, auto and
                powersports dealers.
              </p>
            </div>

            <div className="ind-card" id="ind-education">
              <div className="ind-card-icon">&#127891;</div>
              <h4>Education</h4>
              <p>
                Fund accounting, grant compliance, tax-exempt reporting, and
                financial management for educational institutions.
              </p>
            </div>

            <div className="ind-card" id="ind-financial">
              <div className="ind-card-icon">&#128202;</div>
              <h4>Financial Services</h4>
              <p>
                Regulatory compliance, fund accounting and tax advisory for
                investment firms, lenders and financial institutions.
              </p>
            </div>

            <div className="ind-card" id="ind-fnb">
              <div className="ind-card-icon">&#127869;</div>
              <h4>Food &amp; Beverage</h4>
              <p>
                Restaurant accounting, tip reporting, cost controls, and
                franchise financial management.
              </p>
            </div>

            <div className="ind-card" id="ind-healthcare">
              <div className="ind-card-icon">&#9877;</div>
              <h4>Healthcare</h4>
              <p>
                Practice accounting, physician tax planning and compliance for
                medical professionals and groups.
              </p>
            </div>

            <div className="ind-card" id="ind-law">
              <div className="ind-card-icon">&#9878;</div>
              <h4>Law</h4>
              <p>
                Tax planning and accounting for law firms, solo practitioners,
                and legal partnerships.
              </p>
            </div>

            <div className="ind-card" id="ind-realestate">
              <div className="ind-card-icon">&#127970;</div>
              <h4>Real Estate</h4>
              <p>
                Investment structuring, 1031 exchanges, cost segregation, and
                property management accounting.
              </p>
            </div>

            <div className="ind-card" id="ind-technology">
              <div className="ind-card-icon">&#128187;</div>
              <h4>Technology</h4>
              <p>
                R&amp;D credits, SaaS revenue recognition, startup accounting,
                and equity compensation planning for tech companies.
              </p>
            </div>

            <div className="ind-card" id="ind-entertainment">
              <div className="ind-card-icon">&#127908;</div>
              <h4>Entertainment</h4>
              <p>
                Business management, royalty accounting, tour finance and tax
                strategy for artists, athletes and entertainment professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PROVANTAGE */}
      <section className="section" id="why">
        <div className="section-inner">
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
            <p className="section-label" style={{ textAlign: "center" }}>
              Why Provantage
            </p>
            <h2 className="section-heading" style={{ textAlign: "center" }}>
              Built Around How
              <br />
              Business Actually Works
            </h2>
            <p
              className="section-sub"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              We don&rsquo;t just file your taxes. We build the strategy, manage
              the execution and coordinate the professionals &mdash; so you can
              focus on running your business.
            </p>
          </div>
          <div className="diff-grid">
            <div className="diff-item">
              <div className="diff-num">40%</div>
              <h4>Average First-Year Tax Savings</h4>
              <p>
                Our clients typically retain 35&ndash;40% more of their income
                in year one through proactive tax strategy and restructuring.
              </p>
            </div>
            <div className="diff-item">
              <div className="diff-num">01</div>
              <h4>One Engagement, Full Access</h4>
              <p>
                Your engagement agreement with Provantage covers everything
                &mdash; from tax planning to CPA coordination. No separate
                contracts, no runaround.
              </p>
            </div>
            <div className="diff-item">
              <div className="diff-num">02</div>
              <h4>Strategy First, Always</h4>
              <p>
                Every engagement begins with a plan. Whether it&rsquo;s a tax
                diagnostic or a full optimization report, we build the roadmap
                before anything gets filed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section-cream" id="contact">
        <div className="section-inner">
          <p className="section-label">Get in Touch</p>
          <h2 className="section-heading">Start the Conversation</h2>
          <p className="section-sub">
            Ready to take a more strategic approach? Schedule a consultation and
            let&rsquo;s discuss how Provantage can work for you.
          </p>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Our Offices</h3>
              <p>
                Providing professional tax advisory, accounting and consulting
                services to clients across the globe.
              </p>
              <div className="contact-offices">
                <div className="contact-office">
                  <h4>Downtown Los Angeles</h4>
                  <p>
                    445 S Figueroa St, Fl 31
                    <br />
                    Los Angeles, CA 90071
                  </p>
                </div>
                <div className="contact-office">
                  <h4>Claremont Village</h4>
                  <p>
                    101 N Indian Hill Blvd, Suite 206
                    <br />
                    Claremont, CA 91711
                  </p>
                </div>
                <div className="contact-office">
                  <h4>Cheyenne &mdash; High Plains</h4>
                  <p>
                    1705 Albany Ave, Ste 118
                    <br />
                    Cheyenne, WY 82001
                  </p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">&#9742;</div>
                <div>
                  <a href="tel:+18882165939">+1 (888) 216-5939</a>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">&#9993;</div>
                <div>
                  <a href="mailto:support@provantagecapital.com">
                    support@provantagecapital.com
                  </a>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fname">First Name *</label>
                  <input type="text" id="fname" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Last Name *</label>
                  <input type="text" id="lname" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="company">Company / Entity Name</label>
                <input type="text" id="company" />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service of Interest</label>
                <select id="service" defaultValue="">
                  <option value="">Select a service...</option>
                  <option value="tax">Tax Advisory</option>
                  <option value="accounting">Accounting</option>
                  <option value="crypto">Crypto &amp; Web3</option>
                  <option value="consulting">Consulting</option>
                  <option value="sports">Sports &amp; Entertainment</option>
                  <option value="private">Private Client Services</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              {/* SMS OPT-IN COMPLIANCE */}
              <div className="sms-consent">
                <h4>Communication Preferences</h4>
                <div className="checkbox-group">
                  <input type="checkbox" id="sms-optin" />
                  <label htmlFor="sms-optin">
                    I consent to receive text messages from Provantage at the
                    phone number provided. Message &amp; data rates may apply.
                    Message frequency varies. Reply <strong>STOP</strong> to
                    unsubscribe or <strong>HELP</strong> for help. View our{" "}
                    <a href="#">Terms of Service</a> and{" "}
                    <a href="#">Privacy Policy</a>.
                  </label>
                </div>
                <div className="checkbox-group">
                  <input type="checkbox" id="email-optin" />
                  <label htmlFor="email-optin">
                    I consent to receive email communications from Provantage
                    regarding services, updates and relevant information.
                  </label>
                </div>
                <p className="consent-note">
                  Your information is kept strictly confidential. You may opt out
                  at any time. Consent is not a condition of service.
                </p>
              </div>

              <button type="submit" className="btn-submit">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#" className="nav-logo" style={{ marginBottom: 20 }}>
                <Image
                  src="/provantage_logo.png"
                  alt="Provantage"
                  width={180}
                  height={32}
                  style={{ height: 32, width: "auto" }}
                />
              </a>
              <p>
                Tax advisory, accounting and business management services built
                around one goal &mdash; helping you keep more of your money.
              </p>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <a href="#svc-tax">Tax Advisory</a>
              <a href="#svc-accounting">Accounting</a>
              <a href="#svc-crypto">Crypto &amp; Web3</a>
              <a href="#svc-consulting">Consulting</a>
              <a href="#svc-sports">Sports &amp; Entertainment</a>
              <a href="#svc-private">Private Client Services</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#team">Team</a>
              <a href="#contact">Contact</a>
              <a
                href="https://portal.provantagecapital.com/login?step=signIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Client Portal
              </a>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <a href="tel:+18882165939">+1 (888) 216-5939</a>
              <a href="mailto:support@provantagecapital.com">
                support@provantagecapital.com
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-legal">
              <p>
                &copy; 2026 Provantage Capital Management Ltd. All rights
                reserved. &ldquo;Provantage&rdquo; is the brand name under which
                Provantage Capital Management Ltd. (PCML) and its affiliated
                entities provide professional services. PCML is a member of the
                American Institute of Certified Public Accountants (AICPA).
                However, PCML and its affiliated entities are not licensed CPA
                firms and, therefore, do not directly provide tax preparation or
                attest services. Tax preparation services are provided to
                Provantage clients exclusively by independent CPAs. PCML and its
                affiliated entities provide accounting, advisory and consulting
                services to their clients. Each entity within the Provantage
                Network is a separate and independent legal entity and use of
                the &ldquo;Provantage&rdquo; name does not imply a partnership
                or joint venture among the member entities.
              </p>
              <p>
                PCML is not registered with the U.S. Securities and Exchange
                Commission (SEC) or the Financial Industry Regulatory Authority
                (FINRA) and does not provide investment advisory or brokerage
                services. Alternative investment opportunities are provided
                exclusively through Provantage Private Client Services and are
                available only to eligible clients.
              </p>
              <p>
                The information provided on this website and through Provantage
                services is for general informational purposes only and does not
                constitute investment, tax, legal, or accounting advice. Clients
                should consult with their own qualified professionals before
                making any financial decisions.
              </p>
              <p>
                Communications made through this website or other digital
                channels are not confidential and do not establish a
                client-advisor relationship. A formal client relationship with
                any Provantage entity is established only through the execution
                of a written engagement agreement.
              </p>
              <p>
                PCML does not act in a fiduciary capacity for its clients.
                Nothing herein should be construed as creating a fiduciary duty
                or obligation on the part of PCML or any of its affiliated
                entities.
              </p>
              <p>
                Provantage is committed to ensuring digital accessibility for
                people with disabilities. We continually improve the user
                experience for everyone and apply the relevant accessibility
                standards. We endeavor to conform to Web Content Accessibility
                Guidelines (WCAG) 2.1, Level AA. If you experience any
                difficulty accessing any part of this website, please contact us
                at{" "}
                <a href="mailto:support@provantagecapital.com">
                  support@provantagecapital.com
                </a>{" "}
                or call{" "}
                <a href="tel:+18882165939">+1 (888) 216-5939</a> and we will
                work with you to provide the information or service you seek
                through an accessible alternative.
              </p>
              <p>
                For more information about how we collect, use and protect your
                personal data, please review our{" "}
                <a href="#">Privacy Policy</a> and{" "}
                <a href="#">Terms of Use</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
