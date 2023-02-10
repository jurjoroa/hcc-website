const nextSectionButton = document.querySelector('.next-section-button');
const sections = document.querySelectorAll('.intro');

let currentSectionIndex = 0;

nextSectionButton.addEventListener('click', function () {
  sections[currentSectionIndex].scrollIntoView({
    behavior: 'smooth'
  });

  currentSectionIndex = (currentSectionIndex + 1) % sections.length;
});