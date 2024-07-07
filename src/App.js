import React, { useEffect, useState } from 'react'
import { generateTokenByRequestPermission, onMessageListener } from './configs/firebase-config'

const App = () => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    generateTokenByRequestPermission();

    // Listen for foreground messages
    onMessageListener(setNotification);
  }, []);

  function checkOnlineStatus() {
    const isOnline = navigator.onLine;
    console.log('User online status:', isOnline);
  }

  // Example usage
  checkOnlineStatus();

  return (
    <div>

    </div>
  )
}

export default App;