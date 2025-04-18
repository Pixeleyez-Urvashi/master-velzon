import { Component, OnInit } from '@angular/core';
import { ClosingDeals, DealsStatus, UpcomingActivities, crmstatData } from 'src/app/core/data';
import { DealTypeChart, salesForecastChart, splineAreaChart } from 'src/app/shared/chartColor';

@Component({
    selector: 'app-nba',
    templateUrl: './nba.component.html',
    styleUrls: ['./nba.component.scss'],
    standalone: false
})

/**
 * NBA Dashboard Component
 */
export class NbaComponent implements OnInit {
    // bread crumb items
    breadCrumbItems: Array<{ label: string, active?: boolean }> = [];
    statData: any;
    salesForecastChart: any;
    DealTypeChart: any;
    splineAreaChart: any;
    DealsStatus: any;
    UpcomingActivities: any;
    ClosingDeals: any;

    constructor() { }

    ngOnInit(): void {
        this.initializeBreadcrumb();
        this.fetchData();
        this.initializeCharts();
        this.setupThemeObservers();
    }

    /**
     * Initialize breadcrumb items
     */
    private initializeBreadcrumb(): void {
        this.breadCrumbItems = [
            { label: 'Dashboards' },
            { label: 'NBA', active: true }
        ];
    }

    /**
     * Initialize chart configurations
     */
    private initializeCharts(): void {
        // Chart Color Data Get Function
        this._salesForecastChart('["--vz-primary", "--vz-success", "--vz-warning"]');
        this._DealTypeChart('["--vz-warning", "--vz-danger", "--vz-success"]');
        this._splineAreaChart('["--vz-success", "--vz-danger"]');
    }

    /**
     * Set up theme observers for chart color updates
     */
    private setupThemeObservers(): void {
        const attributeToMonitor = 'data-theme';
        const observer = new MutationObserver(() => {
            const currentTheme = document.documentElement.getAttribute(attributeToMonitor);
            this._salesForecastChart(salesForecastChart(currentTheme));
            this._DealTypeChart(DealTypeChart(currentTheme));
            this._splineAreaChart(splineAreaChart(currentTheme));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [attributeToMonitor]
        });
    }

    /**
     * Fetch data from services
     */
    private fetchData(): void {
        this.statData = crmstatData;
        this.DealsStatus = DealsStatus;
        this.UpcomingActivities = UpcomingActivities;
        this.ClosingDeals = ClosingDeals;
    }

    /**
     * Get chart colors array from color strings
     */
    private getChartColorsArray(colors: any): any[] {
        colors = JSON.parse(colors);
        return colors.map(function (value: any) {
            var newValue = value.replace(" ", "");
            if (newValue.indexOf(",") === -1) {
                var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
                if (color) {
                    color = color.replace(" ", "");
                    return color;
                }
                else return newValue;
            } else {
                var val = value.split(',');
                if (val.length == 2) {
                    var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
                    rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                    return rgbaColor;
                } else {
                    return newValue;
                }
            }
        });
    }

    /**
     * Sales Forecast Chart value setter
     */
    setforecastvalue(value: string): void {
        const forecastData = {
            'oct': {
                Goal: [17],
                PendingForcast: [6],
                Revenue: [37]
            },
            'nov': {
                Goal: [37],
                PendingForcast: [12],
                Revenue: [18]
            },
            'dec': {
                Goal: [25],
                PendingForcast: [20],
                Revenue: [27]
            },
            'jan': {
                Goal: [7],
                PendingForcast: [5],
                Revenue: [32]
            }
        };

        if (value in forecastData) {
            const data = forecastData[value as keyof typeof forecastData];
            this.salesForecastChart.series = [
                { name: 'Goal', data: data.Goal },
                { name: 'Pending Forcast', data: data.PendingForcast },
                { name: 'Revenue', data: data.Revenue }
            ];
        }
    }

    /**
     * Deal Type Chart value setter
     */
    setdealvalue(value: string): void {
        const dealData = {
            'today': {
                series1: [80, 50, 30, 40, 100, 20],
                series2: [20, 30, 40, 80, 20, 80],
                series3: [44, 76, 78, 13, 43, 10]
            },
            'weekly': {
                series1: [90, 40, 40, 20, 80, 50],
                series2: [50, 20, 30, 70, 30, 80],
                series3: [54, 76, 78, 23, 43, 50]
            },
            'monthly': {
                series1: [20, 50, 30, 50, 100, 80],
                series2: [80, 30, 70, 50, 30, 50],
                series3: [44, 56, 78, 53, 43, 10]
            },
            'yearly': {
                series1: [20, 50, 90, 40, 100, 20],
                series2: [50, 80, 40, 40, 10, 60],
                series3: [34, 96, 58, 23, 33, 40]
            }
        };

        if (value in dealData) {
            const data = dealData[value as keyof typeof dealData];
            this.DealTypeChart.series = [
                { name: 'Series 1', data: data.series1 },
                { name: 'Series 2', data: data.series2 },
                { name: 'Series 3', data: data.series3 }
            ];
        }
    }

