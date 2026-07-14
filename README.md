# Wallet Scanner

**Free, open-source blockchain forensics tool**

Automatically trace fund flows across wallet networks, classify wallet behavior patterns, and generate investigation reports across Flare, Songbird, Ethereum, Base, Polygon, and Gnosis Chain. Built by someone who traced their own stolen stXRP.

🔗 **Live:** [wallet-scanner.app](https://wallet-scanner.app)

---

## Overview

Wallet Scanner is a browser-based PWA (Progressive Web App) that pulls public blockchain data, maps fund flows between wallets, classifies behavioral patterns, and helps victims of crypto theft, researchers, and compliance teams trace stolen assets.

**No installation required. No registration. No data ever sent to a server.** Everything — scans, notes, backups — lives only in your own browser.

---

## Site Structure

This repo serves two pages:

- **`index.html`** — the public landing page
- **`app.html`** — the actual tool

The "Launch the Tool" links on the landing page point to `app.html`. The installed PWA icon (via "Add to Home Screen") opens `app.html` directly, not the landing page.

---

## Features

### 🔍 Wallet Network Tracing
- Pick a chain, enter a wallet address, click **Investigate**
- Pulls that wallet's real transaction history (regular transactions, internal transactions, and ERC-20 token transfers) from a public blockchain explorer
- Auto-tracer follows outbound value through relay wallets, consolidation points, and DEX swaps automatically — up to 10 hops and 100 wallets per run

### 🤖 Behavioral Classification
Wallets are automatically flagged based on their actual on-chain pattern, including:
- **Consolidator / Funnel** — many inbound senders, very few outbound recipients
- **Distributor / Fan-out** — few inbound, many outbound recipients
- **Single-Purpose Relay** — a handful of transactions, funds passed straight through
- **Router — Single-Destination Pass-through** — many inbound senders, but all forwarded to one consistent destination (distinguishes a proxy/router from a true dead-end sweep)
- **High-Volume Hub** — large counterparty count in both directions
- **Likely Victim / Possible Victim — Needs Review** — one-way inflow patterns consistent with a phishing loss

Known exchange wallets are identified separately, via a maintained list of confirmed exchange addresses plus live explorer tag lookups — this is a distinct check from behavioral classification, and it won't catch every exchange automatically (some require manual confirmation and adding to the known list).

### 🗺️ Interactive Network Map
- Custom force-directed graph, rendered on Canvas
- Two independent noise filters: a minimum-value threshold, and a "show only wallets connected to the flagged network" toggle — both combine with the existing minimum-transaction-count filter
- Click any node for full address, stats, and a link to the relevant chain's block explorer

### 📋 Investigation Exhibits
- **Generate Exhibit — Flagged Only (recommended):** a compact report — flow-chart diagram plus a wallet table — of just the wallets that matter, suitable for law enforcement or an exchange compliance team
- **Generate Exhibit — Full Network:** a complete visual overview of everything traced; can be large and slow to open on big networks
- Print to PDF via your browser's print dialog

### 💾 Backup & Restore
- **Download backup (.json)** — export your full scan/investigation state
- **Resume session** — the app detects an existing session on the same device and offers to resume it, or start fresh
- Restore a backup file to continue previous work

### 🌍 Multi-Chain
Currently supports Flare, Songbird, Ethereum, Base, Polygon, and Gnosis Chain, selectable from the chain dropdown.

---

## Quick Start

### Online
Visit [wallet-scanner.app](https://wallet-scanner.app)

### Locally
1. Clone this repo: `git clone https://github.com/bvides-saywhen/super-wallet-scanner`
2. Open `app.html` directly in your browser for the tool, or `index.html` for the landing page

### On Mobile (iOS/Android)
1. Open `wallet-scanner.app` in Safari or Chrome
2. Tap **Share** → **Add to Home Screen**
3. Opens as a full-screen app (PWA), launching straight into the tool

---

## How to Use

1. **Pick a chain** from the dropdown, and enter the wallet address you want to investigate.
2. **If you know the attacker's/phishing contract's address, start there** — scanning that address surfaces the whole operation (victims feeding in, relays and exchanges leading out). Scanning your own wallet mainly just shows the theft path itself.
3. Click **Investigate**. The auto-tracer follows the funds automatically.
4. **Download backup (.json)** regularly — this is the only copy of your work, stored only on your device.
5. When ready to report, click **Generate Exhibit — Flagged Only** for a clean report to send to law enforcement or an exchange.

---

## Technical Details

### What data is used?
- **Public blockchain data only**, from each chain's block explorer API (Blockscout-based for most chains, with a Routescan-compatible fallback)
- No private keys, seeds, or sensitive data required or requested
- All processing happens client-side in your browser
- No personal data is collected or transmitted anywhere

### How classification works
Wallets are classified heuristically from the shape of their transaction graph — counterparty counts, inbound/outbound ratios, and value patterns. Classification is a starting point for investigation, not a verified conclusion — always confirm findings independently before relying on them.

### Performance
- Auto-trace: up to 10 hops, 100 wallets per run, with delays between requests to respect explorer rate limits
- High-traffic wallets are sampled (most-recent pages) rather than exhaustively paginated, to keep scans practical
- Map view includes two adjustable noise filters (minimum value, "connected to flagged network") on top of the existing minimum-transaction filter, to keep large networks (thousands of nodes) usable

### Browser Support
- Chrome/Edge, Firefox, Safari (desktop and mobile)
- Installable as a PWA on iOS and Android

---

## Deployment

### Deploy to Netlify (Free)
1. Sign up at netlify.com
2. Connect this GitHub repo
3. Deploy settings: build command empty, publish directory `.`
4. Auto-deploys on every push to `main`
5. Make sure **both** `index.html` and `app.html` are present in the repo root — the site needs both

### Custom Domain
Add your domain in Netlify's site settings.

---

## Use Cases

**Theft victims** — trace stolen funds, identify which exchanges received them, and build a documented record for a law enforcement complaint.

**Researchers** — study scam infrastructure at scale: deployer wallets, fund distribution patterns, drainer-as-a-service chains.

**Law enforcement** — map criminal fund flows and identify exchange endpoints worth subpoenaing.

**Compliance teams** — check whether a wallet's funding history shows patterns worth flagging before accepting a deposit.

---

## Important Disclaimers

⚠️ **This tool provides blockchain data analysis only.**

- **Not legal advice.** Classification is heuristic-based and can produce false positives — verify independently before drawing conclusions.
- **Not financial advice.**
- **Evidence standard.** Findings should be independently verified and combined with additional evidence before use in any legal proceeding.
- **API dependency.** Relies on third-party block explorer availability.
- **Limitations.** Can only analyze public blockchain data. Establishing real-world identity requires law enforcement investigation with subpoena authority.

**Consult a lawyer and law enforcement before taking action based on findings.**

---

## Reporting Suspected Theft

1. **File with FBI/IC3:** [ic3.gov](https://ic3.gov) (U.S.)
2. **Report to relevant exchanges'** compliance teams if funds passed through them
3. **Consult a lawyer** for civil recovery options

---

## Contributing

This is an open-source project — contributions welcome.

1. Fork the repo
2. Create a branch (`git checkout -b feature/your-feature`)
3. Make your changes and test thoroughly
4. Submit a pull request

### Areas for Enhancement
- Real-time monitoring/alerts
- Exchange API integration for live compliance checking
- Further classification refinement
- Additional chain support

---

## License

**MIT License** — free to use, modify, and distribute. See LICENSE file for full details.

---

## Support & Issues

Found a bug or have a feature request? Open an issue on this repo's GitHub Issues tab.

---

## FAQ

**Q: Do you store my wallet address or scan data?**
A: No. Everything runs in your browser. Nothing is sent to any server.

**Q: Can I use this to monitor my own wallet?**
A: Yes — enter your address to see everything it's connected to.

**Q: How long does a scan take?**
A: A single wallet typically takes 30–60 seconds. Full network traces on busy wallets can take several minutes.

**Q: What if I get an error?**
A: Usually explorer rate-limiting (wait a minute and retry) or an invalid address. Try again, or try a different chain if you're unsure which one the address is on.

**Q: Does this work on other chains?**
A: Yes — Flare, Songbird, Ethereum, Base, Polygon, and Gnosis Chain are all supported today, selectable from the chain dropdown.

**Q: How do I report findings to law enforcement?**
A: FBI/IC3 (ic3.gov in the U.S.), your local police, or Interpol, along with your exported backup and generated exhibit.

---

**Free. Open-source. No ads. No tracking.** ⭐

*Help improve this tool — star, fork, and contribute.*
