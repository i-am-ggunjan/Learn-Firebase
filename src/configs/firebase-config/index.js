// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getMessaging, getToken, onMessage } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4uViPid2hucbxnInu7KtwrVGcqP7i4cg",
    authDomain: "learn-firebase-bf1d6.firebaseapp.com",
    projectId: "learn-firebase-bf1d6",
    storageBucket: "learn-firebase-bf1d6.appspot.com",
    messagingSenderId: "752467610813",
    appId: "1:752467610813:web:1af56adaf8974ea11d7bd4",
    measurementId: "G-YXELJYFXE1"
};

//! Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = getMessaging(app);


export const generateTokenByRequestPermission = async () => {
    console.log('Requesting permission...');

    try {
        const permission = await Notification.requestPermission()

        if (permission === 'granted') {
            console.log('Notification permission granted.');
            const fcm_token = await getToken(messaging, { vapidKey: "BOvqqsAL-WkfWyfhcYFVmbimAEwSvHz6Biv-KcJ9uHnDxaivBSs10ig78fhX2nSKkJbpQO522HQ5qFbLyXRN1m0" });
            console.log('FCM Token', fcm_token)

        } else if (permission === 'denied') {
            console.log('Notification permission denied.');
        }
    } catch (error) {
        console.log(error)
    }
}

// Handle foreground messages
export const onMessageListener = (setNotification) => {
    onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);
        setNotification({
            title: payload.notification.title,
            body: payload.notification.body,
        });
    });
};