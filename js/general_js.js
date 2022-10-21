const nav_bar = document.getElementById("nav_bar");
const menu_button = document.getElementById("menu_button");
const background_image = document.getElementById("main_img_container");

let nav_bar_expand_height = "300px";
let nav_bar_expanded = false;
let nav_bar_font_size = "15px";

var media1024px = window.matchMedia("(min-width: 1024px)");

init();

function init(){
    if(!media1024px.matches){
        let nav_bar_expanded = false;
        nav_bar.style.transform = "scale(1,0)"
    }
    else{
        nav_bar.style.transform = "scale(1,1)"
        menu_button.style.display = "none";
    }

}

addEventListener("scroll",()=>{
    if(document.getElementsByClassName("parallax_background_section")[0]!=null){
        let current_scroll_pos = this.scrollY;
        let screen_height = this.screen.height;
        let screen_width = this.screen.width;
        const parallax_background = document.getElementsByClassName("parallax_background_section")[0];
        let parallax_background_top = parallax_background.getBoundingClientRect().top;
        let parallax_background_height = parallax_background.getBoundingClientRect().height;
        let parallax_image_screen_pos = screen_height - parallax_background_top;
        if(parallax_image_screen_pos > 0)
        {
            parallax_background.style = `background-position: center -${(parallax_image_screen_pos/(parallax_background_height+screen_height))*parallax_background_height/1.3}px;`;
        }
    }
})

addEventListener('resize', () => { 
    if(media1024px.matches){
        nav_bar.removeAttribute("style");
        menu_button.style.display = "none";
        nav_bar.style.transform = "scale(1,1)"
    }
    else{
        nav_bar_expanded = false;
        nav_bar.style.transform = "scale(1,0)"
        menu_button.style.display = "block";
        menu_button.style.transform = "rotate(0deg)";
    }
});

function set_background_image(image_url){
    background_image.style.backgroundImage = image_url;
}

function click_menu_button(){
    if(nav_bar_expanded)
    {
        nav_bar.style.transform = "scale(1,0)"
        nav_bar_expanded = false;
        
        menu_button.style.transform = "rotate(0deg)";
    }
    else
    {
        nav_bar.style.transform = "scale(1,1)"
        nav_bar_expanded = true;

        menu_button.style.transform = "rotate(90deg)";
    }

}