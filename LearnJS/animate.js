function animate(callback, duration) {
  const startTime = Date.now();

  const doAnimation = () => {
    let progress = (Date.now() - startTime) / duration;

    requestAnimationFrame(() => {
      if (progress < 1) {
        callback(progress);
        doAnimation();
      } else {
        callback(1);
      }
    });
  };

  callback(0);
  doAnimation();
}

animate((progress) => {
  document.querySelector('#text').style = `font-size: ${100 * progress}px`; // Changes font size from 0 to 100
}, 5000);
