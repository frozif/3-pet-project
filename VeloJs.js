// картинки с текстом связанный с табом

tabsButtonsElement = document.querySelectorAll(`.tab_sc_btn`)

console.log(tabsButtonsElement);


tabsButtonsElement.forEach((btn, index)=> {
btn.addEventListener("click", () => {
let imgElement = document.querySelector(`.tab_sc_img_title img`)
let titleTxtElement1 = document.querySelector(`.tab_sc_img_title h2`)
let titleTxtElement2 = document.querySelector(`.tab_sc_img_title2 h2`)
let titleTxtElement3 = document.querySelector(`.tab_sc_img_title3 h2`)

    imgElement.classList.remove("active");
    titleTxtElement1.classList.remove("active");
 setTimeout(() => {
    if (index === 0) {
      imgElement.src = "./img/Title.png"; 
  titleTxtElement1.textContent = "Some Title Here";
    }
       if (index === 1) {
      imgElement.src = "./img/title2.png"; 
      titleTxtElement1.textContent = titleTxtElement2.textContent; 
    }
       if (index === 2) {
      imgElement.src = "./img/title3.png"; 
titleTxtElement1.textContent = titleTxtElement3.textContent; 
       }

        Object.assign(imgElement.style, {
        display: "block",
        width: "100%",
        maxWidth: "1080px",
        height: "auto"
      });

      imgElement.classList.add("active");
      titleTxtElement1.classList.add("active");

    }, 200);

    
});
});

//  -------------------------------------------------------------------------------


let behiverScroll = document.querySelectorAll(`.velo_menu a`)

behiverScroll.forEach(a => {
  a.addEventListener(`click`, (event)=>{
event.preventDefault()
    const aElementID = a.getAttribute('href').slice(1);
        let  targetElement = document.getElementById(aElementID);
            if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
            }
  })
});
