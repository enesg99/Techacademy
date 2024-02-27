import { Fragment, useEffect, useState } from 'react';
import './Settings.css';

function Settings({ user }) {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedUserInfo, setSelectedUserInfo] = useState({});

  const deleteUser = async (id) => {
    try {
        const deletedUser = await fetch(`http://localhost:5001/data/${id}`, {
            method: "DELETE"
        })
        setUserData(prevUserData => prevUserData.filter(user => user.user_id !== id));
    } catch (err) {
        console.error(err.message)
    }
}

  const getUserData = async () => {
    try {
      const response = await fetch("http://localhost:5001/data");
      const jsonData = await response.json();
      setUserData(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSelect = async (event) => {
    const selectedUserName = event.target.value;
    setSelectedUser(selectedUserName);

    try {
      const response = await fetch(`http://localhost:5001/data/${selectedUserName}`);
      const jsonData = await response.json();
      setSelectedUserInfo(jsonData); // Setze die ausgewählten Benutzerinformationen
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return ( 
    <Fragment>
        <div className='settingContainer'>
            <label>Wähle den User aus:</label>
            <select onChange={handleSelect} value={selectedUser}>
                <option value="">Wer bist du?</option>
                {userData.map((user) => (
                <option key={user.user_id} value={user.user_name}>
                    {user.user_name}
                </option>
                ))}
            </select>
            <div className='userInformation'>
                {(
                <Fragment>
                    <div className='dataRows'>
                      <p>Name:</p>
                      <p>{selectedUserInfo.user_name}</p>
                    </div>
                    <div className='dataRows'>
                      <p>Ziel:</p>
                      <p>{selectedUserInfo.goal}</p>
                    </div>
                    <div className='dataRows'>
                      <p>Größe:</p>
                      <p>{selectedUserInfo.height_cm}</p>
                    </div>
                    <div className='dataRows'>
                      <p>Gewicht:</p>
                      <p>{selectedUserInfo.current_weight}</p>
                    </div>
                    <div className='dataRows'>
                      <p>Zielgewicht:</p>
                      <p>{selectedUserInfo.weight_goal}</p>
                    </div>
                    <div className='dataRows'>
                      <p>Geschlecht:</p>
                      <p>{selectedUserInfo.gender}</p>
                    </div>
                    <div className='btn-container'>
                      <button>Bearbeiten</button>
                      <button onClick={() => selectedUserInfo && deleteUser(selectedUserInfo.user_id)}>Delete</button>
                    </div>
                </Fragment>
                )}
            </div>
        </div>
    </Fragment>
  );
}

export default Settings;