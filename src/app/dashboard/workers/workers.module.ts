import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkersComponent} from "./workers.component";
import {RouterModule, Routes} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {WorkersInMemoryDataService} from "../../shared/service/in-memory-data-service/workers-in-memory-data.service";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {WorkersAddModalModule} from "../../shared/component/workers/workers-add-modal.module";

const routes: Routes = [
  {
    path: '',
    component: WorkersComponent,
  }
]

@NgModule({
  declarations: [WorkersComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatDialogModule,
        WorkersAddModalModule
    ]
})
export class WorkersModule {
}
