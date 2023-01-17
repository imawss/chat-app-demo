import { dbRef, database, auth } from '../dataAccess/firebaseConfig.js';
import { ref, set, push, child, remove, get, onChildAdded, onChildChanged, onChildRemoved } from 'firebase/database';
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from 'firebase/auth';

export const signUp = async function (req, res) {
  const { password, email, username } = req.body;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = getAuth();
      const userAuth = auth.currentUser;
      const userId = ref(database, user.uid);
      const userDbPath = ref(database, 'users/'+ userAuth.uid); 
      const data = {
        password: password,
        email: email,
        username:username,
      }
      set(userDbPath, data);
      updateProfile(user.currentUser, {
        displayName: username
      })
      res.send("A new user added!");
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.send(400, { message: "Error Code: " + errorCode + " " + "Error Message: " + errorMessage });
      //I need to add realtime db error handler for auth systems!
    });
}

export const signIn = async function (req, res) {
  const { password, email } = req.body;
  const authForLogin = getAuth();
  signInWithEmailAndPassword(authForLogin, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      res.send("Successfuly logged in!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.send(400, { message: "Error Code: " + errorCode + " " + "Error Message: " + errorMessage });
    });
}

export const getUserAuth = async function (req, res) {
  const checkedAuth = getAuth().currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      res.send("User is valid");
    }else{
      res.send(400, { message: "User is invalid!"});
    }
  });
}

export const getAllUsers = async function (req, res) {
  get(child(dbRef, "users/")).then(snapshot => {
    res.send(snapshot.val());
  });
}