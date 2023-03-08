window.addEventListener('DOMContentLoaded', setup); 

function setup() {
    const options = {
        rootMargin: '0px 0px -200px 0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            } else {
                return; 
            }
        })
    }, options);

    const h1 = document.querySelector('h1');
    observer.observe(h1);

    const paras = document.querySelectorAll('p');
    paras.forEach(p => observer.observe(p));
}