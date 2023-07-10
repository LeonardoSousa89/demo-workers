import { firestore } from "../../../services/db";
import {
  collection,
  addDoc
} from "firebase/firestore";

import { Sugestao } from "../../../services/advertising/model";

async function send(
  email: string,
  comment: string,
  verifyFields: any,
  toast: any,
  clean: any
) {
  if (verifyFields() !== "por favor, insira um comentário!") {
    const form: Sugestao = { email, comment };

    try {
      await addDoc(collection(firestore, "comments_and_suggestions"), { form });
    } catch (e) {
      toast.warn(e);
    }

    toast("sugestão enviada com sucesso, obrigado!");

    clean();
  }

  toast.warn(verifyFields());
}

export { send }
