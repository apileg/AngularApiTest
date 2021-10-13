import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NotifierService} from "angular-notifier";
import {WorkersService} from "../../service/api/workers.service";

@Component({
  selector: 'app-add-modal',
  templateUrl: './workers-add-modal.component.html',
  styleUrls: ['./workers-add-modal.component.css']
})
export class WorkersAddModalComponent implements OnInit {

  public addWorkersForm = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    position: ['', Validators.required],
    salary: ['', Validators.min(0)],
  });

  public workersItemId: number = 0;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<WorkersAddModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, // To access the data in your dialog component, you have to
                                                          // use the MAT_DIALOG_DATA injection token
                                                         // https://material.angular.io/components/dialog/overview
              private notifierService: NotifierService, // NotifierService
                                                       // https://www.npmjs.com/package/angular-notifier
              private workersService: WorkersService) {
  }
  // The edit form must be immediately filled in with the required field, therefore if method is here
  ngOnInit(): void {
    if (this.data.method === 'edit') {
      this.addWorkersForm = this.data.initialValue.id;
      // addWorkersFrom field = table field value
      this.addWorkersForm.controls.name.setValue(this.data.initialValue.name);
      this.addWorkersForm.controls.surname.setValue(this.data.initialValue.surname);
      this.addWorkersForm.controls.position.setValue(this.data.initialValue.position);
      this.addWorkersForm.controls.salary.setValue(this.data.initialValue.salary);
    }
  }

  public workersModalAction(method: string): void {
    if (method === 'add') {
      this.workersService.addWorkersItem(this.addWorkersForm.value)
        .subscribe(
          (res) => {
            this.notifierService.notify('success', 'Добавлено успешно!')
            this.dialogRef.close();
          },
          (error) => {
            // TODO:
          })
    } else {
      this.workersService.editWorkersItem(this.workersItemId, this.addWorkersForm.value)
        .subscribe(
          (res) => {
            this.notifierService.notify('success', 'Успешно отредактировано!')
            this.dialogRef.close();
          },
          (error) => {
            // TODO:
          })
    }
  }
}
