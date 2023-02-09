const handleMouseMove =(e) => {
    //mouse coordinate
    const {clientX, clientY} = e;
    const {innerWidth, innerHeight} = window;
    const fractionX = clientX / innerWidth; // 0 to 1 norminalization (innerwidth : window's width length)
    const fractionY = clientY / innerHeight;

    const pupilX = -100 + fractionX * 200 ;
    const pupilY = -100 + fractionY * 200 ;

    document.querySelectorAll(".pupil")
    .forEach(el =>{
        el.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    })
    
}


window.addEventListener('mousemove',handleMouseMove);