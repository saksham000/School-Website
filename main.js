// change navbar style on scroll


window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
});


//show and hide faq answers

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faqIcon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus'
        }else{
            icon.className = 'fa-solid fa-plus'
        }
    })
})


//nav menu drop down

const menu = document.querySelector(".navMenu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none";
})

// close nav menu

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener("click", closeNav);


// button

document.querySelectorAll(".button").forEach((button) => {
    let getVar = (variable) =>
      getComputedStyle(button).getPropertyValue(variable);
  
    button.addEventListener("click", (e) => {
      if (!button.classList.contains("active")) {
        button.classList.add("active");
  
        gsap.to(button, {
          keyframes: [
            {
              "--left-wing-first-x": 50,
              "--left-wing-first-y": 100,
              "--right-wing-second-x": 50,
              "--right-wing-second-y": 100,
              duration: 0.2,
              onComplete() {
                gsap.set(button, {
                  "--left-wing-first-y": 0,
                  "--left-wing-second-x": 40,
                  "--left-wing-second-y": 100,
                  "--left-wing-third-x": 0,
                  "--left-wing-third-y": 100,
                  "--left-body-third-x": 40,
                  "--right-wing-first-x": 50,
                  "--right-wing-first-y": 0,
                  "--right-wing-second-x": 60,
                  "--right-wing-second-y": 100,
                  "--right-wing-third-x": 100,
                  "--right-wing-third-y": 100,
                  "--right-body-third-x": 60,
                });
              },
            },
            {
              "--left-wing-third-x": 20,
              "--left-wing-third-y": 90,
              "--left-wing-second-y": 90,
              "--left-body-third-y": 90,
              "--right-wing-third-x": 80,
              "--right-wing-third-y": 90,
              "--right-body-third-y": 90,
              "--right-wing-second-y": 90,
              duration: 0.2,
            },
            {
              "--rotate": 50,
              "--left-wing-third-x": 27,
              "--left-wing-third-y": 95,
              "--right-body-third-x": 45,
              "--right-wing-second-x": 45,
              "--right-wing-third-x": 60,
              "--right-wing-third-y": 83,
              duration: 0.25,
            },
            {
              "--rotate": 55,
              "--plane-x": -8,
              "--plane-y": 24,
              duration: 0.2,
            },
            {
              "--rotate": 40,
              "--plane-x": 45,
              "--plane-y": -180,
              "--plane-opacity": 0,
              duration: 0.3,
              onComplete() {
                setTimeout(() => {
                  button.removeAttribute("style");
                  gsap.fromTo(
                    button,
                    {
                      opacity: 0,
                      y: -8,
                    },
                    {
                      opacity: 1,
                      y: 0,
                      clearProps: true,
                      duration: 0.3,
                      onComplete() {
                        button.classList.remove("active");
                      },
                    }
                  );
                }, 2000);
              },
            },
          ],
        });
  
        gsap.to(button, {
          keyframes: [
            {
              "--text-opacity": 0,
              "--border-radius": 0,
              "--left-wing-background": getVar("--primary-darkest"),
              "--right-wing-background": getVar("--primary-darkest"),
              duration: 0.1,
            },
            {
              "--left-wing-background": getVar("--primary"),
              "--right-wing-background": getVar("--primary"),
              duration: 0.1,
            },
            {
              "--left-wing-background": getVar("--primary-dark"),
              "--right-wing-background": getVar("--primary-dark"),
              duration: 0.4,
            },
            {
              "--success-opacity": 1,
              "--success-scale": 1,
              duration: 0.25,
              delay: 0.25,
            },
          ],
        });
      }
    });
  });
