const usd = (val) => val * 0.33;
const baseCharge = (usage) => {
  if (usage < 0) return usd(0);
  const amount = withinBand(usage, 0, 100) * 0.03
    + withinBand(usage, 100, 200) * 0.05
    + withinBand(usage, 200, Infinity) * 0.07;
  return usd(amount);
}

const withinBand = (usage, bottom, top) => {
  return usage > bottom ? Math.min(usage, top) - bottom : 0
}

const bottomBand = (usage) => {
  return Math.min(usage, 100);
}

const middleBand = (usage) => {
  return usage > 100 ? Math.min(usage, 200) - 100 : 0;
}

const topBand = (usage) => {
  return usage > 200 ? usage - 200 : 0;
}

export default baseCharge;
