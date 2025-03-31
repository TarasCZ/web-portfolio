
export const initScrollAnimations = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  };
  
  const observer = new IntersectionObserver(handleIntersect, observerOptions);
  
  const elements = document.querySelectorAll('.animate-reveal');
  elements.forEach(el => {
    observer.observe(el);
  });
};
