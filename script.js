// let myChart = document.getElementById("myChart").getContext("2d");
let deliveries = document.getElementById("deliveries").getContext("2d");
let walkIns = document.getElementById("walkInChart").getContext("2d");
document.getElementById("walkInChart").style.height = "100";
//global options
// Chart.defaults.global.defaultFontColor = "#fff";

let delivery = new Chart(deliveries, {
    type: "bar",//chart types: bar,horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
        datasets: [{
            label: 'Weekly Deliveries',
            data: [300,
                500,
                641,
                919,
                500,
                525,
                600
            ],
            // backgroundColor : "pink"
            backgroundColor:[
                'rgba(200,99,132,0.6)',
                'rgba(54,162,235,0.6)',
                'rgba(255,206,86,0.6)',
                'rgba(75,192,192,0.6)',
                'rgba(153,102,255,0.6)',
                'rgba(245,60,15,0.6)',
                'rgba(255,159,64,0.6)'
            ],
            borderWidth:2,
            borderColor:"#0154ad",
            fontColor:"#ffffff"
        }]
    },
    options: {
        title:{
            display:true,
            text:'Kenyan Cities And their populations',
            fontColor: "#fa4747"
        }
    }
})
let  walkInChart = new Chart(walkIns, {
    type: "bar",//chart types: bar,horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['Not Satisfied','Satisfied Customers'],
        datasets: [{
            label: 'Daily Walk-in Customers',
            data: [80,
                919
            ],
            // backgroundColor : "pink"
            backgroundColor:[

                'rgba(173,127,210,0.58)',
                'rgba(255,159,64,0.6)'
            ],
            borderWidth:0.8,
            borderColor:"#0154ad",
            fontColor:"#ffffff"
        }]
    },
    options: {
        title:{
            display:true,
            text:'Kenyan Cities And their populations',
            fontColor: "#fa4747"
        }
    }
})