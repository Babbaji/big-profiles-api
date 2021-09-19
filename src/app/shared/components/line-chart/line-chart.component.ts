import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GeneralUtils} from '../../utils/GeneralUtils';
import {IChartInput} from '../../interface/IChartInput';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {


  @Input() chartInput: IChartInput[];

  type: string = 'line';

  data = {
    labels: [],
    datasets: [{
      data: [],
      fill: true,
      borderColor: '#3f51b5',
      tension: 0.1
    }]
  };
  options = {
    backgroundColor: '#3f51b5',
    legend: false,
    responsive: true,
    maintainAspectRatio: false
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!GeneralUtils.isVoid(this.chartInput)) {

      this.data.labels = [];
      this.data.datasets[0].data = [];

      this.chartInput.forEach((input) => {

        this.data.datasets[0].data.push(input.value);
        this.data.labels.push(input.label);
      });

    }
  }

}
