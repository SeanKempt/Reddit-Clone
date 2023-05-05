import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyABJAFYoW3NEHthmy0naFTcDxnwFIoh6Jc',
  authDomain: 'seddit-aredditclone.firebaseapp.com',
  projectId: 'seddit-aredditclone',
  storageBucket: 'seddit-aredditclone.appspot.com',
  messagingSenderId: '365858772603',
  appId: '1:365858772603:web:75c60072d5ea2be51334de',
  measurementId: 'G-QV28X88XY6',
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  const auth = getAuth(app);
  signInWithPopup(auth, provider);
};

const signInRegular = (email, password) => {
  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;
      console.log(`${user} sign in successful!`);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('sign in failed for some reason.');
    });
};

const createUser = (email, password) => {
  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('sign in failed for some reason.');
    });
};

const signOutCurrentUser = () => {
  const auth = getAuth(app);
  signOut(auth)
    .then(() => {
      console.log('sign out successful');
    })
    .catch((error) => {
      console.log('something weird happened');
    });
};

// Returns an user object that is used to provide props to app component to provide user data to the application
const getCurrentSignedInUser = () =>
  new Promise((resolve, reject) => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is signed in
        const { displayName, email, photoURL } = user;
        resolve({
          name: displayName,
          emailaddress: email,
          profilepic: photoURL,
        });
      } else {
        // User is signed out
        reject(new Error('User is signed out!'));
      }
    });
  });

// const connectToEmulator = () => {
//   connectAuthEmulator(auth, 'http://localhost:9099');
// };

export {
  signInWithGoogle,
  signOutCurrentUser,
  getCurrentSignedInUser,
  signInRegular,
  createUser,
};
