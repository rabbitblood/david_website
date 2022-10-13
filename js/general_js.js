const nav_bar = document.getElementById("nav_bar");

let nav_bar_expand_height = "200px";
let nav_bar_expanded = false;

function init(){
    let nav_bar_expanded = false;
}

function click_menu_button(){
    if(nav_bar_expanded)
    {
        nav_bar.style.height = "0px";
        nav_bar.style.opacity = "0";
        nav_bar_expanded = false;
        
    }
    else
    {
        nav_bar.style.height = nav_bar_expand_height;
        nav_bar.style.opacity = "1";
        nav_bar_expanded = true;
    }

}