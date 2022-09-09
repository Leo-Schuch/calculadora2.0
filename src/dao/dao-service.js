import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from './firebase-config';
import { v4 as uuid } from 'uuid';

const getAllDocumentsAt = async (collectionName) => {
  const results = [];
  const querySnapshot = await getDocs(collection(db, collectionName));

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    results.push({
      id: doc.id,
      name: data?.name,
      value: data?.value
    });
  });


  return results;
};

const setData = async (collectionName, item) => {
  try {
    console.log(item)
    const document = doc(db, collectionName, uuid());
    
    await setDoc(document, item);
  } catch (error) {
    console.log(error)
  }

};




export { getAllDocumentsAt, setData };