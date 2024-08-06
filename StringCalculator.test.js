const add = require('./StringCalculator');

describe('String Calculator', () => {

    test('returns 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('returns the number itself when one number is provided', () => {
        expect(add("1")).toBe(1);
    });

    test('returns the sum of two comma-separated numbers', () => {
        expect(add("1,2")).toBe(3);
    });

    test('returns the sum of multiple comma-separated numbers', () => {
        expect(add("1,2,3,4,5")).toBe(15);
    });

    test('handles newlines as delimiters', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('supports custom delimiters', () => {
        expect(add("//;\n1;2")).toBe(3);
        expect(add("//|\n1|2|3")).toBe(6);
    });

    test('throws an error when a negative number is provided', () => {
        expect(() => add("1,-2,3")).toThrow('Negative numbers not allowed: -2');
    });

    test('throws an error listing all negative numbers when multiple are provided', () => {
        expect(() => add("1,-2,-3")).toThrow('Negative numbers not allowed: -2,-3');
    });

});