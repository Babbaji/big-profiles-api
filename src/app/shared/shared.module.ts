import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartModule} from 'angular2-chartjs';
import {PieChartComponent} from './components/pie-chart/pie-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    PieChartComponent,
    LineChartComponent,
    BarChartComponent,
  ],
  imports: [
    CommonModule,
    ChartModule,
  ],
  exports: [
    PieChartComponent,
    LineChartComponent,
    BarChartComponent,
  ],
  providers: [],
})
export class SharedModule {
}
