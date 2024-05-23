//const { type } = require("os")

var Yearly = {
    chart: {
        height: 270,
        type: 'bar',
        toolbar: {
            show: false,
        },
        dropshadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            color: '#515365',
            opacity: 0.3,
        }
    },
    colors: ["#fc8edf", "rgb(231, 28, 62)"],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '100%', // Increase the width as needed
            endingShape: 'rounded',
            roundedBottom: false, // Rounded top border
            className: 'custom-bars'
        },
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '14px',
        markers: {
            width: 10,
            height: 10,
        },
        itemMargin: {
            horizontal: 0,
            vertical: 8
        }
    },
    grid: {
        borderColor: '#f7f7f7',
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    series: [{
        name: 'Direct',
        data: [58, 44, 55, 57, 56, 61, 58]

    }, {
        name: 'Organic',
        data: [91, 76, 85, 101, 98, 87, 105]
    }],
    xaxis: {
        categories: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Satur', 'Sun'],
        labels: {
            rotate: 360
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0.3,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100]
        }
    },
    tooltip: {
        theme: 'dark',
        y: {
            formatter: function (val) {
                return val
            }
        }
    }
};

var d_1C_3 = new ApexCharts(document.querySelector('#weekly-chart'), Yearly);
d_1C_3.render();

var Monthly = {
    chart: {
        height: 270,
        type: 'bar',
        toolbar: {
            show: false,
        },
        dropshadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            color: '#515365',
            opacity: 0.3,
        }
    },
    colors: ["#fc8edf", "rgb(231, 28, 62)"],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '60%', // Decreased the column width for more bars
            endingShape: 'rounded',
            roundedBottom: false, // Rounded top border
            className: 'custom-bars'
        },
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '14px',
        markers: {
            width: 10,
            height: 10,
        },
        itemMargin: {
            horizontal: 0,
            vertical: 8
        }
    },
    grid: {
        borderColor: '#f7f7f7',
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    series: [{
        name: 'Direct',
        data: [300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400]

    }, {
        name: 'Organic',
        data: [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600]
    }, {
        name: 'Referral',
        data: [700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800]
    }, {
        name: 'Social',
        data: [900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000]
    }],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
            rotate: 360
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0.3,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100]
        }
    },
    tooltip: {
        theme: 'dark',
        y: {
            formatter: function (val) {
                return val
            }
        }
    }
};


var d_1C_3 = new ApexCharts(document.querySelector('#monthly-chart'), Monthly);
d_1C_3.render();

var d_1C_3 = new ApexCharts(document.querySelector('#yearly-chart'), Monthly);
d_1C_3.render();

var Traffic = {
    chart: {
        height: 370,
        type: 'donut',
        toolbar: {
            show: false,
        },
        dropshadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            color: '#515365',
            opacity: 0.3,
        }
    },
    colors: ["blue", "red","rgb(210, 105, 50)"],
    dataLabels: {
        enabled: false
    },
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '14px',
        markers: {
            width: 10,
            height: 10,
        },
        itemMargin: {
            horizontal: 8,
            vertical: 8
        }
    },
    grid: {
        borderColor: '#f7f7f7',
    },
    stroke: {
        show: true,
        width: 2,
       // colors: ['transparent']
    },
    series: [58, 91 , 30],
    labels: ['Direct', 'Organic'],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
           // type: 'vertical',
            shadeIntensity: 0.3,
           
            stops: [0, 100]
        }
    },
    tooltip: {
        theme: 'dark',
        y: {
            formatter: function (val) {
                return val
            }
        }
    }
};

var d_1C_3 = new ApexCharts(document.querySelector('#chart-2'), Traffic);
d_1C_3.render();

var d_1option = {
    chart: {
        id: "sparkline",
        type: 'area',
        height: 50,
        sparkline: {
            enabled:true
        },
        
    },
    stroke: {
        curve: 'smooth',
        width: 0,

    },
    series: [{
        name: 'sales',
        data:[60,28,52,38,40,36,38]
    }],
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    yaxis: {
        min: 0
    },
    colors: ['#fff'],
    tooltip: {
        x: {
            show: false,
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: 1,
            opacityFrom: .60,
            opacityTo: .05,
            stops:[100,100]
        }
    }
}


var d_1C_6 = new ApexCharts(document.querySelector("#hybrid_followers"), d_1option);

d_1C_6.render();

var d_1option = {
    chart: {
        id: "sparkline",
        type: 'area',
        height: 50,
        sparkline: {
            enabled:true
        },
    },
    stroke: {
        curve: 'smooth',
       width:0, 
    },
    series: [{
        name: 'view page',
        data:[60,28,52,38,40,36,38]
    }],
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    yaxis: {
        min: 0
        
    },
    colors: ['#fff'],
    tooltip: {
        x: {
            show: false,
            
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: 1,
            opacityFrom: .60,
            opacityTo: .05,
            stops:[100,100]
       } 
    }
}


var d_1C_6 = new ApexCharts(document.querySelector("#hybrid_follower"), d_1option);

d_1C_6.render();


var d_1option2 = {
    chart: {
        id: 'sparkline1',
        type: 'area',
        height: 50,
        sparkline: {
            enabled:true
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
        
    },
    fill: {
        opacity: 1,
        
    }, series:[{
        name: 'sales',
        data:[28,50,36,60,38,52,38]
    }],
    Labels: ['1', '2', '3', '4', '5', '6', '7'],
    yaxis: {
        min:0
    },
    color: ['#1abc9c'],
    tooltip: {
        x: {
            show: false,
            
        }
    },
    fill: {
        type: "gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .50,
            opacityTo: .05,
            stops:[100,100]
        }
    }
}

var d_1C_6 = new ApexCharts(document.querySelector("#hybrid_bonunce"), d_1option2);

d_1C_6.render();


var d_1options5 = {
    chart: {
        id: 'sparkline1',
        type: 'area',
        height: 50,
        sparkline: {
            enabled:true
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
        colors: ['#ff0000'], // Changed line color to red
    },
    fill: {
        opacity:1,
        
    }, 
    series:[{
        name: 'Revenue Status',
        data:[28,50,36,60,38,52,38]
    }],
    Labels: ['1', '2', '3', '4', '5', '6', '7'],
    yaxis: {
        min:0
    },
    color: ['#1abc9c'],
    tooltip: {
        x: {
            show: false,
            
        }
    },
    fill: {
        type: "none",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .50,
            opacityTo: .05,
            stops:[100,100]
        }
    }
};


var d_1C_8 = new ApexCharts(document.querySelector("#hybrid_status"), d_1options5);

d_1C_8.render();

