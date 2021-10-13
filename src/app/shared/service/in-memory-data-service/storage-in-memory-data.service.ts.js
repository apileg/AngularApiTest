import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {StorageResponse, WorkersResponse} from "../../interface/interfaces";

@Injectable({
  providedIn: 'root'
})
export class StorageInMemoryDataServiceTs implements InMemoryDbService {

  constructor() {
  }

  createDb(): StorageResponse {
    return {
      storage: [
        {
          id: 0,
          title: "Apples",
          count: 120,
          supplier: "Ukraine"
        },
        {
          id: 1,
          title: "Grapefruits",
          count: 340,
          supplier: "Brazil"
        },
        {
          id: 2,
          title: "Pears",
          count: 157,
          supplier: "USA"
        },
        {
          id: 3,
          title: "Watermelons",
          count: 671,
          supplier: "Ukraine"
        },
        {
          id: 4,
          title: "Potato",
          count: 728,
          supplier: "Belarus"
        },
      ]
    }
  }
}
