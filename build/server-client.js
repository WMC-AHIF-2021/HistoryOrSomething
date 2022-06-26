var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, updateDoc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
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
// collection ref
const colRef = collection(db, "quizes");
let auth = getAuth();
export class Server {
    constructor() {
        this.db = getFirestore();
    }
    test() {
        console.log("database function working!");
    }
    // Log in User
    loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let returnValue = { success: false, message: "", data: {} };
            auth = getAuth();
            try {
                const userCred = yield signInWithEmailAndPassword(auth, email, password);
                if (userCred) {
                    try {
                        returnValue.data = yield this.getData("users", userCred.user.uid);
                        Server.userLogged = true;
                    }
                    catch (error) {
                    }
                    Server.id = userCred.user.uid;
                    console.log(Server.id);
                    returnValue.success = true;
                    Server.userData = returnValue.data;
                    window.localStorage.setItem("checkAuth", "0");
                }
            }
            catch (error) {
                returnValue.message = error.message;
            }
            return returnValue;
        });
    }
    // Sign out User
    logoutUser() {
        return __awaiter(this, void 0, void 0, function* () {
            let success = false;
            const value = yield signOut(auth).then(() => {
                Server.userLogged = true;
                success = true;
                return success;
            });
            if (value == true) {
                auth = null;
            }
            console.log(value);
            return success;
        });
    }
    // Check user Auth
    checkUserAuth() {
        if (auth != null) {
            return true;
        }
        return false;
    }
    signUpUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let returnValue = { success: false, message: "", data: {} };
            auth = getAuth();
            try {
                const userCred = yield createUserWithEmailAndPassword(auth, email, password);
                let id = userCred.user.uid;
                if (userCred) {
                    try {
                        yield this.setNewDoc(id);
                        try {
                            returnValue.data = yield this.getData("users", id);
                        }
                        catch (error) {
                        }
                        returnValue.success = true;
                    }
                    catch (error) {
                        returnValue.message = error.message;
                    }
                }
            }
            catch (error) {
                returnValue.message = error.message;
            }
            return returnValue;
        });
    }
    //Creates a new user document => Working
    setNewDoc(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let success = false;
            try {
                yield setDoc(doc(db, "users", id), {
                    score: 100,
                    id: id,
                    tickets: 9,
                    countryName: ["uk", "france", "japan", "germany"],
                    countryState: [true, false, false, false],
                });
                success = true;
            }
            catch (error) {
                console.log(error);
                return false;
            }
            return success;
        });
    }
    getData(path, id) {
        return __awaiter(this, void 0, void 0, function* () {
            //const colRef = collection(db, path);
            const docRef = doc(db, path, id);
            let test = [];
            try {
                const snapshot = yield getDoc(docRef);
                test = snapshot.data();
            }
            catch (e) {
                console.log(e);
            }
            // try{
            //     const snapshot: QuerySnapshot<any> = await getDocs(colRef);
            //     test = [];
            //     snapshot.docs.map((doc) => {
            //         test.push({...doc.data()});
            //     });
            // }catch(e){
            //     console.log(e);
            // }
            return test;
        });
    }
    updateScore(score, path) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getData("users", window.localStorage.getItem("userId"));
            const docRef = doc(db, path, window.localStorage.getItem("userId"));
            const updated = yield updateDoc(docRef, {
                score: data.score + score,
                tickets: data.tickets - 1,
            }).then(() => {
                return true;
            });
            console.log(updated);
            return updated;
        });
    }
    buyTicket(currentScore, points, currentTickets, tickets, path) {
        return __awaiter(this, void 0, void 0, function* () {
            const docRef = doc(db, path, window.localStorage.getItem("userId"));
            const updated = yield updateDoc(docRef, {
                score: currentScore - points,
                tickets: currentTickets + tickets,
            }).then(() => {
                return true;
            });
            console.log(updated);
            return updated;
        });
    }
    buyCountry(currentPoints, points, newCountryState, path) {
        return __awaiter(this, void 0, void 0, function* () {
            const docRef = doc(db, path, window.localStorage.getItem("userId"));
            const updated = yield updateDoc(docRef, {
                countryState: newCountryState,
                score: currentPoints - points,
            }).then(() => {
                return true;
            });
            return updated;
        });
    }
    updateMode(mode, path) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getData("users", window.localStorage.getItem("userId"));
            const docRef = doc(db, path, window.localStorage.getItem("userId"));
            const updated = yield updateDoc(docRef, {
                mode: mode
            }).then(() => {
                return true;
            });
            return updated;
        });
    }
}
Server.id = "";
Server.userData = {};
Server.userLogged = false;
/*
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
})*/
//# sourceMappingURL=server-client.js.map