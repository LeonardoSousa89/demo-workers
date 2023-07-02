//Product interface 
export interface Vehicle {  
    
    client(clientName: string): void
    run(): void 
    stop(): void
}

//Creator 
export abstract class VehicleFactory{
    
    //factory method
    abstract getVehicle(vehicleName: string): Vehicle
    
    client(clientName: string, vehicleName: string): Vehicle {
        
        const vehicle = this.getVehicle(vehicleName)
        vehicle.client(clientName)
        return vehicle
    }
}

//ConcreteProduct1 
export class Car implements Vehicle {
    
    constructor(private vehicleName: string){}

    client(clientName: string): void{
        
        console.log(`vehicle: ${this.vehicleName}, username: ${clientName}`)
    }
    
    run(): void{
        
         console.log(`${this.vehicleName} running`)
    }
    
    stop(): void{
        
        console.log(`${this.vehicleName} stoped`)
    }
}

//ConcreteProduct2
export class MotorBike implements Vehicle {

    constructor(private vehicleName: string){}

    client(clientName: string): void{
        
        console.log(`vehicle: ${this.vehicleName}, username: ${clientName}`)
    }
    
    run(): void{
        
         console.log(`${this.vehicleName} running`)
    }
    
    stop(): void{
        
        console.log(`${this.vehicleName} stoped`)
    }
}

//ConcreteProduct3
export class Bicycle implements Vehicle {

    constructor(private vehicleName: string){}

    client(clientName: string): void{
        
        console.log(`vehicle: ${this.vehicleName}, username: ${clientName}`)
    }
    
    run(): void{
        
         console.log(`${this.vehicleName} running`)
    }
    
    stop(): void{
        
        console.log(`${this.vehicleName} stoped`)
    }
}

//ConcreteCreator1 
export class CarFactory extends VehicleFactory{
    
    getVehicle(vehicleName: string): Vehicle{
        
        return new Car(vehicleName)
    }
}

//ConcreteCreator2
export class MotorBikeFactory extends VehicleFactory{
    
       getVehicle(vehicleName: string): Vehicle{
        
        return new MotorBike(vehicleName)
    }
}

//ConcreteCreator3
export class BicycleFactory extends VehicleFactory{
    
    
       getVehicle(vehicleName: string): Vehicle{
        
        return new Bicycle(vehicleName)
    }
}

//client code
    
//using vehicles
const carFactory = new CarFactory()
const focus = carFactory.getVehicle('ford focus')
focus.client('Leonardo Sousa')
focus.run()

const motorBikeFactory = new MotorBikeFactory()
const honda = motorBikeFactory.getVehicle('honda cg titan 350')
honda.client('Gabriela Lima')
honda.stop()

const bicycleFactory = new BicycleFactory()
const dropp = bicycleFactory.getVehicle('dropp aro 29')
dropp.client('Renata Souza')
dropp.run()

/*
    refreências
    https://refactoring.guru/pt-br/design-patterns/factory-method/typescript/example
    https://www.youtube.com/watch?v=KouxYcDA2HA
    https://github.com/LeonardoSousa89/design-patterns-typescript/tree/master
*/
