import { User } from './../models/User';
import { IGenericDAO } from './IGenericDAO';

export interface IUserDAO extends IGenericDAO<User> {
  truncate(): Promise<boolean>;
  findByEmail(name: string): Promise<User[]>;
}