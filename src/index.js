// FIREBASE
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD-qMcF26H5DPdtTNUUCyXBtt9T1vdaM6Y",
  authDomain: "mylinks-e0adc.firebaseapp.com",
  projectId: "mylinks-e0adc",
  storageBucket: "mylinks-e0adc.appspot.com",
  messagingSenderId: "158094508397",
  appId: "1:158094508397:web:23b5a2d03bab5a287fda64"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()

//signing users up
const emailExt = document.querySelector('#email')
const passwordExt = document.querySelector('#password')
const registerBtn = document.querySelector('#registerBtn')

registerBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const email = emailExt.value
  const password = passwordExt.value
  
  createUserWithEmailAndPassword(auth, email, password)
  .then((cred) => {
    window.location.href = '../src/links.html'
  })
  .catch((err) => {
    console.log(err.message)
    if(err.message = 'Firebase: Error (auth/email-already-in-use).'){
      window.location.href = '../src/links.html'
    } else{
      alert(err.message)
    }
  })
})
