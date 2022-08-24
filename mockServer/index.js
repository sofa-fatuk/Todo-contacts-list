import { nanoid } from 'nanoid'

const getData = () => {
  const data = { contacts: [], users: [] }
  for (let i = 0; i < 50; i++) {
    data.contacts.push({
      id: nanoid(),
      mail: "sofa111298@gmail.com",
      avatarUrl: "https://lahiphopevents.com/wp-content/uploads/2021/08/erykah-badu.png",
      name: `user-${i}`,
    })
  }

  for (let i = 0; i < 50; i++) {
    data.contacts.push({
      id: nanoid(),
      mail: "sofa111298@gmail.com",
      avatarUrl: "https://lahiphopevents.com/wp-content/uploads/2021/08/erykah-badu.png",
      name: `sofa-${i}`,
    })
  }

  return data
}

const data = getData()

console.log(JSON.stringify(data));

export default getData
