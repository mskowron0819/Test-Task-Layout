$(document).ready(function(){
    const menu = document.getElementById('hamburger-menu');
    const nav = document.getElementById('nav-bar');

    menu.addEventListener('click', function(e){
        menu.classList.toggle('open');
        nav.classList.toggle('show');

    });

    var historyData = 'https://efigence-camp.herokuapp.com/api/data/history';

    function insertContent(data) {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            const item = '<div class="row history-item">' +
                '<div class="col-xs-2 date">'+ data[i].date.slice(-5) + '</div>' +
                '<div class="col-xs-6 description">'+  data[i].description +
                '<div class="row">' +
                    '<div class="col-xs-4 category">'+
                '<select name="type">' +
                '<option value=${date[i].category}>'+data[i].category+'</option>' +
                '<option value="Food">Food</option>' +
                '<option value="Salary">Salary</option>' +
                '<option value="Fun">Fun</option>' +
                '</select>'+
            '</div>'+
                '</div>'+
               ' </div>' +
                '<div class="col-xs-4 amount"><strong>'
                        + data[i].amount.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")  + '</strong> PLN</div>' +
                '</div>';
                    $('#history').append(item);
        }
    }
    function loadHistory() {
        $.ajax({
            url: historyData
        }).done(function (response) {
            insertContent(response.content);
        }).fail(function (error) {
            console.log(error);
        })
    }
    loadHistory();

});


