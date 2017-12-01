import { input } from './input';

const len = input.length;

export const part1 = input.split('').reduce((total, n, i) => {
    if (input[(i + 1) % len] === n) total += parseInt(n);
    return total;
}, 0);

export const part2 = input.split('').reduce((total, n, i) => {
    if (input[(i + len / 2) % len] === n) total += parseInt(n);
    return total;
}, 0);
