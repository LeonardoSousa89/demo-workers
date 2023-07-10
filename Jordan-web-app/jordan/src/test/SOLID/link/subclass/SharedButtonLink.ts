import AbstractSharedLink from "../abstract_class/AbstractSharedLink"

export default class SharedButtonLink extends AbstractSharedLink {

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(url: string){

        super(url)
    }
    
    createAction(): any {
        
       return () => window.open(this.url)
    }
}