function animateMe (divForAnimation , Animation) {
    const elements = document.querySelectorAll(`.${divForAnimation}`); 
    // console.log(divForAnimation , elements);
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    };
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(Animation);
        }
        
        else {
            entry.target.classList.add('no-animation');
        }
      });
    };
    elements.forEach((element) => {
      let observer = new IntersectionObserver(callback, options);
      observer.observe(element);
    });    
}


export {animateMe};
