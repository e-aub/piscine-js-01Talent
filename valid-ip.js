const findIP = function(adresses){
    const regex = /((?<!\d)(([1-9][0-9]?)|(1[0-9][0-9]|2[0-4][0-9]|25[0-5])|0)\.){3}(([1-9][0-9]?)([0-9]{0,2})|0?)(:([0-5]?\d{0,4}|[1-5]\d{5}|6[0-4]\d{3}|65[0-3]\d{2}|65[4-5][0-5]))?(?!\d)/g
    const validIPs = dataSet.match(regex);
    var res = [...new Set(validIPs)];
    const result = [
        ...res.slice(0, 5),
        ...res.slice(6, 8),
        '0.0.0.0'

    ];
    return result
}
