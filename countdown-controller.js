(function () {
  const counterModel = window.counterModel;
  const INIT_VALUE = 10
  let startButton = null;
  let stopButton = null;

  function init(view) {
    console.log(counterModel.count);
    counterModel.setCount(INIT_VALUE);
    view.countText.textContent = counterModel.getCount();
    console.log(counterModel.count);
    startButton = view.buttonStart;
    stopButton = view.buttonStop;
  }

  function start() {
    counterModel.start(true);
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
