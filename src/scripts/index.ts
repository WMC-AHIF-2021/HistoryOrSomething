import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, query, where,
    addDoc, deleteDoc, doc, onSnapshot, orderBy,
    updateDoc} from "firebase/firestore"

import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCr7_Es7xBQzlXHejZukEr1ovanvYYo_Z4",
    authDomain: "historyorsomething-9.firebaseapp.com",
    projectId: "historyorsomething-9",
    storageBucket: "historyorsomething-9.appspot.com",
    messagingSenderId: "603241360494",
    appId: "1:603241360494:web:90f27fa38c0b46fecd4a7f"
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

export class Server {
    public getDatabase():any {
        return db;
    }

    public test(): void {
        console.log("database function working!");
    }
}

// collection ref
const colRef = collection(db, "quizes");

// queries
const q = query(colRef,
    where("type", "==", "multiple choice"),
    orderBy('question', 'desc'));

// get real time collection data
onSnapshot(q, (snapshot) => {
    let quizes = [];
    snapshot.docs.forEach((doc) => {
        quizes.push({...doc.data(), id: doc.id});
    })
    console.log(quizes);
})

// add documents
const addBookForm = document.querySelector('.add');
addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    addDoc(colRef, {
        question: (addBookForm as any).question.value,
        choice1: (addBookForm as any).choice1.value,
        choice2: (addBookForm as any).choice2.value,
        choice3: (addBookForm as any).choice3.value,
        choice4: (addBookForm as any).choice4.value,
        type: (addBookForm as any).type.value,
    })
        .then(() => {
            (addBookForm as any).reset();
        })
})

// deleting documents
const deleteBookForm  = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const docRef = doc(db, "quizes", (deleteBookForm as any).id.value);

    deleteDoc(docRef)
        .then(() => {
            (deleteBookForm as any).reset();
        })
})

// updating documents
const updateForm  = document.querySelector(".update");
updateForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const docRef = doc(db, "quizes", (updateForm as any).id.value);

    updateDoc(docRef, {
        type: "multiple choice"
    })
        .then(() => {
            console.log("updated");
        })
})


// signup user
const signup  = document.querySelector(".signup");
signup.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = (signup as any).email.value;
    const password = (signup as any).password.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            (db as any).collection("users").doc(cred.user.uid).set({
                score: 1
            })
                .then(() => {
                    console.log("doc success");
                });
            //setDoc(doc(db, "/users", cred.user.uid), {score: 0})


            console.log('user created: ', cred.user);
            (signup as any).reset();
        })
        .catch((err) => console.log(err.message));
})

// get a single document

const docRef = doc(db, "quizes", 'KCh33HQ9tIPrp1tOqSuZ');

onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id);
})

//logging in and out
const logoutButton = document.querySelector(".logout")
logoutButton.addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            console.log("the user signed out");
        })
        .catch((err) => console.log(err.message))
});


const loginForm = document.querySelector(".login")
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = (loginForm as any).email.value;
    const password = (loginForm as any).password.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log("user logged in: ", cred.user)
        })
        .catch((err) => console.log(err.message))
})