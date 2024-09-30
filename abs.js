const isPositive = n => (n > 0 ? true : false);
const abs = n => (n === 0 ? 0 : isPositive(n) ? n : n * -1);