document.addEventListener("DOMContentLoaded", function () {
    var menu = document.getElementById('hamburger-menu');
    var nav = document.getElementById('nav-bar');

    menu.addEventListener('click', function(e){
        menu.classList.toggle('open');
        nav.classList.toggle('show');

    });

    console.log(menu);
});
