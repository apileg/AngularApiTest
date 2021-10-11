import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorageResponse} from "../interface/interfaces";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private http: HttpClient) {
  }

  public getStorageItems(): Observable<StorageResponse[]> {
    return this.http.get<StorageResponse[]>('api/storage');
  }

  public addStorageItem(body: any): Observable<any> {
    return this.http.post('api/storage', body);
  }

  public editStorageItem(id: number, body: any): Observable<any> {
    return this.http.patch('api/storage' + id, body);
  }

  public removeStorageItem(id: number): Observable<any> {
    return this.http.delete<any>('api/storage' + id);
  }
}
