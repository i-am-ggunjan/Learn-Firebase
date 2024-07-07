import React, { useEffect, useState } from 'react'
import { generateTokenByRequestPermission, onMessageListener } from './configs/firebase-config'

const App = () => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    generateTokenByRequestPermission();

    // Listen for foreground messages
    onMessageListener(setNotification);
  }, []);

  return (
    <div>

    </div>
  )
}

export default App;