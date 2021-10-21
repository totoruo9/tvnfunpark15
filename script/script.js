'use static';

const leafTop = document.querySelector(".leaf-top");
const leafBottom = document.querySelector(".leaf-bottom");
const main = document.querySelector("main");

window.addEventListener("scroll", () => {
    let rotateDeg = Math.round(window.scrollY / 10);
    leafTop.style.transform=`rotate(${rotateDeg/2}deg)`;
    leafBottom.style.transform=`rotate(-${rotateDeg/2}deg)`;
    main.style.backgroundPosition=`0px ${rotateDeg*4}px`
})

// window.onload = () => {
//     const wrap = document.querySelector(".wrap");
//     const main = document.querySelector("main");
//     const eventWrap = document.querySelector(".event");
//     const eventMap = document.querySelector(".event__map-btn");
//     const eventFaq = document.querySelector(".event__faq-btn");
//     const popup = document.querySelector(".popup");
//     const popupClose = document.querySelectorAll(".popup-close");
//     const infoMap = document.querySelector(".info-map");
//     const infoFaq = document.querySelector(".info-faq");
//     const bottomBtn = document.querySelectorAll(".bottomBtn");

//     wrap.style.height = `${eventWrap.offsetHeight + main.offsetHeight}px`;

//     const handleMapClick = (e) => {
//         infoFaq.style.display = "none";
//         popup.style.transform="translateY(0)";
//         document.body.style.height = "100%";
//         document.body.style.overflow = "hidden";
//         infoMap.style.display = "flex"
//     }

//     const handleFaqClick = (e) => {
//         infoMap.style.display = "none";
//         popup.style.transform="translateY(0)";
//         document.body.style.height = "100%";
//         document.body.style.overflow = "hidden";
//         infoFaq.style.display = "flex"
//     }

//     eventMap.addEventListener("click", handleMapClick);

//     eventFaq.addEventListener("click", handleFaqClick);

//     popupClose.forEach(item => {
//         item.addEventListener("click", () => {
//             popup.style.transform="translateY(300%)";
//             document.body.style.height = "auto";
//             document.body.style.overflow = "scroll";
//         });
//     })
// } ;
