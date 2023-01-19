import { dbRef, database, auth } from '../dataAccess/firebaseConfig.js';
import { ref, set, push, child, remove, get, onChildAdded, onChildChanged, onChildRemoved } from 'firebase/database';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { uuidv4 } from '@firebase/util';

export const sendMessage = async function (req, res) {
    
    try {
        const user = getAuth();
        const messageId = uuidv4();
        const senderMail = user.currentUser.email;
        const message = req.body;
        const messageCreationTime = Date.now();
        const data = {
            messageId: messageId,
            senderMail: senderMail,
            message: message,
            messageCreationTime: messageCreationTime
        };

        const messageDbPath = ref(database, 'messages/' + messageId);
        set(messageDbPath, data);
        res.send("Message succesfuly sent");
    } catch (error) {
        res.send(400, { message: "User is invalid!" });
    }

    //message id - sender id - message - message creation time 
}

export const getMessages = async function (req, res) {
    get(child(dbRef, "messages/")).then(snapshot => {
        res.send(snapshot.val());
    });
}

export const getMessageById = function (req, res) {
    get(child(dbRef, `messages/${req.params.id}`)).then(snapshot => {
        res.json(snapshot.val());
    })
}

//ATTENTION! *WIP*