export default function juneCelebration(school, market, shop){

    return Math.abs(school - market) + Math.abs(market - shop) + Math.abs(shop - school);
    
}