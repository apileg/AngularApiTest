import {WorkersAddModalComponent} from "../../shared/component/workers/workers-add-modal.component";

``
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {WorkersService} from "../../shared/service/workers.service";
import {MatDialog} from "@angular/material/dialog";
import {WorkersResponse} from "../../shared/interface/interfaces";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'position', 'salary'];
  dataSource: MatTableDataSource<any> | any; // позволяет определить, что dataSource является источником для нашей таблицы

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private workersService: WorkersService,public dialog: MatDialog,
              public http: HttpClient) {
  }

  ngOnInit(): void {
    this.getAndSetWorkersItems();
  }


  public getAndSetWorkersItems(): void {
    this.workersService.getWorkersItems().subscribe((res: WorkersResponse[]) => {
      this.dataSource = res;
    });
  }

  public deleteWorkersItem(id: number): void {
    this.workersService.removeWorkersItem(id).subscribe(res => {
      this.dataSource = res;
    })
  }

  public openDialog(method: 'edit' | 'add', dataToEdit?: any): void {
    const dialogRef = this.dialog.open(WorkersAddModalComponent, {
      data: {
        method: method,
        initialValue: dataToEdit
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAndSetWorkersItems();
    });
  }

  ngAfterViewInit(): void {
    this.workersService.getWorkersItems().subscribe(res => {
      const result = res;
      let arr: any[] = [];
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

