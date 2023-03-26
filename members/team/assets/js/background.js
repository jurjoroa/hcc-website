const nextSectionButton = document.querySelector('.btn-21');
const sections = document.querySelectorAll('.intro');
let currentSectionIndex = 0;

nextSectionButton.addEventListener('click', () => {
  sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
  currentSectionIndex = (currentSectionIndex + 1) % sections.length;
});
