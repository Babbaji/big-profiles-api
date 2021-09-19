import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GeneralUtils} from '../../utils/GeneralUtils';
import {IChartInput} from '../../interface/IChartInput';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnChanges {


  @Input() chartInput: IChartInput[];

  type: string = 'pie';
  data = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#f44336', '#ffffff'],
        borderColor: ['#3f51b5', '#3f51b5']
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
      });

    }
  }
}

