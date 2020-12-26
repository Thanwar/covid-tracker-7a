importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js");

firebase.initializeApp(
    {
        apiKey: "AIzaSyD1OE22Ip5iqaZSahsRbGOPKs9HDDRQe1Y",
        authDomain: "thanwar-covid-tracker.firebaseapp.com",
        projectId: "thanwar-covid-tracker",
        storageBucket: "thanwar-covid-tracker.appspot.com",
        messagingSenderId: "377005920701",
        appId: "1:377005920701:web:9fcaa840dc67c7a896c2d4"
    }
);

firebase.messaging();