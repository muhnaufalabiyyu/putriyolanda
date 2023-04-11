

  window.onload = function () {
    Swal.fire({
      title: 'Selamat datang!',
      text: 'Harap scroll perlahan, baca dan ikuti setiap konten yang ada yaa!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Okay!',
      cancelButtonText: 'Tidak Mau',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
      } else {
        location.reload();
      }
    });
  }


  window.addEventListener("load", function () {
    document.querySelector(".hero").classList.add("fade-in");
  });

  const canvas = document.getElementById('canvas')
  const starback = new Starback(canvas, {
    type: 'dot',
    quantity: 100,
    direction: 225,
    backgroundColor: ['#0e1118', '#232b3e'],
    randomOpacity: true,
  })


  const textArray = [
    "Hello, Putri Yolanda.",
    "Bonjour, Putri Yolanda.",
    "Hola, Putri Yolanda.",
    "Ciao, Putri Yolanda.",
    "Hej, Putri Yolanda.",
    "こんにちは, Putri Yolanda.",
    "안녕하세요, Putri Yolanda.",
  ];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000;
  let textArrayIndex = 0;
  let charIndex = 0;
  let newText = "";

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      document.getElementById("typewriter").textContent +=
        textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      newText = textArray[textArrayIndex].substring(0, charIndex - 1);
      document.getElementById("typewriter").textContent = newText;
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) {
        textArrayIndex = 0;
      }
      setTimeout(type, typingDelay + 1100);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) {
      setTimeout(type, newTextDelay + 250);
    }
  });


  const slideElements = () => {
    const slideUps = document.querySelectorAll(".slide-up");
    slideUps.forEach((slideUp) => {
      const slideUpTop = slideUp.getBoundingClientRect().top;
      const slideUpPoint = window.innerHeight - slideUp.offsetHeight / 2;
      if (slideUpTop < slideUpPoint) {
        slideUp.classList.add("show");
      }
    });
  };
  window.addEventListener("scroll", slideElements);


  const container = document.querySelector('.group-1');
  function ubahIsiCard(event) {
    const clickedButton = event.target;
    const card = clickedButton.closest('.card');
    const hadiah = clickedButton.getAttribute('data-hadiah');
    if (clickedButton.classList.contains('hadiah')) {
      card.innerHTML = '<div class="card-header">Gift for You</div><div class="card-body"><p>Congratulations, you\'ve got</p><img src="assets/img/' + hadiah + '.png" alt="hadiah1" width="100%" height="100%"></div>';
      const buttons = container.querySelectorAll('.hadiah');
      for (let i = 0; i < buttons.length; i++) {
        if (buttons[i] !== clickedButton) {
          buttons[i].classList.add('disabled');
          buttons[i].disabled = true;
        }
      }
    }
  }
  container.addEventListener('click', ubahIsiCard);


  const flower = document.querySelector('.flower');
  const images = [
    'assets/img/flower.png'
  ];

  // Menambahkan gambar secara acak
  for (let i = 0; i < 10; i++) {
    const image = document.createElement('img');
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomX = Math.floor(Math.random() * flower.clientWidth);
    const randomY = Math.floor(Math.random() * flower.clientHeight);

    image.src = images[randomIndex];
    image.style.position = 'absolute';
    image.style.top = `${randomY}px`;
    image.style.left = `${randomX}px`;
    image.style.width = '50px';
    image.style.zIndex = '-1';
    image.style.opacity = '50%';

    flower.appendChild(image);
  }