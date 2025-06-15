// OPEN/CLOSE SERVICES DROPDOWN MENU
// Prvo definisemo nav list jer je parnet za nav__list__item--dropdown
const navList = document.querySelector('.nav__list');

// Potom definisemo promenljivu dropdownItem (NJEGA KLIKNEMO)
const dropdownItem = navList.querySelector('.nav__list__item--dropdown');

// Potom definisemo promenljivu dropdownList (NJEMU MENJAMO STANJE display none -> block)
const dropdownList = navList.querySelector('.nav__dropdown');

// Potom definisemo promenljivu dropdownLink (ONA JE PARENT ZA STERELICU KOJA TREBA DA SE OKRENE)
const dropdownLink = navList.querySelector('.nav__list__item--dropdown > a');

//Na kraju definiseno promenljivu dropdownIcon (ROTIRA SE NA PROMENU KLASE)
const dropdownIcon = navList.querySelector('i');


// Sprovodimo promenu klase, promenu display-a i rotaciju strelice

dropdownItem.addEventListener('click', () => {
    // debugger
    dropdownList.classList.toggle('open');
    dropdownIcon.classList.toggle('rotate');
})



//BOOK APOINTMENT
//Define variables for functionality
const apptBtnNav = document.querySelector('.nav__btn');
const apptBtnSer = document.querySelectorAll('.firstBtn'); //promenljiva za sve services button-e
const apptBtns = document.querySelectorAll('.appointment__btn')

const apptOverlay = document.querySelector('.appointment__overlay'); // promenljiva za overlay
const form1 = document.getElementById('form1') // promenljiva za form1

const contOverlay = document.querySelector('.contact__overlay');
const form2 = document.getElementById('form2');

const close = document.querySelector('.appointment__close')


// Add event listener 'click' for apptBtn(s)

// Nav <a> tag ('button') initiate form1
apptBtnNav.addEventListener('click', () => {
    //debugger
    apptOverlay.classList.toggle('initiate');
    form1.style.display = 'block';
})
// console.log('radi!')

// All service section buttons initiate form1
apptBtnSer.forEach(button => {
    button.addEventListener('click', () => {
        // debugger
        apptOverlay.classList.toggle('initiate');
        window.scrollTo(0, 0);
    })
})
// console.log('radi!')

// All other buttons initiate form1
apptBtns.forEach(button => {
    button.addEventListener('click', () => {
        apptOverlay.classList.toggle('initiate');
        window.scrollTo(0, 0);
    })
})

// Closing of form1
close.addEventListener('click', () => {
    //debugger
    apptOverlay.classList.remove('initiate') // mora remove
    })



// CHANGE LANGUAGE ICON
// Define all variables and change selector by querySelector()
const containerFlag = document.querySelector('.flag__container');
const dropdownMenu = containerFlag.querySelector('.dropdown__visible');

const mainFlag = containerFlag.querySelector('.main__flag');
const dropdownFlag = dropdownMenu.querySelector('.dropdown__flag');
const languageImage = containerFlag.querySelector('img');

// Change class and CSS propoerty + flag switch function
// No need to define variables inside of const since they are const (global f.)
// No need for a function just practice...
function changeIcon () {
    containerFlag.addEventListener('click', () => {
    //debugger
    dropdownMenu.classList.toggle('open');
    })
}
changeIcon()
// console.log('radi!')


// "TO-TOP" BUTTON DISAPEAR IN HEADER SECTION
const header = document.querySelector('.header');
const fixedBtn = document.querySelector('.fixed__btn');

const options = { //sastavni deo observer-a
    root: null, // u odnosu na sta posmatra
    threshold: 1, // kada je ceo button na header-u tada se aktivira observer
    margin: "0px" // bez margina izvan granica header sekcije
 };

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        // console.log(entry); - korisceno samo za testiranje
        fixedBtn.classList.toggle('hide');
    });
}, options);

observer.observe(header); //pozivamo observer


