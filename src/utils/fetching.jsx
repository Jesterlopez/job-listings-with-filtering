export const getData = () => {
  return fetch('data.json')
    .then(res => res.json())
}

export const getDataForCategory = async (category) => {
  return await fetch('data.json')
    .then(res => res.json())
    .then(response => {
      const objectData = []
      response.map(data => {
        return Object.values(data).map((el => {
          if (typeof el === 'string') {
            if (el === category) {
              objectData.push(data)
            }
          }
          if (typeof el === 'object') {
            el?.map(cat => {
              if (cat === category) {
                objectData.push(data)
              }
            })
          }
        }))
      })
      return objectData
    })
}

export const getDataForCategorys = async (category) => {
  const categories = category
  return await fetch('data.json')
    .then(res => res.json())
    .then(response => {
      const objectData = []
      response.map(data => {
        return Object.values(data).map((el => {
          if (typeof el === 'string') {
            if (categories?.includes(el)) {
              objectData.push(data)
            }
          }
          if (typeof el === 'object') {
            el?.map(cat => {
              if (categories?.includes(cat)) {
                objectData.push(data)
              }
            })
          }
        }))
      })
      console.log(objectData)
      return objectData
    })
}