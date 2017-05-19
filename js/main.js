document.addEventListener("DOMContentLoaded", function () {
    var menu = document.getElementById('menu');

    menu.addEventListener('click', function(e){
        menu.classList.toggle('open');
    });

    console.log(menu);
});
