
const nav_bar = document.getElementById("nav_bar");
const menu_button = document.getElementById("menu_button");
const background_image = document.getElementById("main_img_container");

let nav_bar_expand_height = "300px";
let nav_bar_expanded = false;
let nav_bar_font_size = "15px";

var media1024px = window.matchMedia("(min-width: 1024px)");

//canvas part
const canvas = document.querySelector("canvas");
let canvas_circles = [];
const r = function(){return Math.random();}
const plusOrMinus = function(){return Math.random() < 0.5 ? -1 : 1;}
const c = canvas.getContext("2d");
let mouse_pos_x = 200;
let mouse_pos_y = 200;


$(document).ready(function(){init()});

function init(){
    if(!media1024px.matches){
        let nav_bar_expanded = false;
        nav_bar.style.transform = "scale(1,0)"
    }
    else{
        nav_bar.style.transform = "scale(1,1)"
        menu_button.style.display = "none";
    }
    setTimeout(function(){
        init_canvas();
    },100)
    animate();
}

addEventListener("mousemove", (e)=>{
    mouse_pos_x = e.clientX;
    mouse_pos_y = e.clientY + window.scrollY;


    current_arc = new circle();
    current_arc.instantiate(mouse_pos_x, mouse_pos_y);
    canvas_circles.push(current_arc);
});

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
});

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

/*-------------------------------------------------Canvas---------------------------------------------------*/
function init_canvas()
{
    var body = document.body,
    html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight );

    canvas.width = document.body.offsetWidth;
    canvas.height = height;
}

function animate()
{

    requestAnimationFrame(animate)
    {
        c.clearRect(0,0,canvas.width, canvas.height);

        for(const cir of canvas_circles)
        {
            cir.move();
        }
    }
}

function circle()
{
    circle.canvas_padding_top  = document.querySelector("header").offsetHeight;

    this.move_duration  = 1000;
    this.x              = 0;
    this.y              = 0;
    this.radius         = 0;
    this.arc_instance   = null;
    this.v_x            = 0;
    this.v_y            = 0;
    this.destination_x  = 0;
    this.destination_y  = 0;
    this.start_time = 0;
    this.lastUpdate     = 0;
    this.last_destination_x = 0;
    this.last_destination_y = 0;


    this.instantiate = function(x, y)
    {
        this.x = x;
        this.y = y;
        this.last_destination_x = this.x;
        this.last_destination_y = this.y;
        this.radius = r()*30;

        this.start_time = Date.now();
        this.lastUpdate = Date.now();
        this.set_new_destination();
        this.move()
    }

    this.move = function()
    {
        if((this.lastUpdate - this.start_time) > this.move_duration)
        {
            for(let i = 0; i < canvas_circles.length-1; i++)
            {
                if(canvas_circles[i] == this)
                {
                    canvas_circles.splice(i,1);
                    break;
                }
            }
            return;
        }
        
        var now = Date.now();
        var dt = now - this.lastUpdate;
        this.lastUpdate = now;

        this.x = this.x + (this.v_x );
        this.y = this.y + (this.v_y );

        c.beginPath();
        c.strokeStyle = `rgba(${0},${0},${0},${1})`;
        c.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
        c.stroke();
    }

    this.set_new_destination = function()
    {
        this.v_x = r() * 1 * plusOrMinus();
        this.v_y = -(r() * 3);
    }
}