import { Container } from 'inversify';
import { Db, MongoClient } from 'mongodb';
import { IUserDAO } from './../dao/IUserDAO';
import { UserDAO } from './../dao/mongodb/UserDAO';
import { TYPES } from './types';

export const getContainer = async (): Promise<Container> => {
  const container = new Container();

  // const client = new PrismaClient();
  const connection = await MongoClient.connect('mongodb://localhost:27017');
  const db = connection.db(process.env.POSTGRES_DB);

  // container.bind<PrismaClient>(TYPES.DbConnector).toConstantValue(client);
  container.bind<Db>(TYPES.DbConnector).toConstantValue(db);

  container.bind<IUserDAO>(TYPES.IUserDAO).to(UserDAO);

  return container;
}