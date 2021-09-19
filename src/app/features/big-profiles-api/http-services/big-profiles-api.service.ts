import {Injectable} from '@angular/core';
import {HttpService} from '../../../shared/service/http.service';
import {bigProfilesApi} from '../../../../api/bigprofiles-api';
import {Observable} from 'rxjs';
import {HttpParams, HttpResponse} from '@angular/common/http';
import {IBigProfilesApiRetrieve} from '../interface/IBigProfilesApi';

@Injectable({
  providedIn: 'root'
})
export class BigProfilesApiService {

  constructor(private httpService: HttpService) {
  }

  retrieve(startDate: string, endDate: string, currentPage: number): Observable<HttpResponse<IBigProfilesApiRetrieve>> {
    const params = new HttpParams()
      .set('date_from', startDate)
      .set('date_to', endDate)
      .set('page', currentPage.toString());

    return this.httpService.get(bigProfilesApi.retrieveGet, params);
  }

}
