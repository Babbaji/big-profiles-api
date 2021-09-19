import {Component, OnInit} from '@angular/core';
import {BigProfilesApiService} from '../../http-services/big-profiles-api.service';
import {take} from 'rxjs/operators';
import * as moment from 'moment';
import {IBigProfilesApiLogs, IBigProfilesApiRetrieve, IBigProfilesApiValues} from '../../interface/IBigProfilesApi';
import {HttpResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {GeneralUtils} from '../../../../shared/utils/GeneralUtils';
import {IChartInput} from '../../../../shared/interface/IChartInput';
import {NumberUtils} from '../../../../shared/utils/NumberUtils';

@Component({
  selector: 'app-big-profiles-home',
  templateUrl: './big-profiles-home.component.html',
  styleUrls: ['./big-profiles-home.component.scss']
})
export class BigProfilesHomeComponent implements OnInit {


  currentPage: number = 1;
  retrieve: IBigProfilesApiRetrieve;

  calculatedValues: IBigProfilesApiValues;
  lineChart: IChartInput[] = [];
  pieChart: IChartInput[] = [];
  barChart: IChartInput[] = [];

  startDate: string = moment().subtract(2, 'month').toISOString();
  endDate: string;

  maxDate = moment().toISOString();


  constructor(private bigProfilesApiService: BigProfilesApiService,
              private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {

  }

  onSearchButton(reset: boolean = false) {

    if (this.startDate != null && this.endDate != null) {
      let startDate: string = moment(this.startDate).toISOString();
      let endDate: string = moment(this.endDate).toISOString();

      this.callRetrieve(startDate, endDate, reset);
    }
  }

  onNextPage() {
    this.currentPage++;
    this.onSearchButton();

  }

  openErrorSnackBar() {

    let snackBarRef = this.snackBar.open('Ops qualcosa è andato storto!', 'Chiudi');

    snackBarRef.onAction().pipe(take(1)).subscribe(() => {
      snackBarRef.dismiss();
    });
  }

  callRetrieve(startDate: string, endDate: string, reset: boolean = false) {

    this.bigProfilesApiService.retrieve(startDate, endDate, this.currentPage).pipe((take(1))).subscribe((response: HttpResponse<IBigProfilesApiRetrieve>) => {


      switch (response.status) {
        case 200:

          if (!GeneralUtils.isVoid(this.retrieve)) {
            if (reset) {
              this.retrieve = null;
            }

            this.retrieve.logs.push(...response.body.logs);
          } else {
            this.retrieve = response.body;
          }
          this.populateCalculatedValues();
          break;
        default:
          this.openErrorSnackBar();
          break;

      }
    }, error => {
      this.openErrorSnackBar();
    });

  }


  populateCalculatedValues() {

    if (!GeneralUtils.isVoid(this.retrieve)) {

      let counters = {};
      let totalBigProfilesApiValue: IBigProfilesApiValues = {};

      this.retrieve.values.forEach((a) => {

        counters[a.key] = NumberUtils.sum(counters[a.key], a.total_requests);
        totalBigProfilesApiValue.total_requests = NumberUtils.sum(totalBigProfilesApiValue.total_requests, a.total_requests);
        totalBigProfilesApiValue.total_errors = NumberUtils.sum(totalBigProfilesApiValue.total_errors, a.total_errors);
        totalBigProfilesApiValue.total_response_time_ms = NumberUtils.sum(totalBigProfilesApiValue.total_response_time_ms, a.total_response_time_ms);

      });

      totalBigProfilesApiValue.total_response_time_ms = Number((totalBigProfilesApiValue.total_response_time_ms / this.retrieve.values.length).toFixed(2));
      this.calculatedValues = totalBigProfilesApiValue;


      this.lineChart = [];
      this.lineChart.push(...this.retrieve.logs.map((log) => {
        let formattedDate = moment(log.creation_datetime).format('DD/MM HH:mm');
        return {label: formattedDate, value: log.response_time};
      }));


      this.pieChart = [];
      this.pieChart.push({label: 'Errori', value: totalBigProfilesApiValue.total_errors});
      this.pieChart.push({label: 'Eseguiti', value: totalBigProfilesApiValue.total_requests - totalBigProfilesApiValue.total_errors});

      this.barChart = [];

      this.barChart.push(...Object.keys(counters).map((key) => {
        return {label: key, value: counters[key]};

      }));

    }
  }

  patchDate(patchCase: string) {
    switch (patchCase) {
      case '1':
        this.endDate = moment().toISOString();
        this.startDate = moment().subtract(1, 'week').toISOString();
        break;
      case '2':
        this.endDate = moment().toISOString();
        this.startDate = moment().subtract(1, 'month').toISOString();

        break;
      case '3':
        this.endDate = moment().toISOString();
        this.startDate = moment().subtract(3, 'month').toISOString();
        break;

      default:
        patchCase = null;
    }
    if (patchCase != null) {
      this.onSearchButton(true);
    }

  }


}
