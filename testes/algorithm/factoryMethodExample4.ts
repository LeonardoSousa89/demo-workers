export interface Data{
    
    client(): Object | Array<Object>
}

abstract class FactoryMethod{
    
    abstract getClient(): Data
    
    client(): Object | Array<Object>{
        
        const client = this.getClient()
        
        return client
    }
}

class AdminClient implements Data{
    
    constructor(private name: string, private email: string, private role: string){}
    
    client(): Object | Array<Object>{
        
        const data={ name: this.name, email: this.email, role: this.role }
        
        return data
    }
}

class CustomerClient implements Data{
    
   constructor(private name: string, private email: string, private role: string){}
    
    client(): Object | Array<Object>{
        
        const data={ name: this.name, email: this.email, role: this.role }
        
        return data
    }
}

class DeveloperClient implements Data{
    
   constructor(private name: string, private email: string, private role: string,  private stack: Array<Object>){}
    
    client(): Object | Array<Object>{
        
        const data={ name: this.name, email: this.email, role: this.role, stack: this.stack }
        
        return data
    }
}

class Admin extends FactoryMethod{
    
    constructor(private name: string, private email: string, private role: string){
        super()
    }
    
    getClient(): Data {
        
        return new AdminClient(this.name, this.email, this.role)
    }
} 

class Customer extends FactoryMethod{
    
  constructor(private name: string, private email: string, private role: string){
        super()
    }
    
    getClient(): Data {
        
        return new CustomerClient(this.name, this.email, this.role)
    }   
}

class Developer extends FactoryMethod{
    
  constructor(private name: string, private email: string, private role: string,  private stack: Array<Object>){
        super()
    }
    
    getClient(): Data {
        
        return new DeveloperClient(this.name, this.email, this.role, this.stack)
    }   
}

function showData(data: any){
    
    console.log(data.client())
}

const admin1 = new Admin('Micah Sanders', 'micah@gmail.com', 'admin')
const admin2 = new Admin('Leonardo Sousa', 'sousa@gmail.com', 'admin')
const customner1 = new Customer('Louis Lane', 'lane@gmail.com', 'customer')
const dev1 = new Developer('Leonardo Sousa', 'sousa@gmail.com', 'developer', [{ stack1: 'javascript', stack2: 'java', stack3: 'typescript' }])

showData(admin1)
showData(admin2)
showData(customner1)
showData(dev1)

/*
    referências:
    https://refactoring.guru/pt-br/design-patterns/factory-method/typescript/example
    https://www.youtube.com/watch?v=KouxYcDA2HA
    https://github.com/LeonardoSousa89/design-patterns-typescript/tree/master
*/