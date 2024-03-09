/*==========scroll section ovtive link==============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.oneclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};


alert("welcome");


let section = document.queryselectionAll('section');
let navlink = document.queryselectionAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetheight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlink.forEach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
        };



    });
    /*==========stycky navbar==============*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    /*==========remove toggle icone and navber when clicke navbar link ( scroll)==============*/

    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');


};

/*========( scroll reveal)==============*/

scrollReveal({
    reset: true
    distance: '80px',
    duration: 2000,
    delay: 200

});
ScrollReveal().reveal('.home-content,heading', { origin:'top' });



