let isItemMenuActive = "";

const handleMenuItem = (url) => {
    const menuItem = document.querySelectorAll('.menu_item')
    const menu = document.querySelector(".menu_open")
    if (url) {
        isItemMenuActive = url;
    }

    menuItem.forEach(listItem => {
        if (listItem.getAttribute("data-id") === isItemMenuActive) {
            listItem.classList.toggle("menu_item_active")
            menu.classList.remove("menu_open")
        } else {
            listItem.classList.remove("menu_item_active")
        }

    })
}
const openMenuMobile = () => {
    document.querySelector(".menu").classList.toggle("menu_open")
}
const closeMenuMobile = () => {
    document.querySelector(".menu_open").classList.remove("menu_open")
}
const toggleRULanguage = () => {
    const ru = document.getElementById("ru").value
    if (ru === "ru") {
        document.getElementById("ru").classList.add("language_active");
        document.getElementById("en").classList.remove("language_active");

    }
}
const toggleENLanguage = () => {
    const en = document.getElementById("en").value
    if (en === "en") {
        document.getElementById("en").classList.add("language_active");
        document.getElementById("ru").classList.remove("language_active");
    }
}
const toggleMainReel = () => {
    const video = document.getElementById("main_reel")
    if (document.getElementById("play")) {
        if (document.getElementById('play').style.display == 'none') {
            document.getElementById('play').style.display = 'flex';
            document.getElementById('pause').style.display = 'none';
            video.muted = true;
        } else {
            document.getElementById('play').style.display = 'none';
            document.getElementById('pause').style.display = 'flex';
            if(video.muted === true){
                video.muted = false;
            }
        }
    }
}







