
const img = document.getElementById('img1');
let windowWidth = window.innerWidth;

function animateImage() {
  anime({
    targets: '#img1',
    translateX: [0, windowWidth],
    duration: 10000, // Adjust the duration to control the speed
    easing: 'linear',
    loop: true,
    update: function(anim) {
      // Teleport the image back to the left when it reaches the right edge
      if (anim.progress >= 100) {
        img.style.left = '0';
        anim.progress = 0; // Reset the progress to start from the beginning
      }
    }
  });
}

window.addEventListener('load', animateImage);

document.addEventListener('click', function(e) {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.left = `${e.clientX - 25}px`;
  circle.style.top = `${e.clientY - 25}px`;
  document.body.appendChild(circle);

  setTimeout(function() {
    circle.remove();
  }, 500);
});

