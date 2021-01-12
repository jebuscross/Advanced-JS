// Частичное применение при помощи замыкания

// Делаем абстрактный логарифм на основе натурального
// Число и основание по которому делаем логарифм
const log = (base, n) => Math.log(n) / Math.log(base)

// Порождаем из абстрактной функции логарифма конкретную
// Для получения конкретного логарфима вызываем функцию 2 раза
// Функциональное наследование
const createLog = base => n => log(base, n)

// Usage

const lg = createLog(10)
const ln = createLog(Math.E)

console.log('lg(5) = ' + lg(5))
console.log('ln(5) = ' + ln(5))
