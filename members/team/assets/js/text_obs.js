// Select the element to observe
const scrollText = document.querySelector('.scroll-text');

// Create an observer that triggers when the element is in view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('show')) {
      // Add a class to the element when it enters the viewport for the first time
      entry.target.classList.add('show');
      // Disconnect the observer to prevent further triggers
      observer.disconnect();
    }
  });
});

// Observe the element
observer.observe(scrollText);