    /**
     * Spline-Area Chart value setter
     */
    setbalancevalue(value: string): void {
        const balanceData = {
            'today': {
                Revenue: [20, 25, 30, 35, 40, 55, 70, 110, 150, 180, 210, 250],
                Expenses: [12, 17, 45, 42, 24, 35, 42, 75, 102, 108, 156, 199]
            },
            'last_week': {
                Revenue: [30, 35, 40, 45, 20, 45, 20, 100, 120, 150, 190, 220],
                Expenses: [12, 17, 45, 52, 24, 35, 42, 75, 92, 108, 146, 199]
            },
            'last_month': {
                Revenue: [20, 45, 30, 35, 40, 55, 20, 110, 100, 190, 210, 250],
                Expenses: [62, 25, 45, 45, 24, 35, 42, 75, 102, 108, 150, 299]
            },
            'current_year': {
                Revenue: [27, 25, 30, 75, 70, 55, 50, 120, 250, 180, 210, 250],
                Expenses: [12, 17, 45, 42, 24, 35, 42, 75, 102, 108, 156, 199]
            }
        };

        if (value in balanceData) {
            const data = balanceData[value as keyof typeof balanceData];
            this.splineAreaChart.series = [
                { name: 'Revenue', data: data.Revenue },
                { name: 'Expenses', data: data.Expenses }
            ];
        }
    }

    // Chart configurations - kept unchanged as per your request
    private _salesForecastChart(colors: any) {
        colors = this.getChartColorsArray(colors);
        this.salesForecastChart = {
            series: [{
                name: 'Goal',
                data: [37]
            }, {
                name: 'Pending Forcast',
                data: [12]
            }, {
                name: 'Revenue',
                data: [18]
            }],
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '65%',
                },
            },
            stroke: {
                show: true,
                width: 5,
                colors: ['transparent']
            },
            xaxis: {
                categories: [''],
                axisTicks: {
                    show: false,
                    borderType: 'solid',
                    color: '#78909C',
                    height: 6,
                    offsetX: 0,
                    offsetY: 0
                },
                title: {
                    text: 'Forecasted',
                    offsetX: 0,
                    offsetY: -45,
                    style: {
                        color: '#78909C',
                        fontSize: '12px',
                        fontWeight: 400,
                    },
                },
            },
            yaxis: {
                labels: {
                    formatter: function (value: any) {
                        return "$" + value + "k";
                    }
                },
                tickAmount: 4,
                min: 0
            },
            fill: {
                opacity: 1
            },
            legend: {
                show: true,
                position: 'bottom',
                horizontalAlign: 'center',
                fontWeight: 500,
                offsetX: 0,
                offsetY: -14,
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                markers: {
                    width: 10,
                    height: 10,
                }
            },
            colors: colors
        };
    }

    private _DealTypeChart(colors: any) {
        colors = this.getChartColorsArray(colors);
        this.DealTypeChart = {
            series: [{
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            },
            {
                name: 'Series 2',
                data: [20, 30, 40, 80, 20, 80],
            },
            {
                name: 'Series 3',
                data: [44, 76, 78, 13, 43, 10],
            }
            ],
            chart: {
                height: 350,
                type: 'radar',
                dropShadow: {
                    enabled: true, blur: 1, left: 1, top: 1
                },
                toolbar: {
                    show: false
                },
            },
            stroke: {
                width: 2
            },
            fill: {
                opacity: 0.2
            },
            markers: {
                size: 0
            },
            colors: colors,
            xaxis: {
                categories: ['2014', '2015', '2016', '2017', '2018', '2019']
            }
        };
    }

    private _splineAreaChart(colors: any) {
        colors = this.getChartColorsArray(colors);
        this.splineAreaChart = {
            series: [{
                name: 'Revenue',
                data: [20, 25, 30, 35, 40, 55, 70, 110, 150, 180, 210, 250]
            }, {
                name: 'Expenses',
                data: [12, 17, 45, 42, 24, 35, 42, 75, 102, 108, 156, 199]
            }],
            chart: {
                height: 290,
                type: 'area',
                toolbar: 'false',
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yaxis: {
                tickAmount: 5,
                min: 0,
                max: 260
            },
            colors: colors,
            fill: {
                opacity: 0.06,
                type: 'solid'
            }
        };
    }
}