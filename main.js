// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbjc6dGaXK4ZLYJQXRcerXJj9Cfdv2jbY",
    authDomain: "dezors-65942.firebaseapp.com",
    projectId: "dezors-65942",
    storageBucket: "dezors-65942.firebasestorage.app",
    messagingSenderId: "299739461462",
    appId: "1:299739461462:web:596060f565772bc87948f7",
    measurementId: "G-WRRR9YPXY8",
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Handle form submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way
  
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Add data to Firestore
      db.collection('contacts').add({
          name: name,
          email: email,
          message: message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
          alert('Message sent successfully!');
          document.getElementById('contactForm').reset(); // Reset the form
      })
      .catch((error) => {
          console.error('Error adding document: ', error);
          alert('An error occurred. Please try again.');
      });
  });