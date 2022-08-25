import { nanoid } from 'nanoid'
import { faker } from '@faker-js/faker';

const getData = () => {
  const data = { contacts: [], users: [] }
  for (let i = 0; i < 50; i++) {
    data.contacts.push({
      id: nanoid(),
      mail: faker.internet.email(),
      avatarUrl: faker.image.avatar(),
      name: faker.internet.userName(),
    })
  }

  return data
}

const data = getData()

console.log(JSON.stringify(data));

export default getData
