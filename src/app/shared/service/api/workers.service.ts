import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorageResponse, WorkersResponse} from "../../interface/interfaces";

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(private http: HttpClient) {
  }


  public getWorkersItems(): Observable<WorkersResponse[]> {
    return this.http.get<WorkersResponse[]>('api/workers');
  }

  public addWorkersItem(body: any): Observable<any> {
    return this.http.post('api/workers', body);
  }

  public editWorkersItem(id: number, body: any): Observable<any> {
    return this.http.patch('api/workers' + id, body);
  }

  public removeWorkersItem(id: number): Observable<any> {
    return this.http.delete<any>('api/workers' + id);
  }
}
