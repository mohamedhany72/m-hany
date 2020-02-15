$(document).ready(function(){
    //hamburger menu variables
const menuBtn = $('.menu-btn');
let menuOpen = false;
const header = $('header');
const main = $('main');
//nav variables
const nav = $('.nav-1');
const containerer = $('.containerer');
//header variables
const windowWidth = $(window).width();
const windowHeight = $(window).height();
//projects section variables
// for croping images in clients section
var cw = $('.cropped1').width();
var ce = $('.cropped2').width();

//hamburger menu function
menuBtn.click(function(){
    if(!menuOpen){
        menuBtn.addClass('open');
        nav.addClass('nav-open')
        menuOpen = true;
    } else {
        menuBtn.removeClass('open');
        nav.removeClass('nav-open')
        menuOpen = false;
    };
}); 

header.click(function(){
    if(menuOpen){
        menuBtn.removeClass('open');
        nav.removeClass('nav-open')
        menuOpen = false;
    };
});

main.click(function(){
    if(menuOpen){
        menuBtn.removeClass('open');
        nav.removeClass('nav-open')
        menuOpen = false;
    };
})//end of hamburger menu function

//add class container to nav-bars
function addContainer(){
    if($(window).width() >= 992){
        containerer.addClass('container');
    } else if(containerer.hasClass('container') && $(window).width() < 992 ){
        containerer.removeClass('container');
    }
}
$(window).on('resize', addContainer);
addContainer();

// add the scroll effect on the nav bar
$(window).scroll(function(){
    var sc = $(window).scrollTop();
    if (sc > 100){
        $(".menu-top").addClass("sticky")
    }else{
        $(".menu-top").removeClass("sticky")
    }
});//end of menu scroll effect

//swiper function
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//header height
function headerHeight(){
    let hHeight = windowHeight / 2;
    if((windowWidth / windowHeight) <= 1 && windowWidth > 992){
        header.height(hHeight); 
    } else if ((windowWidth / windowHeight) > 1 && windowWidth < 992){
        header.height(windowWidth);
        $(".blured").css("margin-top", "10%");
        $(".slide-3 .content").css("bottom", "20%")
        if(windowWidth < 600){
            header.height(windowWidth * 1.2);
        }
    }
}

$(window).on('resize', headerHeight);
headerHeight();

//header animation
let scene, camera, renderer, stars, starGeo;
let canvasJs = document.getElementById('canvas');
let canvas = $('#canvas');
function init() {

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 1;
camera.rotation.x = Math.PI/2;

renderer = new THREE.WebGLRenderer();
renderer.setSize(canvas.width(), canvas.height());
canvasJs.appendChild(renderer.domElement);

starGeo = new THREE.Geometry();
for(let i=0;i<6000;i++) {
    star = new THREE.Vector3(
    Math.random() * 600 - 300,
    Math.random() * 600 - 300,
    Math.random() * 600 - 300
    );
    star.velocity = 0;
    star.acceleration = 0.02;
    starGeo.vertices.push(star);
}

let sprite = new THREE.TextureLoader().load( 'images/star.png' );
let starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.7,
    map: sprite
});

stars = new THREE.Points(starGeo,starMaterial);
scene.add(stars);

window.addEventListener("resize", onWindowResize, false);

animate(); 
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
function animate() {
starGeo.vertices.forEach(p => {
    p.velocity += p.acceleration
    p.y -= p.velocity;
    
    if (p.y < -200) {
    p.y = 200;
    p.velocity = 0;
    }
});
starGeo.verticesNeedUpdate = true;
stars.rotation.y +=0.002;

renderer.render(scene, camera);
requestAnimationFrame(animate);
}
init();//end of header animation




// for croping images in clients section
$('.cropped1').css({'height':cw+'px'});
$('.cropped2').css({'height':ce+'px'});




var basic = $("#basic");
var standard = $("#standard");
var premium = $("#premium");

$(".radio-button label").click(function() {
    let thiss = $(this);
    // console.log(thiss);
    if(thiss.text() === "Basic"){
        // console.log("done");
        // console.log(basic.hasClass('active-table'))
        if(basic.hasClass("active-table")){
            return true;
        } else if(basic.hasClass('active-table') === false){
            basic.addClass("active-table");
            if(standard.hasClass("active-table")){
                standard.removeClass("active-table");
            } else if(premium.hasClass("active-table")){
                premium.removeClass("active-table");
            }
        }
    }else if(thiss.text() === "Standard"){
        if(standard.hasClass("active-table")){
            return true;
        } else if(standard.hasClass('active-table') === false){
            standard.addClass("active-table");
            if(basic.hasClass("active-table")){
                basic.removeClass("active-table");
            } else if(premium.hasClass("active-table")){
                premium.removeClass("active-table");
            }
        }
    }else if(thiss.text() === "Premium"){
        if(premium.hasClass("active-table")){
            return true;
        } else if(premium.hasClass('active-table') === false){
            premium.addClass("active-table");
            if(basic.hasClass("active-table")){
                basic.removeClass("active-table");
            } else if(standard.hasClass("active-table")){
                standard.removeClass("active-table");
            }
        }
    }
});


//remove button default
$("button").click(function(){
    alert("Sorry Currently no button is working");
})
//
$('form').on('submit', function(e){
    // validation code here
      e.preventDefault();
      alert("Sorry Currently unavailable");
  });
});