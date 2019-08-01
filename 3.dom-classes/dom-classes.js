const addClass = (el, className) => el.classList.add(className);
const removeClass = (el, className) => el.classList.remove(className);
const toggleClass = (el, className) => el.classList.toggle(className);

module.exports = {
  addClass, removeClass, toggleClass
};