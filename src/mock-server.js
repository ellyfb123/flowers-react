import { Server, Faker, uid } from 'react-mock'

const apiRoute = '/validate'
const requestHandler = (request, generator) => {
  const guides = generator.next(10); // @returns { <id1>: schema1, <id2>: schema2 }
  // const error = generator.error();
  return [200, { 'Content-Type': 'application/json' }, JSON.stringify(guides)];
}

const schema = {
  description: Faker.lorem.sentence(),
  createdAt: Faker.date.past(),
  favoredCount: Faker.random.number(),
  isPublic: random.boolean(),
  author: {
    id: uid.next(),
    name: Faker.name.findName(),
    picture: Faker.internet.avatar()
  }
};

const errorFormat = {
  message: Faker.lorem.sentence()
}

Server.mockGet(apiRoute, requestHandler, schema, errorFormat)

Server.on()