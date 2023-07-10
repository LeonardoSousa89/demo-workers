export default abstract class AbstractSharedLink {

    url: string

    constructor(url: string){
        
        this.url = url
    }

    abstract createAction(): any
}