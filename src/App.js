import React, { useEffect, useState } from 'react'
import { generateTokenByRequestPermission, onMessageListener } from './configs/firebase-config'
import useOnlineStatus from './hooks/useOnlineStatus';

const App = () => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    generateTokenByRequestPermission();

    // Listen for foreground messages
    onMessageListener(setNotification);
  }, []);

  const onlineStatus = useOnlineStatus();

  return (
    <>
      <div>
        <h1>Online/Offline Status</h1>
        <p>User is {onlineStatus ? 'online' : 'offline'}</p>
      </div>
    </>
  )
}

export default App;