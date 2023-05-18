import { PrismaClient } from '@prisma/client';
import { Container } from 'inversify';
import { Db, MongoClient } from 'mongodb';
import { IUserDAO } from './../dao/IUserDAO';
import { UserDAO as UserMongoDAO } from './../dao/mongodb/UserDAO';
import { UserDAO as UserPrismaDAO } from './../dao/prisma/UserDAO';
import { TYPES } from './types';

export const getContainer = async (sgbd: 'mongodb' | 'postgres'): Promise<Container> => {
  const container = new Container();

  switch(sgbd) {
    case 'mongodb':
      const connection = await MongoClient.connect('mongodb://localhost:27017');
      const db = connection.db(process.env.POSTGRES_DB);
      container.bind<Db>(TYPES.DbConnector).toConstantValue(db);
      container.bind<IUserDAO>(TYPES.IUserDAO).to(UserMongoDAO);
      break;
      
    case 'postgres':
      const client = new PrismaClient();
      container.bind<PrismaClient>(TYPES.DbConnector).toConstantValue(client);
      container.bind<IUserDAO>(TYPES.IUserDAO).to(UserPrismaDAO);
      break;
  }
    
  return container;
}