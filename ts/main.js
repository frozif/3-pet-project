"use strict";
// картинки с текстом связанный с табом
let imgElement = document.querySelector(`.tab_sc_img_title img`);
let titleTxtElement = document.querySelector(`.tab_sc_img_title h2`);
let tabsButtonsElement = document.querySelectorAll(`.tab_sc_btn`);
// -----------------------------------------------------------------------
let imgCnt = [
    { img: "./img/Title.png", txt: "Some Title Here" },
    { img: "./img/title2.png", txt: "Some Title Here2" },
    { img: "./img/Title3.png", txt: "Some Title Here3" },
];
tabsButtonsElement.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        imgElement.classList.remove("active");
        titleTxtElement.classList.remove("active");
        setTimeout(() => {
            let card = imgCnt[index];
            imgElement.src = card.img;
            titleTxtElement.textContent = card.txt;
            Object.assign(imgElement.style, {
                display: "block",
                width: "100%",
                maxWidth: "1080px",
                height: "auto"
            });
            imgElement.classList.add("active");
            titleTxtElement.classList.add("active");
        }, 200);
    });
});
//  -------------------------------------------------------------------------------
let behiverScroll = document.querySelectorAll(`.velo_menu a`);
behiverScroll.forEach(a => {
    a.addEventListener(`click`, (event) => {
        event.preventDefault();
        const aElementID = a.getAttribute('href').slice(1);
        let targetElement = document.getElementById(aElementID);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
