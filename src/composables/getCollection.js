import { ref, watchEffect } from "vue";

//firebase imports

import { db } from "@/firebase/config";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

const getCollection = (c) => {
  const documents = ref(null);

  //collection references
  const colRef = query(collection(db, c), orderBy("createAt"));

  const unsub = onSnapshot(colRef, (snapshot) => {
    let results = [];
    snapshot.docs.forEach((doc) => {
      results.push({ ...doc.data(), id: doc.id });
    });

    //update values
    documents.value = results;
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { documents };
};

export default getCollection;
