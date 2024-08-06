function add(numbers) {
    if (!numbers) return 0;

    let delimiter = /[,\n]/;
    if (numbers.startsWith("//")) {
        const [customDelimiter, rest] = numbers.split("\n", 2);
        delimiter = new RegExp(`[${customDelimiter.slice(2)}]`);
        numbers = rest;
    }

    const numArray = numbers
        .split(delimiter)
        .map(Number);

    const negatives = numArray.filter(num => num < 0);
    if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
