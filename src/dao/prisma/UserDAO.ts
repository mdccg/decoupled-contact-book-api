import { PrismaClient } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { TYPES } from './../../injections/types';
import { User } from './../../models/User';
import { IUserDAO } from './../IUserDAO';
import { GenericDAO } from './GenericDAO';

@injectable()
export class UserDAO extends GenericDAO<User> implements IUserDAO {
  constructor(@inject(TYPES.DbConnector) client: PrismaClient) {
    super();
    
    // Aqui ocorre a injeção de dependência
    this._model = client.user;
  }

  async truncate(): Promise<boolean> {
    const { count } = await this._model.deleteMany({});
    return count !== 0;
  }

  async findByEmail(emailToken: string): Promise<User[]> {
    const users = await this.find({
      email: {
        contains: emailToken,
        mode: 'insensitive'
      }
    });

    return users;
  }
}