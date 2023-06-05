import { firestore } from "../db"
import {
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore"

import { Sugestao } from "./model"

async function send(email: string, 
                    comment: string, 
                    verifyFields: any,
                    toast: any, 
                    clean: any) {

  if(verifyFields() !== 'por favor, insira um comentário!'){
    
    const form: Sugestao = { email, comment }
    
    try{
        
        await addDoc(collection(firestore, "comments_and_suggestions"), { form });
    }catch(e){

        toast.warn(e)
    }
    
    toast("sugestão enviada com sucesso, obrigado!")
    
    clean() 
  }

  toast.warn(verifyFields())

}

function redirect(path: string){
  
  window.open(path)
}

export { send, redirect };
