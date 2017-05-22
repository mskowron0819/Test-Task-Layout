require('./chart.js/amcharts');
require('./chart.js/patterns');
require('./chart.js/serial');

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


