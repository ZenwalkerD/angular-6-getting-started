import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-chart-legend',
  templateUrl: './custom-chart-legend.component.html',
  styleUrls: ['./custom-chart-legend.component.css']
})
export class CustomChartLegendComponent implements OnInit {

  private legendMappedItems : Array<any>;
  constructor() {    
   }

  ngOnInit() {
    this.legendMappedItems = this.chartLegendColor.map((x,y) => {
      return {"color":x,"label": this.chartLegendLabels[y]}
    });
  }

  @Input('legendColor') chartLegendColor;
  @Input("legendLabels") chartLegendLabels;
}
