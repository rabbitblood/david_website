const nav_bar = document.getElementById("nav_bar");
const background_image = document.getElementById("main_img_container");

let nav_bar_expand_height = "300px";
let nav_bar_expanded = false;
let nav_bar_font_size = "10px";

init();

function init(){
    let nav_bar_expanded = false;
    nav_bar.style.fontSize = "0";

    if(window.location.pathname.includes("contact")){
        set_background_image("url(./../image/david_logo.png)");
    }
    else if(window.location.pathname.includes("photography")){
        set_background_image("url(./../image/star_trait_small.jpg)");
    }
    else if(window.location.pathname.includes("about")){
        set_background_image("url(./../image/star_trait_small.jpg)");
    }
}

function set_background_image(image_url){
    background_image.style.backgroundImage = image_url;
}

function click_menu_button(){
    if(nav_bar_expanded)
    {
        nav_bar.style.height = "0px";
        nav_bar.style.opacity = "0";
        nav_bar.style.fontSize = "0";
        nav_bar_expanded = false;
        
    }
    else
    {
        nav_bar.style.height = nav_bar_expand_height;
        nav_bar.style.opacity = "1";
        nav_bar.style.fontSize = nav_bar_font_size;
        nav_bar_expanded = true;
    }

}