function toggleNightMode() {
    var stylesheet = document.getElementById('stylesheet');
    var modeIcon = document.getElementById('modeIcon');
    var modeToggle = document.getElementById('modeToggle');
    
    if (stylesheet.getAttribute('href') === 'css/style.css') {
      stylesheet.setAttribute('href', 'css/nightmode.css');
      modeIcon.src = 'images/icons/sun.png';
      modeIcon.alt = 'Sun';
      modeToggle.classList.add('clicked');
    } else {
      stylesheet.setAttribute('href', 'css/style.css');
      modeIcon.src = 'images/icons/moon.png';
      modeIcon.alt = 'Moon';
      modeToggle.classList.remove('clicked');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('myModal');
    var modalBackground = document.getElementById('modalBackground');
    var closeButton = document.getElementById('play');
    var audioPlayer = document.getElementById('audioPlayer');

    function openModal() {
        modal.style.display = 'block';
        modalBackground.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
        modalBackground.style.display = 'none';
    }

    function playAudio() {
        audioPlayer.play();
    }

    openModal();

    closeButton.addEventListener('click', function () {
        closeModal();
        playAudio();
    });
});