// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object

const firebaseConfig = {
    apiKey: "AIzaSyA4uViPid2hucbxnInu7KtwrVGcqP7i4cg",
    authDomain: "learn-firebase-bf1d6.firebaseapp.com",
    projectId: "learn-firebase-bf1d6",
    storageBucket: "learn-firebase-bf1d6.appspot.com",
    messagingSenderId: "752467610813",
    appId: "1:752467610813:web:1af56adaf8974ea11d7bd4",
    measurementId: "G-YXELJYFXE1"
};

firebase.initializeApp(firebaseConfig);
// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});