import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Login.css';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';


// interface TextNode {
//   name: string;
//   email: string;
// }

firebase.initializeApp(firebaseConfig);

const Login = (props: any) => {
  
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [users, setUser] = useState<any>({
    name: '',
    email: '',
    img: ''
  });

  console.log(users);
  console.log(loggedInUser);
  const history = useHistory();
  const location = useLocation();
  let { from}: any = location.state || { from: { pathname: "/" } };


  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
      .then(data => {
        const { email, displayName, photoURL }: any = data.user;
        console.log(data.user);
        const setUserInfo = {
          name: displayName,
          email: email,
          img: photoURL
        }
        setUser(setUserInfo);
        setLoggedInUser(setUserInfo);
        history.replace(from);
      })
      .catch(error => {
        console.log(error);
      })
    
  }


  const handleClick = () => {
    history.push("/chatbody")
  }


  return (
    <div className="login">
      <div className="btn-container">
        <img
          onClick={handleClick}
          src="https://i.ibb.co/sbLh8NG/Whats-App-Logo-700x394.png"
          alt=""
        />
        <p></p>
      </div>
    </div>
  );
};

export default Login;