const clip = document.querySelectorAll('.clip');
for (let i = 0; i < clip.length; i++){
    clip[i].addEventListener('mouseenter', 
    function(e){
        clip[i].play()
    })
    clip[i].addEventListener('mouseout', 
    function(e){
        clip[i].pause()
    })
}

const hamburger = document.querySelector('.header-container .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header-container .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header-container .nav-bar .nav-list ul li a');
const header = document.querySelector('.header-container');

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () =>{
    var scroll_position = window.scrollY;
    if(scroll_position > 200){
        header.style.backgroundColor = '#29323c';
    } else{
        header.style.backgroundColor = 'transparent';
    }
})

menu_item.forEach((item) => {
    item.addEventListener('click',()=> {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});