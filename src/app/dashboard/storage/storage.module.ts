import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StorageComponent} from "./storage.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";

const routes: Routes = [
  {
    path: '',
    component: StorageComponent
  }
]


@NgModule({
  declarations: [StorageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class StorageModule { }
