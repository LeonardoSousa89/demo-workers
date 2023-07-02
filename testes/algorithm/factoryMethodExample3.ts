//Product interface 
export interface Data {
    
    client(username: string, element: string): void
}

//Creator 
export abstract class DataFactory{
    
    //factory method
    abstract getData(): Data
    
    client(username: string, element: string): Data {
        
        const data = this.getData()
        data.client(username, element)
        
        return data
    }
}

//ConcreteProduct1 
export class TableData implements Data {
    
    client(username: string, element: string): void{
        
        console.log(`table element - username: ${username}, data: ${element}`)
    }
}

//ConcreteProduct2
export class CardData implements Data {
    
   client(username: string, element: string): void{
        
        console.log(`card element - username: ${username}, data: ${element}`)
    }
}

//ConcreteCreator1 
export class TableFactory extends DataFactory{
    
    getData(): Data{
        
        return new TableData()
    }
}

//ConcreteCreator2
export class CardFactory extends DataFactory{
    
   getData(): Data{
        
        return new CardData()
    }
}

//client code
const tableFactory = new TableFactory()
const cardFactory = new CardFactory()

const table1 = tableFactory.getData()
table1.client('Leonardo Sousa', 'dado 1')

const table2 = tableFactory.getData()
table2.client('Leonardo Sousa', 'dado 2')

const table3 = tableFactory.getData()
table3.client('Leonardo Sousa', 'dado 3')

console.log()

const card1 = cardFactory.getData()
card1.client('Leonardo Sousa', 'dado 1')

const card2 = cardFactory.getData()
card2.client('Leonardo Sousa', 'dado 2')

const card3 = cardFactory.getData()
card3.client('Leonardo Sousa', 'dado 3')

/*
    referências:
    https://refactoring.guru/pt-br/design-patterns/factory-method/typescript/example
    https://www.youtube.com/watch?v=KouxYcDA2HA
    https://github.com/LeonardoSousa89/design-patterns-typescript/tree/master
*/

