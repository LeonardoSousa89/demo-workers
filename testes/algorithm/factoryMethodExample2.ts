//Product interface 
export interface Data {}

//Creator 
export abstract class DataFactory{
    
    //factory method
    abstract getData(element: string): Data
    
    data(element: string): Data {
        
        const data = this.getData(element)

        return data
    }
}

//ConcreteProduct1 
export class TableData implements Data {
    
    constructor(private element: string){}
}

//ConcreteProduct2
export class CardData implements Data {

    constructor(private element: string){}
}

//ConcreteCreator1 
export class TableFactory extends DataFactory{
    
    getData(element: string): Data{
        
        return new TableData(element)
    }
}

//ConcreteCreator2
export class CardFactory extends DataFactory{
    
    getData(element: string): Data{
        
        return new TableData(element)
    }
}

//client code
const tableFactory = new TableFactory()
const cardFactory = new CardFactory()

const table = tableFactory.getData('element of table')
console.log(table)

const card = cardFactory.getData('element of card')
console.log(card)

/*
    refreências
    https://refactoring.guru/pt-br/design-patterns/factory-method/typescript/example
    https://www.youtube.com/watch?v=KouxYcDA2HA
    https://github.com/LeonardoSousa89/design-patterns-typescript/tree/master
*/
