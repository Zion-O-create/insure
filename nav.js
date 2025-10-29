const btn = document.querySelector('.icon-menu');
const nav = document.querySelector(' .nav-container nav');
    btn.addEventListener('click', ()=>{
        if(nav.style.transform == "translateX(0%)"){
            nav.style.transform = "translateX(-150%)";
            btn.setAttribute('src', './images/icon-hamburger.svg');
        }else{
            nav.style.transform = "translateX(0%)";
            btn.setAttribute('src', './images/icon-close.svg');
        }
    })


    //     btn.addEventListener('click', ()=>{
    //     if(nav.style.transform = "translateX(0%)"){
    //         nav.style.transform = "translateX(-150%)";
    //         btn.setAttribute('src', './images/icon-hamburger.svg');
    //     }else{
    //         nav.style.transform = "translateX(0%)";
    //         btn.setAttribute('src', './images/icon-close.svg');
    //     }
    // })