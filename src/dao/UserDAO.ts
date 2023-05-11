import { Db } from 'mongodb';
import { User } from '../models/User';
import { GenericMongoDAO } from './GenericMongoDAO';

export class UserDAO extends GenericMongoDAO<User> {
  constructor(db: Db) {
    super(db, 'users');
  }

  async truncate(): Promise<boolean> {
    const result = await this.collection.deleteMany({});
    return result.acknowledged;
  }
}