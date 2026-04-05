const { abs } = Math;

// Main Function
const juneCelebration = (school, market, shop) =>
    abs(school - market) + abs(market - shop) + abs(shop - school);
export default juneCelebration;

