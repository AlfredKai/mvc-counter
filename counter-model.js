(function () {
  let count = 0;
  let interval = null;
  let observers = [];

  function getCount() {
    return this.count;
  }

  function setCount(value) {
    this.count = value;
    for (const obs of observers) {
      obs(this.count);
    }
  }

  function start(countdown = false) {
    interval = setInterval(() => {
      if (countdown) {
        this.setCount(this.getCount() - 1);
      } else {
        this.setCount(this.getCount() + 1);
      }
    }, 1000);
  }

  function stop() {
    clearInterval(interval);
  }

  function registerObserver(obs) {
    observers.push(obs);
  }

  window.counterModel = {
    count,
    getCount,
    setCount,
    start,
    stop,
    registerObserver,
  };
})(window);
