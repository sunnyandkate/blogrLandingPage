let menuToggle = document.querySelector('.menu-toggle');
let toggleIcon = document.querySelector('.toggle-icon');
let menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function(){

  
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        menu.classList.add('block');
        toggleIcon.src="/public/img/icon-close.svg";
    }else if(menu.classList.contains('block')){
        menu.classList.remove('block');
        menu.classList.add('hidden');
        toggleIcon.src="img/icon-hamburger.svg";
    }



});

let dropdown = document.querySelectorAll('.dropdown');
let dropdownMenu = document.querySelectorAll('.dropdown-menu');
let arrow = document.querySelectorAll('.dropdown>img');

for(let i=0; i<dropdown.length;i++){
dropdown[i].addEventListener('click', function(){

    if(dropdownMenu[i].classList.contains('hidden')){
        if(window.innerWidth<768){
         this.style.color="hsl(207, 13%, 34%)";
        }else{
            this.style.color='white';
            this.style.borderBottom='2px solid white';
        }
    dropdownMenu[i].classList.remove('hidden');
    dropdownMenu[i].classList.add('block');
    arrow[i].style.transform='rotate(180deg)';


    }else{
        dropdownMenu[i].classList.remove('block');
        dropdownMenu[i].classList.add('hidden');
        
        arrow[i].style.transform='rotate(0deg)';
        if(window.innerWidth<768){
            this.style.color="hsl(208, 49%, 24%)";
        }else{
            this.style.color="white";
            this.style.borderBottom='none';
        }
    }
});



if(window.innerWidth<768){

    arrow[i].src="img/icon-arrow-dark.svg";

}else if(window.innerWidth>768){
   
    arrow[i].src="img/icon-arrow-light.svg";
}
}
