import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { circle, latLng, tileLayer } from 'leaflet';

import { featuredModel, recentModel, topCollectionModel, popularModel } from './college-sports.model';
import { nftfeaturedData, nftpopularData, nftrecentData, nftstatData, nfttopCollectionData } from 'src/app/core/data';
import { marketplaceChart, popularityChart } from 'src/app/shared/chartColor';

@Component({
    selector: 'app-college-sports',
    templateUrl: './college-sports.component.html',
    styleUrls: ['./college-sports.component.scss'],
    standalone: false
})

/**
 * College Sports Component
 */
export class CollegeSportsComponent implements OnInit {

    // bread crumb items
    breadCrumbItems!: Array<{}>;
    statData!: any;
    featuredData!: featuredModel[];
    recentData!: recentModel[];
    topCollectionData!: topCollectionModel[];
    popularData!: popularModel[];

    MarketplaceChart: any;
    popularityChart: any;
    minichart1: any;
    minichart2: any;
    minichart3: any;
    minichart4: any;
    minichart5: any;
    minichart6: any;
    minichart7: any;
    minichart8: any;

    // set the current year
    year: number = new Date().getFullYear();
    private _trialEndsAt: any;
    private _diff?: any;
    _days?: number;
    _hours?: number;
    _minutes?: number;
    _seconds?: number;

    option = {
        startVal: 0,
        useEasing: true,
        duration: 2,
        decimalPlaces: 2,
    };

    // Responsive settings for sliders
    public Responsive = {
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    // Collection slider settings
    public collection = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed: 3000
    };

