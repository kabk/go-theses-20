document.addEventListener('DOMContentLoaded', ready);
function ready() {
  automaticScroll();
  flipImages();
}

let stopScrolling;
let scrollAmount = 12;

function automaticScroll() {
  let endPoint = document.body.offsetHeight;
  let currentPoint = window.innerHeight + window.pageYOffset;

  window.addEventListener('resize', () => {
    endPoint = document.body.offsetHeight;
  });

  window.addEventListener('wheel', () => {
    stopScrolling = true;
    setTimeout(() => {
      stopScrolling = false;
    }, 3000);
  });

  window.addEventListener('keydown', () => {
    stopScrolling = true;
    setTimeout(() => {
      stopScrolling = false;
    }, 3000);
  });

  setInterval(function() {
    if (stopScrolling) {
      return;
    } else {
      currentPoint = window.innerHeight + window.pageYOffset;
      if (currentPoint - window.innerHeight <= 0 || currentPoint >= endPoint) {
        scrollAmount = -scrollAmount;
      }
      console.log(currentPoint, endPoint);
      window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, 20);
}

function flipImages() {
  let objects = document.querySelectorAll('.object');
  objects.forEach(object => {
    object.addEventListener('click', e => {
      object.classList.toggle('flipped');
      stopScrolling = !stopScrolling;
    });
  });
}
