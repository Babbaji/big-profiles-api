import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BigProfilesApiRoutingModule} from './big-profiles-api-routing.module';
import {BigProfilesHomeComponent} from './components/big-profiles-home/big-profiles-home.component';
import {SharedModule} from '../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

import {
  MatMomentDateModule
} from '@angular/material-moment-adapter';
import {
  NgxMatMomentModule,
  NgxMatMomentAdapter,
  NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular-material-components/moment-adapter';
import {
  NgxMatDateFormats,
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
  NGX_MAT_DATE_FORMATS, NgxMatDateAdapter
} from '@angular-material-components/datetime-picker';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';


const CUSTOM_DATE_FORMATS: NgxMatDateFormats = {
  parse: {
    dateInput: 'l, LTS'
  },
  display: {
    dateInput: 'YYYY/MM/DD HH:mm:ss',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  }
};

@NgModule({
  declarations: [BigProfilesHomeComponent],
  imports: [
    CommonModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    RouterModule,
    SharedModule,
    BigProfilesApiRoutingModule,
    FormsModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatListModule
  ],
  providers: [
    MatSnackBar
  ]
})
export class BigProfilesApiModule {
}
