let exchangeRates = {
    eur: 1,
    usd: 1.11,
    lvl: 0.69    
}

let usdToLvl = usd => {
    // 1. usd => eur   
    let eur = usd / exchangeRates.usd
     // 2. eur => lvl
    let lvl =  eur * exchangeRates.lvl
    return lvl
    // vai ari | usd / exchangeRates.usd * exchangeRates.lvl
}

//let usdToLvl2 = function(usd) {
//  return usd / exchangeRates.usd * exchangeRates.lvl
//}

let lvl = usdToLvl(1)

//--------------------------------------------

let lvlToUsd = lvl => {

    let eur = lvl / exchangeRates.lvl

    let usd = eur * exchangeRates.usd
    return usd    
}

let usd = lvlToUsd(1)