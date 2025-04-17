import { Component } from '@angular/core';

@Component({
  selector: 'app-slopearea',
  templateUrl: './slopearea.component.html',
  styleUrl: './slopearea.component.scss'
})
export class SlopeareaComponent {
  breadCrumbItems!: Array<{}>;
  SyncingLineChart: any;
  multipleRadialbarChart: any;

  constructor() { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Apexcharts' },
      { label: 'Slope Charts', active: true }
    ];

    this._SyncingLineChart('["--vz-primary", "--vz-success", "--vz-danger"]');
    this._multipleGroupChart('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger"]');
  }

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

  private _SyncingLineChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.SyncingLineChart = {
      series: [
        {
          name: 'Blue',
          data: [
            {
              x: 'Jan',
              y: 43,
            },
            {
              x: 'Feb',
              y: 58,
            },
          ],
        },
        {
          name: 'Green',
          data: [
            {
              x: 'Jan',
              y: 33,
            },
            {
              x: 'Feb',
              y: 38,
            },
          ],
        },
        {
          name: 'Red',
          data: [
            {
              x: 'Jan',
              y: 55,
            },
            {
              x: 'Feb',
              y: 21,
            },
          ],
        },
      ],
      chart: {
        height: 350,
        width: 400,
        type: 'line',
      },
      plotOptions: {
        line: {
          isSlopeChart: true,
        },
      },
      colors: colors,
    };
  }


  private _multipleGroupChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.multipleRadialbarChart = {
      series: [
        {
          name: 'Blue',
          data: [
            {
              x: 'Category 1',
              y: 503,
            },
            {
              x: 'Category 2',
              y: 580,
            },
            {
              x: 'Category 3',
              y: 135,
            },
          ],
        },
        {
          name: 'Green',
          data: [
            {
              x: 'Category 1',
              y: 733,
            },
            {
              x: 'Category 2',
              y: 385,
            },
            {
              x: 'Category 3',
              y: 715,
            },
          ],
        },
        {
          name: 'Orange',
          data: [
            {
              x: 'Category 1',
              y: 255,
            },
            {
              x: 'Category 2',
              y: 211,
            },
            {
              x: 'Category 3',
              y: 441,
            },
          ],
        },
        {
          name: 'Yellow',
          data: [
            {
              x: 'Category 1',
              y: 428,
            },
            {
              x: 'Category 2',
              y: 749,
            },
            {
              x: 'Category 3',
              y: 559,
            },
          ],
        },
      ],
      chart: {
        height: 350,
        width: 600,
        type: 'line',
      },
      plotOptions: {
        line: {
          isSlopeChart: true,
        },
      },
      tooltip: {
        followCursor: true,
        intersect: false,
        shared: true,
      },
      dataLabels: {
        background: {
          enabled: true,
        },
        formatter(val: null, opts: { w: { config: { series: { [x: string]: { name: any; }; }; }; }; seriesIndex: string | number; }) {
          const seriesName = opts.w.config.series[opts.seriesIndex].name
          return val !== null ? seriesName : ''
        },
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
        },
      },
      xaxis: {
        position: 'bottom',
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left',
      },
      stroke: {
        width: [2, 3, 4, 2],
        dashArray: [0, 0, 5, 2],
        curve: 'smooth',
      },
      colors: colors,
    };
  }
}
