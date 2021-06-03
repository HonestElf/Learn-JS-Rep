console.log('test');

function debounce(func, timeout) {
  let timerId;
  function newFunc(...value) {
    clearTimeout(timerId);
    timerId = setTimeout(() => func(...value), timeout);
  }

  return newFunc;
}

const debounced = debounce(console.log, 1000);

debounced(1);
debounced(2, 45);
debounced(3, 5, 6);
debounced(4);
debounced(5); // Только этот вызов через н мсек.
