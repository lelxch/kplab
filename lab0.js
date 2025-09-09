// Лабораторна 0: сума чисел 1..n (n — аргумент командного рядка)
const n = Number(process.argv[2] ?? 5);
if (!Number.isFinite(n) || n < 0) {
  console.error("Використання: node lab1.js 5");
  process.exit(1);
}
let sum = 0;
for (let i = 1; i <= n; i++) sum += i;
console.log(`Сума чисел від 1 до ${n} = ${sum}`);