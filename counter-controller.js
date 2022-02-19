(function () {
  const counterModel = window.counterModel;
  const INIT_VALUE = 0;
  let startButton = null;
  let stopButton = null;

  function init(view) {
    counterModel.setCount(INIT_VALUE);
    view.countText.textContent = counterModel.getCount();
    startButton = view.buttonStart;
    stopButton = view.buttonStop;
  }

  function start() {
    counterModel.start();
    startButton.disabled = true;
    stopButton.disabled = false;
  }

  function stop() {
    counterModel.stop();
    startButton.disabled = false;
    stopButton.disabled = true;
  }

  function reset() {
    stop();
    counterModel.setCount(INIT_VALUE);
  }

  window.countController = {
    init,
    start,
    stop,
    reset,
  };
})(window);
