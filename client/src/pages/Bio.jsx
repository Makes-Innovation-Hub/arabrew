import React from 'react';
import { sendUserDataToServer } from '../features/userDataApi';


const Bio = () => {
  const userData = useSelector((state) => state.userData);

  const handleSendData = () => {
    sendUserDataToServer(userData);
  };

  return (
    <>
      <div>Bio</div>
      <button onClick={handleSendData}>Save & Next</button>
    </>
  )
}

export default Bio;