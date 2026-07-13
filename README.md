Wallet Scanner
Free, open-source blockchain forensics tool for Flare Network
Trace fund flows across wallet networks, classify transaction patterns, and generate
professional investigation reports.
---

## A Personal Letter

**[📄 Read the Letter](./PERSONAL_LETTER.pdf)** 

---
Word to Victims
If you’re here because you lost funds to a phishing scam, theft, or fraud—you’re not alone.
This tool exists because someone (you might be reading this) experienced exactly what
you’re going through. Use it to understand your loss. Use it to help law enforcement. Use it
to recover what you can.
Your data. Your investigation. Your recovery. For free.
Why This Exists
In June 2026, 8,306 stXRP were stolen from a wallet via the Firelight phishing exploit.
Tracing those funds manually took weeks of CSV downloads, spreadsheets, and pattern
analysis—work that enterprises charge thousands for.
This tool exists to democratize that capability. If you’ve been victimized, you shouldn’t
have to hire a forensics firm to understand where your funds went.
Overview
Super Wallet Scanner is a browser-based PWA (Progressive Web App) that analyzes
blockchain transaction data to map fund flows, identify behavioral patterns, and help theft
victims, researchers, and compliance teams trace stolen assets.
No installation required. No registration. No data sent to servers. Everything runs in
your browser.
Features
 Wallet Network Analysis
Input any wallet address + date range
Automatically discover up to 200 connected wallets
Live transaction history from Flare Explorer
 Behavioral Classification
Wallets are automatically classified as:
Consolidators — Multiple inbound → single outbound (fund aggregation)
Distributors — Single inbound → multiple outbound (fund splitting)
Relays — Single in/out, same value (pass-through/bridging)
Exchanges — High volume, many counterparties (exchange infrastructure)
 Interactive Network Topology
Force-directed D3.js graph visualization
Drag nodes to explore relationships
Click any bubble → opens wallet on Flare Scan
Hover for full address + stats
Pinch-to-zoom (mobile) / scroll-to-zoom (desktop)
 Professional Reports
Multi-page investigation report
Executive summary + key metrics
Network topology flowchart (SVG diagram showing fund flows)
Classified wallets table (top 15 by volume)
Classification methodology + disclaimers
Print to PDF via browser print dialog
 Backup & Restore
Export scan results as JSON
Restore previous scans instantly
Rerun analysis with different parameters
 Performance Optimized
Scans up to 200 connected wallets with 250ms delays between requests
Graph renders top 400 transaction links (mobile/laptop compatible)
D3 force simulation stabilizes in <30 seconds
Quick Start
Online
Visit: super-wallet-scanner.netlify.app
Locally
1. Download this repo: git clone https://github.com/yourusername/super-wallet
scanner
2. Open index.html in your browser
3. Enter wallet address + date range
4. Click START SCAN
On Mobile (iOS/Android)
1. Open app in Safari or Chrome
2. Tap Share → Add to Home Screen
3. Opens as a full-screen app (PWA)
How to Use
Step 1: Configure Scan
Target Wallet Address: Enter any Flare wallet (0x…)
Start Date / End Date: Date range to analyze
Click START SCAN
Step 2: Wait for Results
App downloads transaction history
Classifies wallet behaviors
Renders network topology (usually 30-60 seconds)
Step 3: Explore Network
Drag bubbles to move nodes around
Click bubbles to open wallet on Flare Scan
Hover over bubbles for full address + volume
Zoom by pinching (mobile) or scrolling (desktop)
Pan by clicking and dragging
Step 4: Export & Report
EXPORT JSON: Backup your scan for later
GENERATE REPORT: Creates professional PDF-printable report
1. Click button → HTML file downloads to Downloads folder
2. Open the file in your browser
3. Press Ctrl+P (Windows) or Cmd+P (Mac) → “Save as PDF”
Use Cases
Theft Victims
Trace your stolen funds to identify where they went, which exchanges received them, and
build evidence for law enforcement claims.
Researchers
Study scam infrastructure at scale — identify deployer wallets, fund distribution patterns,
and interconnected attack networks.
Law Enforcement
Map criminal fund flows, quantify victim count estimates, and prepare cases against
exchanges for asset recovery.
Compliance Teams
Monitor wallets for suspicious patterns and fund sources before deposit/withdrawal.
Technical Details
What Data is Used?
Public blockchain data only — Downloaded from Flare Explorer API
No private keys, seeds, or sensitive data required
All processing happens in your browser (client-side only)
No personal data is collected or sent to external servers
How Classification Works?
Wallets are classified based on transaction direction and value:
Pattern
Classification
3+ in → 1-2 out
Confidence
Consolidator
1-2 in → 4+ out
85%
Distributor
1 in → 1 out, ~same value
80%
Relay
10+ tx, many counterparties
95%
Exchange-Linked
Performance
250ms delay between API requests (respects rate limits)
Maximum 200 connected wallets per scan
Graph renders top 400 transaction links
60%
~50 KB self-contained HTML file
Browser Support
Chrome/Edge 80+
Firefox 75+
Safari 13+
Mobile browsers (iOS Safari, Chrome Android)
Installation & Deployment
Local Use
git clone https://github.com/yourusername/super-wallet-scanner
cd super-wallet-scanner
# Open index.html in your browser
Deploy to Netlify (Free)
1. Sign up at netlify.com
2. Connect your GitHub repo
3. Deploy settings:
Build command: (leave empty)
Publish directory: .
4. Auto-deploys on every GitHub push
Custom Domain
Add your domain in Netlify settings
Important Disclaimers
 This tool provides blockchain data analysis only.
