let zSpacing = -1000;
lastPost = zSpacing / 5;
$frames = document.getElementsByClassName('frame');
frames = Array.from($frames);
zVals = [];

window.onscroll = function () {
  let top = document.documentElement.scrollTop;
  delta = lastPost - top;

  lastPost = top;

  frames.forEach(function (n, i) {
    zVals.push(i * zSpacing + zSpacing);
    zVals[i] += delta * -5;
    let frame = frames[i];
    transform = `translateZ(${zVals[i]}px)`;
    opacity = 1;

    opacitybg(zVals, zSpacing, i);

    // opacity = zVals[i] < Math.abs(zSpacing) / 10 ? 1 : 0;
    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
  });
};

window.scrollTo(0, 2);

function opacitybg(zVals, zSpacing, i) {
  if (zVals[i] > Math.abs(zSpacing) / 10) {
    opacity = 0;
  } else {
    opacity = 1;
  }

  if (i >= 5) {
    if (zVals[i - 2] < Math.abs(zSpacing) / 1.25) {
      opacity = 0.1;
    } else if (zVals[i] > Math.abs(zSpacing) / 10) {
      opacity = 0;
    } else {
      opacity = 1;
    }
  } else if (i >= 4) {
    if (zVals[i - 1] < Math.abs(zSpacing) / 10) {
      opacity = 0.1;
    } else if (zVals[i] > Math.abs(zSpacing) / 10) {
      opacity = 0;
    } else {
      opacity = 1;
    }
  }
}
