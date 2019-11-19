var PortChart = function () {
    this.Reload = function(){
        this.ShowPortChart();
        $('.port-select a').on('click', this.OnTimeSelect.bind(this));
    };

    this.OnTimeSelect = function (event) {
        $('.port-select a').removeClass("active");
        $(event.target).addClass("active");
    };

    this.SetChartSize = function () {
        $('#port-chart').highcharts().reflow();
    };

    this.ShowPortChart = function() {
        var chart = Highcharts.chart('port-chart', {
            chart: {
                type: 'spline',
                backgroundColor: null
            },
            title: {
                text: null
            },
            subtitle: {
                text: null
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: ['江苏', '南通', '无锡', '扬州', '南京', '苏州', '常州', '镇江', '泰州', '盐城', '淮安', '宿迁', '徐州', '连云港'],
                lineColor: '#115d93',
                labels: {
                    style:{
                        color: '#a2d9ff'
                    }
                }
            },
            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 1,
                lineWidth : 1,
                lineColor: '#115d93',
                gridLineColor: '#115d93',
                gridLineDashStyle: 'ShortDot',
                labels: {
                    style:{
                        color: '#a2d9ff'
                    }
                }
            },
            colors: ['#acd598','#fdc674'],
            legend: {
                layout: 'horizontal',
                align: 'left',
                verticalAlign: 'top',
                symbolHeight: 12,
                symbolWidth: 12,
                symbolRadius: 0,
                itemHoverStyle : {
                    color : '#a2d9ff'
                },
                itemStyle: {
                    color: '#a2d9ff',
                    fontSize: '12px',
                    fontFamily: '微软雅黑',
                    fontWeight: 'normal'
                }
            },
            tooltip: {
                shared: true
            },
            series: [{
                name: '站点',
                data: [39, 25, 21, 33, 25, 19, 20, 11, 21, 33, 25, 19, 20, 11]
            }, {
                name: '格点',
                data: [24, 20, 26, 19, 25, 31, 29, 18, 26, 19, 25, 31, 29, 18]
            }]
        });
    };
};