Not legal advice. Classification is heuristic-based and may contain false positives.
Not financial advice. Do not rely on this tool alone for investment decisions.
Evidence standard. Findings should be independently verified and combined with
additional evidence before use in legal proceedings.
API dependency. Relies on Flare Explorer API availability.
Limitations. Can only analyze public blockchain data. Real-world identity requires law
enforcement investigation with subpoena authority.
Consult a lawyer and law enforcement before taking action based on findings.
Reporting Suspected Theft
If you’ve been a victim of crypto theft:
1. File with FBI/IC3: ic3.gov (U.S.)
2. Contact exchange compliance teams with wallet addresses
3. Report to Flare Foundation if exploiting Flare-specific contracts
4. Consult a lawyer for civil recovery options
5. File with Interpol for international coordination
Contributing
This is an open-source project. Contributions welcome!
Areas for Enhancement
Support for additional networks (Ethereum, Polygon, etc.)
Real-time monitoring features
Integration with exchange APIs for live compliance checking
Machine learning classification refinement
Mobile app wrapper
How to Contribute
1. Fork the repo
2. Create a branch ( git checkout -b feature/your-feature )
3. Make your changes
4. Test thoroughly
5. Submit a pull request
License
MIT License — Free to use, modify, and distribute.
See LICENSE file for full details.
Support & Issues
Found a bug? Have a feature request?
GitHub Issues: Report via GitHub issues tab
Email: [your contact]
Disclaimer
This tool is provided as-is for educational, research, and investigative purposes. The author
assumes no liability for:
Accuracy of blockchain data
Misuse of findings
Technical failures or API unavailability
Legal consequences of user actions
Use responsibly. Consult legal counsel.
FAQ
Q: Do you store my wallet address or scan data? A: No. Everything runs in your browser.
No data is sent to external servers.
Q: Can I use this to monitor my own wallet? A: Yes. Enter your address and date range to
see all connected wallets and transactions.
Q: How long does a scan take? A: Usually 30-60 seconds depending on wallet
connectivity and network speed.
Q: What if I get an error? A: Check the Debug Output panel. Errors are usually API rate
limiting (wait 1 min) or invalid wallet address.
Q: How do I report findings to law enforcement? A: FBI/IC3 (ic3.gov in U.S.), local police,
or Interpol with your scan results and investigation report PDF.
Roadmap
Support for additional networks (Ethereum, Polygon, etc.)
Real-time monitoring alerts
Exchange API integration for direct fund tracking
ML-based pattern detection
Collaborative investigation features
Mobile app wrapper
Free. Open-source. Built for you.
Help us improve this tool. Star, fork, and contribute.
