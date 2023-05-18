import { inject, injectable } from 'inversify';
import { Db } from 'mongodb';
import { TYPES } from './../../injections/types';
import { User } from './../../models/User';
import { IUserDAO } from './../IUserDAO';
import { GenericDAO } from './GenericDAO';

@injectable()
export class UserDAO extends GenericDAO<User> implements IUserDAO {
  constructor(@inject(TYPES.DbConnector) db: Db) {
    super();
    this._collection = db.collection('users');
  }

  async truncate(): Promise<boolean> {
    const result = await this._collection.deleteMany({});
    return result.acknowledged;
  }

  async findByEmail(emailToken: string): Promise<User[]> {
    const users = await this.find({
      email: {
        $regex: emailToken,
        $options: 'i'
      }
    });

    return users;
  }
}