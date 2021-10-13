import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {StorageResponse, WorkersResponse} from "../../interface/interfaces";

@Injectable({
  providedIn: 'root'
})
export class WorkersInMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb(): WorkersResponse {
    return {
      workers: [
        {
          id: 0,
          name: "Ivan",
          surname: "Chernenko",
          position: "Head",
          salary: 4000
        },
        {
          id: 1,
          name: "Oleg",
          surname: "Kirov",
          position: "Expert",
          salary: 1200
        },
        {
          id: 2,
          name: "Bob",
          surname: "Swarovski",
          position: "Sales manager",
          salary: 2500
        },
        {
          id: 3,
          name: "Anna",
          surname: "Banksy",
          position: "Sales manager",
          salary: 2500
        },
      ]
    }
  }
}
