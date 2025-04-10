const firebaseConfig = {
    apiKey: "AIzaSyDNSmnKjRhqr_kmuIrmaPkljqkgW3z2_iI",
    authDomain: "hoaa-771e0.firebaseapp.com",
    projectId: "hoaa-771e0",
    storageBucket: "hoaa-771e0.firebasestorage.app",
    messagingSenderId: "219254576047",
    appId: "1:219254576047:web:d8894cd677df38df94555a",
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();