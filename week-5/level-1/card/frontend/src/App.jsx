import { Fragment, useState, useEffect } from 'react';
import './App.css'
import Card from './components/Card/Card';
import UserInfo from './components/User/UserInfo';

function App() {
  const [userInfoData, setUserInfoData] = useState([]);

  async function fetchUserData() {
    const response = await fetch('http://localhost:3000/cards');
    if (response.ok) {
      const data = await response.json();
      setUserInfoData(data);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Fragment>
      <UserInfo getLatestUserData={fetchUserData}/>
      <Card getLatestUserData={fetchUserData} usersInfo={userInfoData} ></Card>
    </Fragment>
  )
};

export default App;
