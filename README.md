# **🌙 Eclipsia — Token Risk Scanner**

**Eclipsia** is an **AI-powered Chrome extension** designed to scan smart contracts and detect digital threats in **real-time**.

Minimalistic, fast, and focused on clarity — it helps you assess token safety before making a move.

---

## 🔍 **Key Features**

- **🌕 Moonlight Scan**  
  Instant contract check to evaluate token risk status.
  
- **🤖 AI Risk Pattern**  
  Predictive signals based on **behavioral anomalies**.
  
- **🕵️‍♂️ On-chain Shadows**  
  Token movement tracing and transaction history analysis.

- **🌟 MoonTrust**  
  Visual trust score (0-100), generated dynamically based on multiple risk factors.

---

## 🎨 **Visual Identity**

Elegant **purple-gold** palette, a glowing **crescent moon**, and **crypto-tech glyphs**.

Designed for **simplicity** and **visibility**.

---

## 🛠️ **Tech Stack**

- **DexScreener API**: Real-time market data integration.
  
- **Lightweight frontend**: Inline logic for fast performance.
  
- **Solana Support**: Added blockchain platform for token scanning.

- **Experimental AI Risk Model**: For real-time scam prediction and anomaly detection.

---

## 🗺️ **Roadmap Highlights**

- ✅ **Core scanning and scoring logic**  
- ✅ **Visual extension UI**  
- ✅ **GitHub setup and docs**  
- 🚧 **Phantom Watchlist & Twilight Alert modules**  
- 🚧 **Animated intro and full project website**

---

##  🛠️**Intelligent Algorithms**

### 1. 🌕 **Moonlight Scan**

Evaluates if the token is **clean** or **suspicious** based on contract behaviors.

```javascript
function moonlightScanScore(txRestriction, feePresence, renounceStatus) {
  const risk = (txRestriction ? 1 : 0) + (feePresence ? 1 : 0) + (renounceStatus ? 0 : 1);
  return risk >= 2 ? "⚠️ Suspicious flags detected" : "Clean";
}
```
txRestriction = Sell restrictions (honeypot);

feePresence = High swap fee (>10%);

renounceStatus = Contract ownership renounced or not;


2. 📊 AI Risk Pattern
Predicts the risk level of a token based on transaction history and token behavior.

```javascript
function aiRiskPatternScore(txCount, liquidityEvents, ownerChangeCount) {
  let score = 0;
  if (txCount < 10) score += 1;
  if (liquidityEvents > 3) score += 1;
  if (ownerChangeCount > 0) score += 1;

  if (score === 0) return "Low";
  if (score === 1) return "Medium";
  return "High";
}
```
txCount = Number of transactions;

liquidityEvents = Liquidity pool manipulations;

ownerChangeCount = Number of owner changes;


3. 🌑 On-chain Shadows
Tracks how many linked wallets have interacted with the token.

```javascript
function shadowLinkedWallets(totalTransfers, uniqueWallets) {
  const traceRatio = totalTransfers / uniqueWallets;
  if (traceRatio > 3.5) return `${Math.floor(uniqueWallets * 0.4)} linked wallets`;
  if (traceRatio > 2) return `${Math.floor(uniqueWallets * 0.25)} linked wallets`;
  return `${Math.floor(uniqueWallets * 0.1)} linked wallets`;
}
```
totalTransfers = Total token transfers;

uniqueWallets = Number of unique wallets;


4. 💠 MoonTrust Score (0-100)
An aggregated trust score that combines the Moonlight Scan, AI Risk Pattern, and linked wallets data.

```javascript
function moonTrustScore(moonlight, riskLevel, linkedCount) {
  let score = 100;

  if (moonlight === "⚠️ Suspicious flags detected") score -= 30;
  if (riskLevel === "Medium") score -= 15;
  if (riskLevel === "High") score -= 30;
  if (linkedCount > 5) score -= 10;

  return Math.max(score, 0);
}
```
Combines the results of the Moonlight Scan, AI Risk, and linked wallets;

---
## **⚠️ Disclaimer**

Eclipsia is a **data-driven helper tool** for evaluating token risks.

**This is not financial advice. Do your own research.**

---

### **🌐 Official Links**

- **Website**: [eclipsia.tech](https://eclipsia.tech/)
- **Twitter**: [@EclipsiaLayer](https://twitter.com/EclipsiaLayer)
- **GitHub**: [github.com/EclipsiaLayer](https://github.com/EclipsiaLayer)

---
