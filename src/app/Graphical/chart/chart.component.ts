import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  tiles: any[] = [
    { color: 'lightblue', data: [10, 20, 30] },
    { color: 'lightgreen', data: [70, 60, 93] },
    { color: 'lightpink', data: [77, 44, 88] },
    { color: 'cyan', data: [66, 33, 44] }
  ];

  public chartBackGroundColor = ["#FF6384",  "#4BC0C0",  "#FFCE56"];
  public pieChartLabels: string[] = ["InProgress", "OnHold", "Complete"];
  public pieChartType: string = 'pie';
  public pieChartOptions: any = {
    'backgroundColor': this.chartBackGroundColor,
    legend: {
      display: false,
      labels: {
        display: false
      }
    }
  };

  public chartOptionsWithLegendOnly: any = {
    'backgroundColor': this.chartBackGroundColor  }

  constructor() { }

  ngOnInit() {
  }

}
