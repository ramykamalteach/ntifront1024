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