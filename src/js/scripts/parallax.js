{
  // Adopted From: http://thenewcode.com/279/Rotate-Elements-on-Scroll-with-JavaScript
  const blobSVG = document.querySelector('.blob-svg');
  const blobImg = document.querySelector('.blob-img');
  const svgFriction = 0.1;
  const imgFriction = 0.25;
  const blobXPos = '77px';
  
  const throttle = (type, name, obj) => {
    const newObj = obj || window;
    let running = false;
    const tempFunction = () => {
      if (running) { return; }
      running = true;
      requestAnimationFrame( () => {
        newObj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    newObj.addEventListener(type, tempFunction);
  };
  throttle('scroll', 'optimizedScroll');
  
  window.addEventListener('optimizedScroll', () => {
    if (document.documentElement.clientWidth >= 1000) {
      blobSVG.style.transform = `translate3d(${blobXPos}, -${window.pageYOffset * svgFriction }px, 0)`;
      blobImg.style.transform = `translateY(-${window.pageYOffset * imgFriction }px)`;
    }
  });
}