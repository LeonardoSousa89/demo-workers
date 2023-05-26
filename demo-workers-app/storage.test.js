let dataStorage = []

dataStorage.push({data: 'data 1'})
localStorage.setItem('dados', JSON.stringify(dataStorage))

dataStorage.push({data: 'data 2'})
localStorage.setItem('dados', JSON.stringify(dataStorage))

dataStorage.push({data: 'data 3'})
localStorage.setItem('dados', JSON.stringify(dataStorage))

let dataLocalStorage = localStorage.getItem('dados')
let dataLocalStorageConvertedOnArray=JSON.parse(dataLocalStorage)
console.log(dataLocalStorageConvertedOnArray)

for(let i in dataLocalStorageConvertedOnArray){
    console.log(dataLocalStorageConvertedOnArray[i].data)
}

localStorage.removeItem('dados')