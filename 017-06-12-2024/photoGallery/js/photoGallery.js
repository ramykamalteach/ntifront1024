/* window.onload = () => {
    document.querySelector(".btn").classList.add("btnActive");
}; */


btns = document.querySelectorAll(".btn");
for(b = 0; b < btns.length; b++) {
    btns[b].addEventListener("click", (e) => {

        //button activation
        for(i = 0; i < btns.length; i++) {
            btns[i].classList.remove("btnActive");
        }
        e.target.classList.add("btnActive");

        // hide show photos belogns to category

        activeBtnCategory = e.target.getAttribute("data-category");
        
        photos = document.querySelectorAll(".photos");
        for(photo = 0; photo < photos.length; photo++) {
            if(photos[photo].classList.contains(activeBtnCategory) == true) {
                photos[photo].style.display = "block";
            }
            else {
                photos[photo].style.display = "none";
            }
        }

    });
}

/* ------------------------------------------ */

bannerCounter = -100;

photosArr = document.querySelectorAll(".photos");
document.querySelector("#numberOfPhotos").innerText = photosArr.length;

bgImgs = [];

for(x = 0; x < photosArr.length; x++) {
    const computedStyle = getComputedStyle(photosArr[x]);
    bgImgs[x] = computedStyle.backgroundImage;
    /* console.log(bgImgs[x]); */
}

photoRedScreen = document.querySelectorAll(".photoRedScreen div");
for(let i = 0; i < photoRedScreen.length; i++) {
    photoRedScreen[i].onclick = () => {
        document.querySelector("#bannerScreen").style.display = "flex";
        
        document.querySelector("#banner").style.backgroundImage = bgImgs[i];
        bannerCounter = i;
        changeBannerCounter();
    };
}

document.querySelector("#bannerScreen").onclick = () => {
    //closeBanner();
};
document.querySelector("#bannerScreen h1").onclick = () => {
    closeBanner();
};
function closeBanner() {
    document.querySelector("#bannerScreen").style.display = "none";
}


function changeBannerCounter() {
    document.querySelector("#bannerCounter").innerText = bannerCounter + 1;
}

document.querySelector("#rightArrow").onclick = () => {
    if(bannerCounter < photosArr.length - 1) {
        bannerCounter++;
        document.querySelector("#banner").style.backgroundImage = bgImgs[bannerCounter];
        document.querySelector("#banner").classList.add("animateBannerBrightness");
    }
    
    setTimeout(clearBannerAnimation, 400);
}
document.querySelector("#leftArrow").onclick = () => {
    if(bannerCounter > 0) {
        bannerCounter--;
        document.querySelector("#banner").style.backgroundImage = bgImgs[bannerCounter];
        document.querySelector("#banner").classList.add("animateBannerBrightness");
    }
    
    setTimeout(clearBannerAnimation, 400);
}

function clearBannerAnimation() {
    document.querySelector("#banner").classList.remove("animateBannerBrightness");
}