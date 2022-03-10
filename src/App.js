/* Importation des fichiers nécessaires */

import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

import ReactTooltip from "react-tooltip";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

/* Connection du firebase au projet */

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

  return (
    <div className="App">
      <Site />
      <Bulles />
    </div>
  );
}

class Site extends React.Component {
/* Cette fonction affiche le UI du Prototype ou le UI de la Présentation
Cela depend de l'interaction */
  constructor(props){
    super(props)
    this.state = {
      /* L'état de base est faux */
     isOnPrototype: false
    }
 
    /* Nécessaire pour permette de faire des interactions avec des class */
    this.toggleState = this.toggleState.bind(this);
  }
    
  toggleState() {
  this.setState ({
    /* Change le status pour l'inverse de ce qu'il est présentement */
   isOnPrototype:!this.state.isOnPrototype }
  )
 } 

  render(){
   if(this.state.isOnPrototype){
     /* Si isOnPrototype est true, alors on affiche la fonction prototype, qui affiche le prototype */
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
     /* Si isOnPrototype est false, alors on affiche la fonction présentation, qui affiche la présentation */
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

/* Notre générateur de bulles */
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
      /* Ici, c'est le même concept qu'avec le changement entre la présentation et le prototype, mais cette fois-ci avec des lightbox */
     isOnLightbox: false,
     /* Ce numéro est important afin de traquer dans quelle div l'utilisateur a cliqué. Le contenu généré va ainsi dépendre */
     NumberText: 0
    }
 
    this.toggleState = this.toggleState.bind(this);
  }
    
  toggleState() {
  this.setState ({
     /* Change le status pour l'inverse de ce qu'il est présentement */
   isOnLightbox:!this.state.isOnLightbox 
  })
 } 

 render() {
    /* Les textes et les titres sont gérées ici. Changer le texte et le contenu changera aussi */
  const texte = ["React.js est une librairie Javascript qui offre beaucoup de possibilités afin de créer multiple interactions du côté client. On peut afficher du contenu dans certaines conditions aussi.", 
  "Firebase est une base de données gratuite et en ligne. Il est très facile de connecter Firebase avec React.js et de créer du contenu qui est géré en back-end.", 
  "Codecademy est un site web qui offre des cours d'apprentissage autonome, gratuit et avec instructions sur des langages de programmation, telles que le Javascript et React.Js. C'est comme ça que j'ai ainsi appris à pouvoir lire et écrire du React."]
  const titre = ["Avec React.js", "Avec Firebase", "Appris sur Codecademy"]

  /* Sélectionne le texte à afficher, basé sur le NumberText d'en haut */
  const textelire = texte[this.state.NumberText]
  const titrelire = titre[this.state.NumberText]

  if(this.state.isOnLightbox) {
    /* Si isOnLightbox est true, on affiche le contenu avec lightbox */
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
        <h1>{titre[0]}</h1>
    </div>
    <div id = "bloc2" className="bullesection">
        <h1>{titre[1]}</h1>
    </div>
    <div id = "bloc3" className="bullesection">
        <h1>{titre[2]}</h1>
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
        /* Cliquer sur une bulle spécifique de la section va changer cette variable et ainsi générer le contenu
        basé sur ce qui a été cliqué */
        this.toggleState();
        this.setState ({
          NumberText: 0
        })}}
        >
          <h1>{titre[0]}</h1>
      </div>
      <div id = "bloc2" className="bullesection" data-tip="Cliquez pour plus de détail!" onClick={() => {
        this.toggleState();
        this.setState ({
          NumberText: 1
        })}} >
          <h1>{titre[1]}</h1>
      </div>
      <div id = "bloc3" className="bullesection" data-tip="Cliquez pour plus de détail!" onClick={() => {
        this.toggleState();
        this.setState ({
          NumberText: 2
        })}}>
          <h1>{titre[2]}</h1>
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
    /* Si on est connecté, on affiche le ChatRoom, sinon on affiche le SignIn */
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
    /* Permet de se connecter avec google sur notre firebase */
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
  /* Permet de déconnecter du compte google */
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

   /* On prends les messages de notre collection et on les limite aux 50 derniers, basé sur leur temps d'envoi */
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limitToLast(50);
  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
/* On cherche le texte du form, le temps d'envoi, l'uid et l'url de la photo google de celui qui envoie un */
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
    /* C'est ici que tous les messages se retournent en forme de array */
    /* La fonction qui envoie des messages s'activent quand on appuie sur le bouton */
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

/* L'array se transforme en blocs de div séparés et ainsi sont lus*/
function ChatMessage(props) {
  const { text, uid, photoURL} = props.message;

  /* Si c'est nous qui envoyons un message, on ajoute la classe sent, sinon, on ajoute la classe received */
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  // const DeleteMessage = firestore.collection('messages').doc('RAoTYP5A99uEfvmYc0dp').delete()

  return (</* Le contenu est finalement lu dans le site */>
  
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)

}


export default App;
