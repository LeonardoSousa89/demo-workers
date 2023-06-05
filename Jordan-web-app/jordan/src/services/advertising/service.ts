import { firestore } from "../db";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";

import { Sugestao } from "./model";

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

function redirect(path: string) {
  window.open(path);
}

const github = (): void => {
  redirect("https://github.com/LeonardoSousa89/demo-workers/tree/redesign");
};
const linkedin = (): void => {
  redirect(
    "https://www.linkedin.com/company/jordan-app/about/?viewAsMember=true"
  );
};
const instagram = (): void => {
  redirect("https://www.instagram.com/jordanapplication");
};
const facebook = (): void => {
  redirect("https://www.facebook.com/profile.php?id=100093243430633");
};
const youtube = (): void => {
  redirect("https://www.youtube.com/channel/UCrJUpc391D5z9KKl9FcOy4A");
};

export { send, redirect, github, linkedin, instagram, facebook, youtube };
