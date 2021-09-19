import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BigProfilesHomeComponent} from './components/big-profiles-home/big-profiles-home.component';


export const bigProfilesPath = {
  bigProfiles: 'big-profiles',
};

const routes: Routes = [
  {
    path: '',
    redirectTo: bigProfilesPath.bigProfiles,
    pathMatch: 'prefix'
  },
  {
    path: bigProfilesPath.bigProfiles,
    component: BigProfilesHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild((routes))],
  exports: [RouterModule]
})
export class BigProfilesApiRoutingModule {
}
