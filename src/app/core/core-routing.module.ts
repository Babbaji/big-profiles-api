import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoreComponent} from './core.component';
import {bigProfilesPath} from '../features/big-profiles-api/big-profiles-api-routing.module';


const path = {
};

const routes: Routes = [
  {
    path: '',
    redirectTo: bigProfilesPath.bigProfiles,
    pathMatch: 'prefix'
  },
  {
    path: bigProfilesPath.bigProfiles,
    component: CoreComponent,
    loadChildren: () => import('./../features/big-profiles-api/big-profiles-api.module')
      .then(mod => mod.BigProfilesApiModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild((routes))],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
