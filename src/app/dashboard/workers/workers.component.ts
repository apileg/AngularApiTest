import {WorkersAddModalComponent} from "../../shared/component/workers/workers-add-modal.component";

``
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {WorkersService} from "../../shared/service/api/workers.service";
import {MatDialog} from "@angular/material/dialog";
import {Workers, WorkersResponse} from "../../shared/interface/interfaces";
import {HttpClient} from "@angular/common/http";
import {WorkersInMemoryDataService} from "../../shared/service/in-memory-data-service/workers-in-memory-data.service";

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'position', 'salary'];
  dataSource: MatTableDataSource<any> | any; // lets us determine that the dataSource is the source for our table
                                            // https://material.angular.io/components/table/overview

  @ViewChild(MatPaginator) paginator: MatPaginator | any; // Angular Material paginator
                                                         // https://material.angular.io/components/paginator/overview

  constructor(private workersService: WorkersService, public dialog: MatDialog,
              // Angular Material Dialog https://material.angular.io/components/dialog/overview
              public http: HttpClient,
              public workersDataService: WorkersInMemoryDataService,
              ) {
  }

  ngOnInit(): void {
    this.getAndSetWorkersItems();
  }


  public getAndSetWorkersItems(): void {
    // Subscribing to WorkersResponse changes
    this.workersService.getWorkersItems().subscribe((res: WorkersResponse[]) => {
      // Push In-Memory-Data to our table
      this.dataSource = res;
    });
  }

  public deleteWorkersItem(id: number): void {
    this.workersService.removeWorkersItem(id).subscribe(res => {
      this.dataSource = res;
    })
  }
  // Angular Material file dialog; Use in workers.component.html
  public openDialog(method: 'edit' | 'add', dataToEdit?: any): void {
    // Open dialog and depending on the method, we do the actions (edit/add)
    const dialogRef = this.dialog.open(WorkersAddModalComponent, {
      data: {
        method: method,
        initialValue: dataToEdit // nullable
      }
    });
    // Close dialog after action, or after clicking on a free area
    dialogRef.afterClosed().subscribe(result => {
      // Get changed data
      this.getAndSetWorkersItems();
    });
  }

  ngAfterViewInit(): void {
    // Get data and subscribe on changes
    this.workersService.getWorkersItems().subscribe(res => {
      const result = res;
      let arr: any[] = [];
      // Fill the table
      result.forEach((el: any) => {
        const obj = {
          id: el.id,
          name: el.name,
          surname: el.surname,
          position: el.position,
          salary: el.salary,
        };
        arr.push(obj);
      });
      this.dataSource = new MatTableDataSource<any>(arr);
      this.dataSource.paginator = this.paginator;
    });
  }
}

