// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });

    });

});

// Image Slider

document.querySelectorAll(".slider").forEach(slider=>{

    const slides = slider.querySelectorAll(".slide");
    const next = slider.querySelector(".next");
    const prev = slider.querySelector(".prev");

    let index = 0;

    function showSlide(i){

        slides.forEach(slide=>slide.classList.remove("active"));

        slides[i].classList.add("active");

    }

    next.addEventListener("click",()=>{

        index++;

        if(index>=slides.length) index=0;

        showSlide(index);

    });

    prev.addEventListener("click",()=>{

        index--;

        if(index<0) index=slides.length-1;

        showSlide(index);

    });

});
