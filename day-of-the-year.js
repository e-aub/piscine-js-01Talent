const dayOfTheYear = date => {
    const monthDays = [31, isLeapYear(date) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const daysBefore = monthDays.slice(0, date.getUTCMonth()).reduce((total, days) => total + days, 0);
    return daysBefore + date.getUTCDate();
};

const isLeapYear = date => {
    return new Date(date.getFullYear(), 1, 29).getDate() === 29;
};