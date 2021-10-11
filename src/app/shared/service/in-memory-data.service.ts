import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb(): {} {
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
      ],
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
