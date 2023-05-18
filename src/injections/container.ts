import { PrismaClient } from '@prisma/client';
import { Container } from 'inversify';
import { IUserDAO } from './../dao/IUserDAO';
import { UserDAO } from './../dao/prisma/UserDAO';
import { TYPES } from './types';

export const getContainer = async (): Promise<Container> => {
  const container = new Container();
  const client = new PrismaClient();
  container.bind<PrismaClient>(TYPES.DbConnector).toConstantValue(client);
  container.bind<IUserDAO>(TYPES.IUserDAO).to(UserDAO);
  return container;
}