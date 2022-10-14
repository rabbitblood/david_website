const nav_bar = document.getElementById("nav_bar");

let nav_bar_expand_height = "300px";
let nav_bar_expanded = false;
let nav_bar_font_size = "10px";

init();

function init(){
    let nav_bar_expanded = false;
    nav_bar.style.fontSize = "0";
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