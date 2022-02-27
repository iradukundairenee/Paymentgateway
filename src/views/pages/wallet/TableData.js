import namor from "namor"

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 10),
    progress: Math.floor(Math.random() * 10),
    status:
      statusChance > 0.66
        ? "paid"
        : statusChance > 0.33
        ? "due"
        : "canceled"
  }
}

export function makeData(len = 100) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    }
  })
}

export const nestedData = [
  {
    first_name: "MTN",
    Name: "Mockus",
    company_name: "Sinclair Machine Products Inc"   
  }
]
