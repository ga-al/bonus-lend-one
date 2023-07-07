const modalTrigger = document.getElementsByClassName("trigger")[0];

const windowInnerWidth = document.documentElement.clientWidth;
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth);

const bodyElementHTML = document.getElementsByTagName("body")[0];
const modalBackground = document.getElementsByClassName("modalBackground")[0];
const modalBlur = document.getElementsByClassName("blur")[0];
const modalClose = document.getElementsByClassName("modalClose")[0];
const modalActive = document.getElementsByClassName("modalActive")[0];

function bodyMargin() {
    bodyElementHTML.style.marginRight = "-" + scrollbarWidth + "px";
}

bodyMargin();

modalTrigger.addEventListener("click", function () {
    modalBackground.style.display = "block";
    if (windowInnerWidth >= 1020) {
        bodyMargin();
    }
});

modalBlur.addEventListener("click", function (event) {
    if (event.target === modalBlur) {
        modalBackground.style.display = "none";
        if (windowInnerWidth >= 1020) {
            bodyMargin();
        }
    }
});