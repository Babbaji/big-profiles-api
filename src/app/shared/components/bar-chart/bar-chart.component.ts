import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IChartInput} from '../../interface/IChartInput';
import {GeneralUtils} from '../../utils/GeneralUtils';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, OnChanges {


  @Input() chartInput: IChartInput[];
  type: string = 'bar';
  data = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1

      }
    ]
  };
  options = {
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
        this.data.datasets[0].backgroundColor.push('rgb(141,187,255)');
        this.data.datasets[0].borderColor.push('#3f51b5');
      });

    }
  }

}
