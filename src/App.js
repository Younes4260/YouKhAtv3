import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

import ReactTooltip from "react-tooltip";

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
 const OnPrototype = false;
  return (
    <div className="App">
      <Site />
      <Bulles />
    </div>
  );
}

class Site extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
     isOnPrototype: false
    }
 
    this.toggleState = this.toggleState.bind(this);
  }
    
  toggleState() {
  this.setState ({
   isOnPrototype:!this.state.isOnPrototype }
  )
 } 

  render(){
   if(this.state.isOnPrototype){
     return(
       <>
       <div id="BoutonToggle">
       <button data-tip="Cliquez ici pour retourner dans le site de présentation!" onClick={this.toggleState}>YouKhAt</button>
       <ReactTooltip globalEventOff="click" />
       </div>
     <Prototype />
     </>   
     )
     }
   else{
     return(
     <>
     <div id="BulleToggle">
      <div className="bulle" data-tip="Cliquez pour vous lancer dans le prototype!" onClick={this.toggleState}><h1>Clavardez!</h1></div>
      </div>
      <ReactTooltip globalEventOff="click" />
     <Presentation />
     </>
     )          
   }       
 }
}


function Bulles() {
  return (
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
  )
}

class Presentation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     isOnLightbox: false,
     NumberText: 0
    }
 
    this.toggleState = this.toggleState.bind(this);
  }
    
  toggleState() {
  this.setState ({
   isOnLightbox:!this.state.isOnLightbox 
  })
 } 

 render() {
  const texte = ["Ce truc a été fait avec React et c'est très cool", 
  "Firebase est trop fort utilisez-le!", 
  "CodeAcademy est nice aussi allez acheter!"]
  const titre = ["Avec React.js", "Avec Firebase", "Sur Codecademy"]
  const textelire = texte[this.state.NumberText]
  const titrelire = titre[this.state.NumberText]

  if(this.state.isOnLightbox) {
  return (
  <div className="Intro">
    <div className="backgroundlightbox">
    <div className="lightbox">
      <div className="Headerlightbox">
      <h2>{titrelire}</h2>
      <button onClick={this.toggleState}>X</button>
      </div>
      <div className="textcontainer">
      <p>{textelire}</p>
      </div>
    </div>
    </div>
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
  else {
    return (
      <div className="Intro">
  <section>
      <ReactTooltip globalEventOff="click" />
      <div id = "bloc1" className="bullesection" data-tip="Cliquez pour plus de détail!" onClick={() => {
        this.toggleState();
        this.setState ({
          NumberText: 0
        })}}
        >
          <h1>Avec React.js</h1>
      </div>
      <div id = "bloc2" className="bullesection" data-tip="Cliquez pour plus de détail!" onClick={() => {
        this.toggleState();
        this.setState ({
          NumberText: 1
        })}} >
          <h1>Avec une base de données</h1>
      </div>
      <div id = "bloc3" className="bullesection" data-tip="Cliquez pour plus de détail!" onClick={() => {
        this.toggleState();
        this.setState ({
          NumberText: 2
        })}}>
          <h1>Appris sur codeacadamy</h1>
      </div>
  </section>
  </div>
    )
  }
}
}

/* Prototype */

function Prototype() {
  const [user] = useAuthState(auth);
 return (
  <div className="Prototype">
  <header>
    <h1>YouKhAt</h1>
    <SignOut />
  </header>
  {user ? <ChatRoom /> : <SignIn />}
</div>
 )
}

/* Gestion de connection */

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
    <section>
      <button className="sign-in" data-tip="Cliquez ici pour vous connecter utilisant un compte Google" onClick={signInWithGoogle}>Connecter avec Google</button>
      <ReactTooltip globalEventOff="click" />
    </section> 
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <>
     <ReactTooltip globalEventOff="click" />
    <button className="sign-out" data-tip="Cliquez ici pour vous déconnecter" onClick={() => auth.signOut()}><p>Déconnecter</p></button>
    </>
  )
}


/* Gestion du clavardage */

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
      <input value={formValue} data-tip="Écrivez votre message à envoyer ici" onChange={(e) => setFormValue(e.target.value)} placeholder="Écrire votre message" />

      <button type="submit" data-tip="Cliquez ici pour envoyer votre message" disabled={!formValue}>Envoyer</button>
     
    </form>
    <ReactTooltip globalEventOff="click" />
    </section>
  )
}


function ChatMessage(props) {
  const { text, uid, photoURL} = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  // const DeleteMessage = firestore.collection('messages').doc('RAoTYP5A99uEfvmYc0dp').delete()

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)

}


export default App;
