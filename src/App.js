import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCc56Iksic3DyqOSsKhF-8l1EXRh-cF8SY",
  authDomain: "youkhatvfour.firebaseapp.com",
  projectId: "youkhatvfour",
  storageBucket: "youkhatvfour.appspot.com",
  messagingSenderId: "1012311611964",
  appId: "1:1012311611964:web:16de4b315e4127e8dd0139",
  measurementId: "G-N5Z5SMPMY4"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {
 const OnPrototype = true;
  return (
    <div className="App">
        {OnPrototype ? <Prototype /> : <Presentation />}
    </div>
  );
}

function Presentation() {
  return (
  <div className="Intro">
    <div id="background-wrap">
        <div class="bubble x1"></div>
        <div class="bubble x2"></div>
        <div class="bubble x3"></div>
        <div class="bubble x4"></div>
        <div class="bubble x5"></div>
        <div class="bubble x6"></div>
        <div class="bubble x7"></div>
        <div class="bubble x8"></div>
        <div class="bubble x9"></div>
        <div class="bubble x10"></div>
    </div>
    <nav>
    <h1>Bienvenue!</h1>  
    <div className="bulle"><h1><a>YouKhAt</a></h1></div> 
    </nav>
<section>
    <div id = "bloc1" className="bullesection">
        <h1>Avec React.js</h1>
    </div>
    <div id = "bloc2" className="bullesection">
        <h1>Avec une base de données</h1>
    </div>
    <div id = "bloc3" className="bullesection">
        <h1>Appris sur codeacadamy</h1>
    </div>
</section>
</div>
  )
}

function Prototype() {
  const [user] = useAuthState(auth);
 return (
  <div className="Prototype">
        <div id="background-wrap">
        <div class="bubble x1"></div>
        <div class="bubble x2"></div>
        <div class="bubble x3"></div>
        <div class="bubble x4"></div>
        <div class="bubble x5"></div>
        <div class="bubble x6"></div>
        <div class="bubble x7"></div>
        <div class="bubble x8"></div>
        <div class="bubble x9"></div>
        <div class="bubble x10"></div>
    </div>
  <header>
  <button>Retour au site</button>
    <h1>YouKhAt</h1>
    <SignOut />
  </header>
  {user ? <ChatRoom /> : <SignIn />}
</div>
 )
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
    <section>
      <button className="sign-in" onClick={signInWithGoogle}>Connecter avec Google</button>
    </section> 
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Déconnecter</button>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limitToLast(50);
  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Écrire votre message" />

      <button type="submit" disabled={!formValue}>Envoyer</button>

    </form>
    </section>
  )
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}


export default App;
