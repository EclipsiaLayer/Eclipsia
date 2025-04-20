
// Example data values for the functions
const txRestriction = true;
const feePresence = false;
const renounceStatus = false;

const txCount = 100;
const liquidityEvents = 5;
const ownerChangeCount = 1;

const totalTransfers = 1000;
const uniqueWallets = 50;

const moonlight = "⚠️ Suspicious flags detected";
const riskLevel = "Medium";
const linkedCount = 20;

// Functions definitions
function moonlightscan(txRestriction, feePresence, renounceStatus) {
    const risk = (txRestriction ? 1 : 0) + (feePresence ? 1 : 0) + (renounceStatus ? 0 : 1);
    return risk >= 2 ? "⚠️ Suspicious flags detected" : "Clean";
}

function airiskpattern(txCount, liquidityEvents, ownerChangeCount) {
    let score = 0;
    if (txCount < 10) score += 1;
    if (liquidityEvents > 3) score += 1;
    if (ownerChangeCount > 0) score += 1;
  
    if (score === 0) return "Low";
    if (score === 1) return "Medium";
    return "High";
}

function onchainshadows(totalTransfers, uniqueWallets) {
    const traceRatio = totalTransfers / uniqueWallets;
    if (traceRatio > 3.5) return `${Math.floor(uniqueWallets * 0.4)} linked wallets`;
    if (traceRatio > 2) return `${Math.floor(uniqueWallets * 0.25)} linked wallets`;
    return `${Math.floor(uniqueWallets * 0.1)} linked wallets`;
}

function MoonTrust(moonlight, riskLevel, linkedCount) {
    let score = 100;

    if (moonlight === "⚠️ Suspicious flags detected") score -= 30;
    if (riskLevel === "Medium") score -= 15;
    if (riskLevel === "High") score -= 30;
    if (linkedCount > 5) score -= 10; 
    return Math.max(score, 0);
}

// Run calculations based on the example data
const moonlightscanREZ = moonlightscan(txRestriction, feePresence, renounceStatus);
const airiskpatternREZ = airiskpattern(txCount, liquidityEvents, ownerChangeCount);
const onchainshadowsREZ = onchainshadows(totalTransfers, uniqueWallets);
const MoonTrustREZ = MoonTrust(moonlight, riskLevel, linkedCount);

// Display the results in the appropriate HTML elements
document.getElementById('moonlightScanElement').innerHTML = moonlightscanREZ;
document.getElementById('aiRiskPatternElement').innerHTML = airiskpatternREZ;
document.getElementById('onchainShadowsElement').innerHTML = onchainshadowsREZ;
document.getElementById('moonTrustElement').innerHTML = MoonTrustREZ;
