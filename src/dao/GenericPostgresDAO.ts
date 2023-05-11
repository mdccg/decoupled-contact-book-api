import { MatchKeysAndValues, Filter, FindOptions } from 'mongodb';
import { IGenericDAO } from './IGenericDAO';

export abstract class GenericPostgresDAO<T> implements IGenericDAO<T> {
  create(object: T): Promise<string> {
    throw new Error('Method not implemented.');
  }

  update(id: string, object: MatchKeysAndValues<T>): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  findOne(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }

  find(criteria: Filter<T>, options?: FindOptions<Document> | undefined): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
}