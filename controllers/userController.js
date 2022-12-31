import { dbRef, database, auth } from '../dataAccess/firebaseConfig.js';
import { ref, set, push, child, remove, get, onChildAdded, onChildChanged, onChildRemoved } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const signUp = async function (req, res) {
  const { password, email, username, photoUrl } = req.body;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userId = ref(database, user.uid);
      const userAuth = auth.currentUser;
      updateProfile(user, {
        displayName: username,
        photoURL: photoUrl
      })
      const data = {
        "password": password,
        "username": username,
        "email": email,
        "photoUrl": photoUrl
      }

      set(userId, data);
      res.send("A new user added!");
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.send(errorCode + " " + errorMessage);
    });
}

export const signIn = async function(req,res){
  const{password, email, username, photoUrl} = req.body;
  signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    res.send("Succesfuly logged in!");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    res.send("Erorr Code: " + errorCode + " " + "Error Message: " + errorMessage);
  });
}

//export const createUser =  async function(req,res){
//  const {password, username} = req.body;
//     const data = {
//         "password":password,
//         "username":username
//     }
//
//     const userId = push(ref(database, "Users"));
//     set(userId, data);
//     res.send("A user added");
// }

// export const deleteUser = function(req,res){
//     remove(ref(database, `Users/${req.params.id}`));
//     res.send("A user deleted");
// }

// export const getUserById = function(req,res){
//     get(child(dbRef, `Users/${req.params.id}`)).then(snapshot => {
//        res.json(snapshot.val());
//     })
// }

// export const getAllUsers = async function(req,res){
//     get(child(dbRef, "Users/")).then(snapshot => {
//         res.send(snapshot.val());
//       });
// }