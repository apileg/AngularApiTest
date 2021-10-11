import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkersAddModalComponent} from "./workers-add-modal.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [WorkersAddModalComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [WorkersAddModalComponent]
})
export class WorkersAddModalModule {
}
