let exchangeRates = {
    eur: 1,
    lvl: 0.69,
    usd: 1.11
}

let usdToLvl = usd => {
    // 1. usd => eur   
    let eur = usd / exchangeRates.usd
     // 2. eur => lvl
    let lvl =  eur * exchangeRates.lvl
    return lvl
    // vai ari | usd / exchangeRates.usd * exchangeRates.lvl
}

let usdToLvl2 = function(usd) {
  return usd / exchangeRates.usd * exchangeRates.lvl
}

let lvl = usdToLvl(10)
