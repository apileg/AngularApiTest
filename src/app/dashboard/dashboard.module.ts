import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'workers',
        loadChildren: () => import('./workers/workers.module').then(m => m.WorkersModule),
      },
      {
        path: 'storage',
        loadChildren: () => import('./storage/storage.module').then(m => m.StorageModule),
      },
    ]
  }
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatButtonModule,
  ]
})
export class DashboardModule {
}
