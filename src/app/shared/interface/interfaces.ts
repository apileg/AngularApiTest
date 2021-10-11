export interface StorageResponse {
  results: Storage[],
}

export interface WorkersResponse {
  results: Workers[],
}

export interface Workers {
  id: number,
  name: string,
  position: string,
  salary: number,
}

export interface Storage {
  id: number,
  title: string,
  count: number,
  supplier: string,
}