    // Map options
    options = {
        layers: [
            tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGhlbWVzYnJhbmQiLCJhIjoiY2xmbmc3bTV4MGw1ejNzbnJqOWpubzhnciJ9.DNkdZVKLnQ6I9NOz7EED-w", {
                id: "mapbox/light-v9",
                tileSize: 512,
                zoomOffset: 0,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            })
        ],
        zoom: 1.1,
        center: latLng(28, 1.5)
    };

    layers = [
        circle([41.9, 12.45], { color: "#435fe3", opacity: 0.5, weight: 10, fillColor: "#435fe3", fillOpacity: 1, radius: 400000, }),
        circle([12.05, -61.75], { color: "#435fe3", opacity: 0.5, weight: 10, fillColor: "#435fe3", fillOpacity: 1, radius: 400000, }),
        circle([1.3, 103.8], { color: "#435fe3", opacity: 0.5, weight: 10, fillColor: "#435fe3", fillOpacity: 1, radius: 400000, }),
        circle([26.8, 80.9], { color: "#435fe3", opacity: 0.5, weight: 10, fillColor: "#435fe3", fillOpacity: 1, radius: 400000, }),
    ];

    // Counter animation options
    counterOptions = {
        startVal: 0,
        useEasing: true,
        duration: 2,
        decimalPlaces: 2,
    };

    loading: boolean = true;

    constructor() {
    }

    ngOnInit(): void {
        /**
         * BreadCrumb
         */
        this.breadCrumbItems = [
            { label: 'Dashboards' },
            { label: 'College Sports', active: true }
        ];

        // Simulate loading data
        setTimeout(() => {
            this.loading = false;
            /**
            * Fetches the data
            */
            this.fetchData();
        }, 800);

        this._marketplaceChart('["--vz-primary","--vz-success", "--vz-light"]');
        this._popularityChart('["--vz-success", "--vz-warning"]');
        this._minichart1Chart('["--vz-danger"]');
        this._minichartsuccessChart('["--vz-success"]');

        // Date Set for countdown
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        this._trialEndsAt = currentDate.toISOString().split('T')[0];

        /**
         * Count date set
         */
        interval(1000).pipe(map((x) => {
            this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
        })).subscribe((x) => {
            this._days = this.getDays(this._diff);
            this._hours = this.getHours(this._diff);
            this._minutes = this.getMinutes(this._diff);
            this._seconds = this.getSeconds(this._diff);
        });
    }

    /**
     * Fetches the data
     */
    private fetchData() {
        this.statData = nftstatData;
        this.featuredData = nftfeaturedData;
        this.recentData = nftrecentData;
        this.topCollectionData = nfttopCollectionData;
        this.popularData = nftpopularData;
    }

    /**
     * Filter marketplace data by timeframe
     * @param value Timeframe value (all, 1M, 6M, 1Y)
     */
    setmarketplacevalue(value: string) {
        if (value == 'all') {
            this.MarketplaceChart.series = [{
                name: "Artwork",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            },
            {
                name: "Auction",
                data: [40, 120, 83, 45, 31, 74, 35, 34, 78]
            },
            {
                name: "Creators",
                data: [95, 35, 20, 130, 64, 22, 43, 45, 31]
            }]
        }
        if (value == '1M') {
            this.MarketplaceChart.series = [{
                name: "Artwork",
                data: [20, 31, 25, 41, 59, 72, 69, 91, 148]
            },
            {
                name: "Auction",
                data: [50, 60, 103, 35, 41, 104, 35, 34, 58]
            },
            {
                name: "Creators",
                data: [95, 35, 20, 130, 64, 22, 43, 45, 31]
            }]
        }
        if (value == '6M') {
            this.MarketplaceChart.series = [{
                name: "Artwork",
                data: [50, 21, 15, 61, 59, 62, 69, 91, 148]
            },
            {
                name: "Auction",
                data: [50, 12, 83, 45, 91, 54, 35, 34, 88]
            },
            {
                name: "Creators",
                data: [85, 45, 70, 130, 94, 12, 23, 45, 31]
            }]
        }
        if (value == '1Y') {
            this.MarketplaceChart.series = [{
                name: "Artwork",
                data: [70, 21, 35, 21, 49, 62, 69, 31, 148]
            },
            {
                name: "Auction",
                data: [90, 120, 23, 45, 71, 74, 35, 24, 88]
            },
            {
                name: "Creators",
                data: [95, 35, 20, 130, 64, 22, 43, 45, 31]
            }]
        }
    }

    /**
     * Export chart data as CSV
     */
    exportChartData() {
        const header = 'Month,Artwork,Auction,Creators\n';
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
        let csvContent = header;

        for (let i = 0; i < months.length; i++) {
            const artwork = this.MarketplaceChart.series[0].data[i];
            const auction = this.MarketplaceChart.series[1].data[i];
            const creators = this.MarketplaceChart.series[2].data[i];
            csvContent += `${months[i]},${artwork},${auction},${creators}\n`;
        }

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'marketplace_data.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    /**
     * Day Set
     */
    getDays(t: number) {
        return Math.floor(t / (1000 * 60 * 60 * 24));
    }

    /**
     * Hours Set
     */
    getHours(t: number) {
        return Math.floor((t / (1000 * 60 * 60)) % 24);
    }

    /**
     * Minutes set
     */
    getMinutes(t: number) {
        return Math.floor((t / 1000 / 60) % 60);
    }

    /**
     * Secound set
     */
    getSeconds(t: number) {
        return Math.floor((t / 1000) % 60);
    }

    // Chart Colors Set
    private getChartColorsArray(colors: any) {
        colors = JSON.parse(colors);
        return colors.map(function (value: any) {
            var newValue = value.replace(" ", "");
            if (newValue.indexOf(",") === -1) {
                var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
                if (color) {
                    color = color.replace(" ", "");
                    return color;
                }
                else return newValue;;
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
    * Market Place Chart
    */
    private _marketplaceChart(colors: any) {
        colors = this.getChartColorsArray(colors);
        this.MarketplaceChart = {
            series: [{
                name: "Artwork",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            },
            {
                name: "Auction",
                data: [40, 120, 83, 45, 31, 74, 35, 34, 78]
            },
            {
                name: "Creators",
                data: [95, 35, 20, 130, 64, 22, 43, 45, 31]
            }],
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            colors: colors,
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
        };
        const attributeToMonitor = 'data-theme';

        const observer = new MutationObserver(() => {
            const currentTheme = document.documentElement.getAttribute(attributeToMonitor);
            this._marketplaceChart(marketplaceChart(currentTheme));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [attributeToMonitor]
        });
    }

    /**
    * Market Place Chart
    */
    private _popularityChart(colors: any) {
        colors = this.getChartColorsArray(colors);
        this.popularityChart = {
            series: [{
                name: 'Like',
                data: [12.45, 16.2, 8.9, 11.42, 12.6, 18.1, 18.2, 14.16]
            }, {
                name: 'Share',
                data: [-11.45, -15.42, -7.9, -12.42, -12.6, -18.1, -18.2, -14.16]
            }],
            chart: {
                type: 'bar',
                height: 260,
                stacked: true,
                toolbar: {
                    show: false
                },
            },
            plotOptions: {
                bar: {
                    columnWidth: '20%',
                    borderRadius: [4, 4]
                },
            },
            colors: colors,
            fill: {
                opacity: 1
            },
            dataLabels: {
                enabled: false,
                textAnchor: 'top',
            },
            yaxis: {
                labels: {
                    show: false,
                    formatter: function (y: any) {
                        return y.toFixed(0) + "%";
                    }
                }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                labels: {
                    rotate: -90
                }
            }
        };

        const attributeToMonitor = 'data-theme';

        const observer = new MutationObserver(() => {
            const currentTheme = document.documentElement.getAttribute(attributeToMonitor);
            this._popularityChart(popularityChart(currentTheme));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [attributeToMonitor]
        });
    }

    /**
    * Danger Mini Chart
    */
    private _minichart1Chart(colors: any) {
        colors = this.getChartColorsArray(colors);
        this.minichart1 = {
            series: [{
                data: [25, 66, 41, 89, 63, 25, 44, 12]
            }],
            chart: {
                type: 'line',
                width: 80,
                height: 30,
                sparkline: {
                    enabled: true
                }

            },
            colors: colors,
            stroke: {
                curve: 'smooth',
                width: 2.3,
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName: any) {
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };

        // mini chart 2
        this.minichart2 = {
            series: [{
                data: [50, 15, 35, 62, 23, 56, 44, 12]
            }],
            chart: {
                type: 'line',
                width: 80,
                height: 30,
                sparkline: {
                    enabled: true
                }

            },
            colors: colors,
            stroke: {
                curve: 'smooth',
                width: 2.3,
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName: any) {
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };

        // mini chart 3
        this.minichart3 = {
            series: [{
                data: [25, 35, 35, 89, 63, 25, 44, 12]
            }],
            chart: {
                type: 'line',
                width: 80,
                height: 30,
                sparkline: {
                    enabled: true
                }

            },
            colors: colors,
            stroke: {
                curve: 'smooth',
                width: 2.3,
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName: any) {
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };

        // mini chart 6
        this.minichart6 = {
            series: [{
                data: [50, 15, 35, 62, 23, 56, 44, 12]
            }],
            chart: {
                type: 'line',
                width: 80,
                height: 30,
                sparkline: {
                    enabled: true
                }

            },
            colors: colors,
            stroke: {
                curve: 'smooth',
                width: 2.3,
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName: any) {
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };

        // mini chart 8
        this.minichart8 = {
            series: [{
                data: [45, 53, 24, 89, 63, 60, 36, 50]
            }],
            chart: {
                type: 'line',
                width: 80,
                height: 30,
                sparkline: {
                    enabled: true
                }

            },
            colors: colors,
            stroke: {
                curve: 'smooth',
                width: 2.3,
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName: any) {
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };
    }

    /**
    * Success Mini Chart
    */
    private _minichartsuccessChart(colors: any) {
        colors = this.getChartColorsArray(colors);
        this.minichart4 = {
            series: [{
                data: [50, 15, 20, 34, 23, 56, 65, 41]
            }],
            chart: {
                type: 'line',
                width: 80,
                height: 30,
                sparkline: {
                    enabled: true
                }

            },
            colors: colors,
            stroke: {
                curve: 'smooth',
                width: 2.3,
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName: any) {
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };

        // mini chart 5 
        this.minichart5 = {
            series: [{
                data: [45, 53, 24, 89, 63, 60, 36, 50]
            }],
            chart: {
                type: 'line',
                width: 80,
                height: 30,
                sparkline: {
                    enabled: true
                }

            },
            colors: colors,
            stroke: {
                curve: 'smooth',
                width: 2.3,
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName: any) {
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };

        // mini chart 7
        this.minichart7 = {
            series: [{
                data: [50, 15, 20, 34, 23, 56, 65, 41]
            }],
            chart: {
                type: 'line',
                width: 80,
                height: 30,
                sparkline: {
                    enabled: true
                }

            },
            colors: colors,
            stroke: {
                curve: 'smooth',
                width: 2.3,
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName: any) {
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };
    }
}