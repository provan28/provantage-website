# Provantage Website

## Project
New website for Provantage (marketing name for Provantage Capital Management Ltd.)
Tax advisory & accounting firm based in Los Angeles.

## Tech
- Next.js (static export) for Render deployment
- Modern, professional design — inspired by cbiz.com and lidoadvisors.com
- NOT a fintech look — big firm, traditional but modern
- Navy (#0B1D3A), gold (#B8956A), cream (#F8F6F3) color palette
- Cormorant Garamond (display) + DM Sans (body) fonts

## Source File
The file `provantage-capital.html` in this directory is the working prototype.
Use it as the **source of truth** for all content, structure, styling, and layout.
Convert it into a deployable Next.js project for Render.

## Brand
- The firm is referred to as "Provantage" (not Provantage Capital Management) in all client-facing copy
- "Provantage" is a registered trademark
- Legal footer reads: "Provantage" is the marketing name for Provantage Capital Management Ltd.
- Logo: use `provantage_logo_darkblue.png` — convert to white for nav/footer on dark backgrounds

## Nav Structure
- About
- Services (dropdown with 6 items + Private Client Services under "Premium" divider)
- Industries (3-column dropdown with 11 industries + "View All Industries →" link)
- Contact
- Client Portal (gold button — links to https://portal.provantagecapital.com/login?step=signIn — NOT a page, just a direct link)

## Services (6)
1. Tax Advisory — tax planning, diagnostics, optimization reports, pre-audit prep, POA management, quarterly reviews
2. Accounting — monthly bookkeeping, payroll, W-2/1099 e-filing, controller & CFO services, retirement contributions
3. Crypto & Web3 — on-chain accounting, multi-sig, DeFi, liquidity pools, treasury management, crypto auditing
4. Consulting — business investment advisory, expansion & acquisition, risk analysis, entity formation (domestic + offshore), Moore-Marsden analysis, prenup/postnup
5. Sports & Entertainment — full business management, administrative management for athletes and entertainers
6. Private Client Services — $10M+ net worth, $1M+ revenue minimum, dedicated advisor on annual retainer, "By Invitation" badge

## Industries (11)
Construction, Consumer & Industrial, Cryptocurrency, Dealerships, Education, Financial Services, Food & Beverage, Healthcare, Law, Real Estate, Technology

## Hero
- Rotating lifestyle images (vacation, yacht, beach, travel, luxury) crossfading every 5 seconds
- Dark overlay for text readability
- Navigation dots at bottom
- Tagline: "Keep More of Your Money."
- Subtitle: "Strategic tax planning, expert accounting, and business advisory — so you can spend more time living the life you've built."
- CTA buttons: "Schedule a Consultation" + "Our Services"

## Key Business Context
- Provantage is NOT a CPA firm — they do not prepare tax returns
- Tax returns are prepared by engaged CPAs (external) — client only speaks with Provantage
- Provantage acts as an agency on behalf of the client
- In-house CPA manages compliance and POAs
- The engagement with the preparing CPA is built into Provantage's engagement agreement

## Contact Form
- Fields: First Name, Last Name, Email, Phone, Company/Entity, Service of Interest (dropdown), Message
- SMS opt-in checkbox (TCPA compliant, unchecked by default): consent language with STOP/HELP, links to Terms and Privacy
- Email opt-in checkbox
- "Consent is not a condition of service" disclaimer

## Office Locations
- DTLA Office — Provantage Advisory Services: 445 S Figueroa St, Fl 31, Los Angeles, CA 90071
- Foothill Office — Provantage Accounting Services: 101 N Indian Hill Blvd, Suite 206, Claremont, CA 91711
- Phone: +1 (888) 216-5939
- Email: support@provantagecapital.com

## Deployment
- Target: Render (static site or web service)
- Domain: provantagecapital.com (registered on Squarespace)
- DO NOT touch MX records (Office 365 email)
- DO NOT touch portal.provantagecapital.com subdomain (third-party client portal)
