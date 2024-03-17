const a = "1";

const b = "这是主分支";

const c = "注册里卡多和";

const d = "1111111";

// 写一个计算两天的函数
function calculateDays(date1, date2) {
  const diff = Math.abs(date2 - date1);
  return Math.ceil(diff / (1000 * 3600 * 24));
}
const days = calculateDays(new Date("2023-01-01"), new Date("2023-01-03"));
console.log(days); // 输出 2
