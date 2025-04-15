export interface DatabaseService {
  connect(): Promise<void>;

  query<T = any>(sql: string, params?: any[]): Promise<T[]>;

  // add more methods as needed...
}
