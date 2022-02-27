

const range = (len) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}



const newPerson = () => {

  return {
    Delete:"Delete"
  }
 
}

export function makeData(len=1) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range().map(newPerson)
    }
  })
}

export const nestedData = [
  
]
