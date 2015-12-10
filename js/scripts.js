var dataMaster = {}
    
    dataMaster.year1 = {
        labels: ['GP', 'G', 'A', 'P', 'GWG', 'S%'],
        datasets: [
            {
                label: 'Crosby 2005-2006',
                fillColor: 'rgba(0,0,0,0.8)',
                fillColor: 'rgba(0,0,0,1)',
                highlightFill: 'rgba(0,0,0,1)',
                data: [81, 39, 63, 102, 5, 14.0]
            },
            {
                label: 'Ovechkin 2005-2006',
                fillColor: 'rgba(192,12,41,0.8)',
                strokeColor: 'rgba(192,12,41,1)',
                highlightFill: 'rgba(192,12,41,1)',
                data: [81, 52, 54, 106, 5, 12.2]
            }
        ]
    }

    dataMaster.year2 = {
        labels: ['GP', 'G', 'A', 'P', 'GWG', 'S%'],
        datasets: [
            {
                label: 'Crosby 2006-2007',
                fillColor: 'rgba(0,0,0,0.8)',
                fillColor: 'rgba(0,0,0,1)',
                highlightFill: 'rgba(0,0,0,1)',
                data: [79, 36, 84, 120, 4, 14.4]
            },
            {
                label: 'Ovechkin 2006-2007',
                fillColor: 'rgba(192,12,41,0.8)',
                strokeColor: 'rgba(192,12,41,1)',
                highlightFill: 'rgba(192,12,41,1)',
                data: [79, 36, 84, 120, 4, 14.4]
            }
        ]
    }

// Global Options
options = {
    scaleShowGridLines: false,
    scaleOverride: true,
    scaleSteps: 12,
    scaleStepWidth: 10,
    scaleStartValue: 0,
    animationEasing: "easeOutBounce",
    tooltipYPadding: 10,
    tooltipXPadding: 10,
    tooltipXOffset: 10,
    responsive: true
}

// Create all charts
var context = document.getElementById('mainChart1').getContext('2d');
var dataChart1 = new Chart(context).Bar(dataMaster.year1, options);

var context = document.getElementById('mainChart2').getContext('2d');
var dataChart2 = new Chart(context).Bar(dataMaster.year2, options);



$('.year-select').on('click', function(){
    $('.button-group').toggle();
});



$('#chart-container2').hide();

$('button.show').click(function(){
    $('.chart-container').hide();
    $('#chart-container'+$(this).attr('target')).show();
    $('.button-group').hide();
});



