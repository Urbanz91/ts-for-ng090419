// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
// Возвращает true, если все аргументы, кроме первого входят в первый.
// Первым всегда должен быть массив.
type snb = string | number | boolean

function isInArray(arr: snb[], ...args: snb[]): snb {
    return args.every(x => arr.indexOf(x) > -1);
}

// Написать функцию summator(), которая суммирует переданые ей аргументы.
// Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
function summator(...args: number[]): number;
function summator(...args: string[]): string;
function summator(...args: (string | number)[]): string | number {
    return args.reduce((prev: number, curr: string | number) => {
        if (typeof curr === "string") {
            return prev += parseInt(curr);
        }
        return prev += curr;
    }, 0);
}

// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
// и возвращает массив уникальных элементов. Аргумент не должен изменяться.
// Порядок элементов результирующего массива должен совпадать с порядком,
// в котором они встречаются в оригинальной структуре
function getUnique(...args: unknown[]): unknown[] {
    return new Set(...args);
    return args.filter((curr, idx, arr) => arr.indexOf(curr) === idx);
}
