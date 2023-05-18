import { IGenericDAO } from './../IGenericDAO';

export abstract class GenericDAO<T> implements IGenericDAO<T> {
  create(object: T): Promise<string> {
    throw new Error('Method not implemented.');
  }

  update(id: string, object: any): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  findOne(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }

  find(criteria: any, options?: any): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
}
