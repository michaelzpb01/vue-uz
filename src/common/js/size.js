module.exports = function () {
  function size() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 50 + 'px';
  }
  size();
  window.addEventListener('resize', function () {
    size();
  }, false);
};

