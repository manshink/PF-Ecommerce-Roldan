import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";
import data from "./data";
import products from "./data";


const firebaseConfig = {
    apiKey: "AIzaSyBlSk5yUEmsfIN_LW6SZle6uZwJDVIxzyE",
    authDomain: "react-ecommerce-f5bb7.firebaseapp.com",
    projectId: "react-ecommerce-f5bb7",
    storageBucket: "react-ecommerce-f5bb7.firebasestorage.app",
    messagingSenderId: "583273192041",
    appId: "1:583273192041:web:bce3a47fe1397205f820f8"
  };


    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);



export default async function getAsyncData() {
    //leer todos los documentos de la colección.

    const collectionRef = collection(db, "products");
    const productsSnapshot = await getDocs(collectionRef);
    const documentsData =  productsSnapshot.docs.map( doc => {
     return { ...doc.data(), id: doc.id}
    } 
);
    
  return documentsData;

 }

export async function GetAsyncDataById(id) { 
    const docRef = doc(db, "products", id);
    const docSnapShot = await getDoc(docRef);
    const docData = docSnapShot.data();
    return docData;
 }


export async function GetAsyncDataByCategory(catid) { 

    const productsCollectionRef = collection(db, "products");
    const q = query(productsCollectionRef, where("category", "==", catid));
    const productsSnapshot = await getDocs(q);
    const documentsData =  productsSnapshot.docs.map( doc => {
     return { ...doc.data(), id: doc.id}
    } 
);
    
  return documentsData;

}


// Solo para testeo
export async function createDocument() {

    const docRef = await addDoc(collection(db, "products"), {
    title: "iPhone 13 Pro",
    price: 999.99,
    stock: 150,
    img: "https://picsum.photos/580/600",
    category: "iPhone",
    
    },);

    console.log("Document written with ID: ", docRef.id);

}

export async function exportProductsToDB(){
    for (let item of products) {
        delete item.id;
        const docID = addDoc(collection(db, "products"), item);
    }
}

export async function createBuyOrder(orderData){
    const newOrderDoc = await addDoc(collection(db, "orders"), orderData);
    return newOrderDoc.id;
}

// export async function exportProductsWithBatch(){
//     const batch = writeBatch(db);
//     products.forEach(item => {
//         const itemid = `${item.id}`;
//         delete item.id;
//         const newDoc = doc(db, "products", `item-${itemid}`);
//         batch.set(newDoc, item);
//     });

//     const commitRes = await batch.commit();
//     console.log("Commit de productos Completo",commitRes);
// }