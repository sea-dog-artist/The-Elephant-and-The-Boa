
document.addEventListener("DOMContentLoaded", function() {
  const starCount = 20; // Number of stars to create
  const shootingStarInterval = 8000; // Interval between shooting stars in milliseconds

const stars = [];
const MIN_DISTANCE = 50; // минимальное расстояние между звездами в пикселях

function createStar() {
  const maxAttempts = 100;
  let attempt = 0;
  let top, left;
  let overlapping;

  do {
    top = Math.random() * window.innerHeight;
    left = Math.random() * window.innerWidth;
    overlapping = false;

    for (let star of stars) {
      const dx = star.left - left;
      const dy = star.top - top;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < MIN_DISTANCE) {
        overlapping = true;
        break;
      }
    }
    attempt++;
  } while (overlapping && attempt < maxAttempts);

  if (attempt === maxAttempts) {
    console.warn("Couldn't place star without overlap.");
    return;
  }

  const starImages = ["star1", "star2", "star3", "star4"];
  const randomIndex = Math.floor(Math.random() * starImages.length);

  const star = document.createElement("div");
  star.className = "star" + " " + starImages[randomIndex];
  star.style.position = "absolute";
  star.style.top = `${top}px`;
  star.style.left = `${left}px`;

  document.getElementById("stars").appendChild(star);

  stars.push({ top, left });
}

  function createShootingStar() {
    const shootingStar = document.createElement("div");
    shootingStar.className = "shooting-star";
    shootingStar.style.top = `${Math.random() * 100}%`;
    shootingStar.style.left = `${Math.random() * 100}%`;
    document.body.appendChild(shootingStar);
    setTimeout(() => {
      document.body.removeChild(shootingStar);
    }, 3000);
  }

  function generateStars() {
    for (let i = 0; i < starCount; i++) {
      createStar();
    }
  }

  generateStars();
  setTimeout(createShootingStar, Math.random() * shootingStarInterval); // Initial shooting star

  // Randomize shooting star interval
  function randomizeShootingStarInterval() {
    const interval = Math.random() * shootingStarInterval;
    setTimeout(function() {
      createShootingStar();
      randomizeShootingStarInterval();
    }, interval);
  }

  randomizeShootingStarInterval();

  // Smooth scroll to center of planet on Learn more button click
  const learnMoreBtn = document.getElementById("learn-more");
  const planetImg = document.getElementById("planet-img");
  if (learnMoreBtn && planetImg) {
    learnMoreBtn.addEventListener("click", function() {
      const rect = planetImg.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const planetCenter = rect.top + scrollTop + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      window.scrollTo({
        top: planetCenter - viewportCenter,
        behavior: "smooth"
      });
    });
  }
});

// Popup logic: show after 10s, close on X
window.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('popupBox');
  var closeBtn = document.getElementById('closePopup');
  var getNotifiedBtn = document.getElementById('get-notified-btn');
  var bookCoverBlock = document.querySelector('.book-cover-block');
  var footerMailBtn = document.getElementById('footer-mail-btn');
  function showPopup() {
    popup.style.display = 'block';
    popup.classList.add('popup-animate-in');
    popup.classList.remove('popup-animate-out');
  }
  if (popup && closeBtn) {
    setTimeout(function() {
      popup.style.display = 'block';
      // Trigger cartoon appear animation
      popup.classList.add('popup-animate-in');
      popup.classList.remove('popup-animate-out');
    }, 100000);
    closeBtn.addEventListener('click', function() {
      // Trigger cartoon close animation
      popup.classList.remove('popup-animate-in');
      popup.classList.add('popup-animate-out');
      setTimeout(function() {
        popup.style.display = 'none';
      }, 600); // Match animation duration
    });
    if (getNotifiedBtn) {
      getNotifiedBtn.addEventListener('click', showPopup);
    }
    if (bookCoverBlock) {
      bookCoverBlock.addEventListener('click', showPopup);
    }
    if (footerMailBtn) {
      footerMailBtn.addEventListener('click', showPopup);
    }
  }
});

// UFO follow-mouse animation
// let oUfo = document.querySelector('#ufo');
// let ufoDeg = 0, ufoEx = 0, ufoEy = 0, ufoVx = 100, ufoVy = 100, ufoCount = 0;

// window.addEventListener('mousemove', (e) => {
//   ufoEx = e.clientX - oUfo.offsetLeft - oUfo.offsetWidth / 2;
//   ufoEy = e.clientY - oUfo.offsetTop - oUfo.offsetHeight / 2;
//   ufoDeg = Math.atan2(ufoEy, ufoEx) / (2 * Math.PI) * 360 + 45;
//   ufoCount = 0;
// });

// function moveUfo() {
//   oUfo.style.transform = `rotate(${ufoDeg}deg)`;
//   const dist = Math.sqrt(ufoEx * ufoEx + ufoEy * ufoEy);
//   if (ufoCount < 50 && dist > 2) {
//     ufoVx += ufoEx / 300;
//     ufoVy += ufoEy / 300;
//   }
//   oUfo.style.left = ufoVx + 'px';
//   oUfo.style.top = ufoVy + 'px';
//   ufoCount++;
// }
// setInterval(moveUfo, 1);
