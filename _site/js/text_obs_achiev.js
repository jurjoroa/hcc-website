function setup() {
    const options = {
        rootMargin: '0px 0px -200px 0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        })
    }, options);

    document.querySelectorAll('h1, p').forEach(element => {
        observer.observe(element);
    });
}

window.addEventListener('DOMContentLoaded', setup);
