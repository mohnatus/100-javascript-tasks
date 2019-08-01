module.exports = (fn, times = 1000) => {
  let date = new Date();
  for (let i = 0; i < times; i++) fn();
  return (new Date() - date) / times;
}