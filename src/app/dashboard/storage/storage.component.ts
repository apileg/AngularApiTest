import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {StorageService} from "../../shared/service/storage.service";

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'title', 'count', 'supplier'];
  dataSource: MatTableDataSource<any> | any; // позволяет определить, что dataSource является источником для нашей таблицы

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.storageService.getStorageItems().subscribe(res => {
      console.log(res)
      const result = res;
      let arr: any[] = [];
      result.forEach((el: any) => {
        const obj = {
          id: el.id,
          title: el.title,
          count: el.count,
          supplier: el.supplier,
        };
        arr.push(obj);
      });
      this.dataSource = new MatTableDataSource<any>(arr);
      this.dataSource.paginator = this.paginator;
    });
  }

}
