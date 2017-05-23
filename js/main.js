require('./chart.js/amcharts');
require('./chart.js/patterns');
require('./chart.js/serial');

$(document).ready(function(){
    // nav-bar functionalities

    const menu = document.getElementById('hamburger-menu');
    const nav = document.getElementById('nav-bar');

    menu.addEventListener('click', function(e){
        menu.classList.toggle('open');
        nav.classList.toggle('show');

    });
    $( "#nav-bar ul a" ).click(function() {
        $("#nav-bar ul a").removeClass('menu-hover');
        $(this).addClass('menu-hover');

    });

    //Search
    $('#search').click((e) => {
        $('.search-input').toggle();
    });
    $('#search-panel').submit((e) => {
            e.preventDefault();
    });
    $('.search-input').click(function() {
        $(this).css('background-color', '#fff').animate({width: '150%'});
    });

    //Products section

    $( ".product" ).click(function() {
        $('.product').removeClass('style');
        $(this).addClass('style');

    });
    // history section filled width data from Api

    var historyData = 'https://efigence-camp.herokuapp.com/api/data/history';

    function insertContent(data) {
        for (let i = 0; i < data.length; i++) {
            let isOutcome;
            data[i].status ==='outcome' ? isOutcome = '-' : isOutcome = '';
            const item = '<div class="row history-item flex">' + '<div class="col-xs-2 date">'+ data[i].date.slice(5,10).split('-').reverse().join('.') + '</div>' + '<div class="col-xs-6 description">'+  data[i].description + '<div class="row">' + '<div class="col-xs-4 category">'+ '<select name="type">' + '<option value=${date[i].category}>'+data[i].category+'</option>' + '<option value="Food">Food</option>' + '<option value="Salary">Salary</option>' + '<option value="Fun">Fun</option>' + '</select>'+ '</div>'+ '</div>'+ ' </div>' + '<div class="col-xs-4 amount"><strong>' + isOutcome + data[i].amount.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")  + '</strong> PLN</div>' + '</div>';
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

    // Chart section made with AmCharts library

    AmCharts.makeChart("chart",
        {
            "type": "serial",
            "categoryField": "category",
            "marginRight": 0,
            "colors": [
                "#13BDD2"
            ],
            "startDuration": 1,
            "theme": "patterns",
            "categoryAxis": {
                "gridPosition": "start",
                "axisThickness": 0
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "bullet": "round",
                    "id": "AmGraph-1",
                    "title": "graph 1",
                    "type": "smoothedLine",
                    "valueField": "column-1"
                },
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "bullet": "square",
                    "id": "AmGraph-2",
                    "title": "graph 2",
                    "type": "smoothedLine",
                    "valueField": "column-2"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": ""
                }
            ],
            "allLabels": [],
            "balloon": {
                "borderThickness": 15
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": ""
                }
            ],
            "dataProvider": [
                {
                    "category": "3",
                    "column-1": "2000"
                },
                {
                    "category": "7",
                    "column-1": "1000"
                },
                {
                    "category": "11",
                    "column-1": "6000"
                },
                {
                    "category": "14",
                    "column-1": "14000"
                },
                {
                    "category": "21",
                    "column-1": "4000"
                },
                {
                    "category": "25",
                    "column-1": "3000"
                },
                {
                    "category": "28",
                    "column-1": "-2000"
                },
                {
                    "category": "30",
                    "column-1": "-2000"
                }
            ]
        }
    );
});


