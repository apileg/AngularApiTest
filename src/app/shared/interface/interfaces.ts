export interface StorageResponse {
  storage: Storage[],
}

export interface WorkersResponse {
  workers: Workers[],
}

export interface Workers {
  id: number,
  name: string,
  surname: string,
  position: string,
  salary: number,
}

export interface Storage {
  id: number,
  title: string,
  count: number,
  supplier: string,
}
