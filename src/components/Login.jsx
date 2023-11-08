import { useContext, useState } from "react";
import { LoginContext } from "../context/AppContexts";
import {useNavigate} from "react-router-dom"
import "./Login.scss";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const  {login , dispatchLogin} = useContext(LoginContext);
  const navigate = useNavigate();
  const [hideWarning, setHideWarning] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.text();
        }
      })
      .then((json) => {
        if (typeof json !== "string") {
            dispatchLogin({type: "loggedIn", token : json.token});
            navigate(-1)

        } else {
            setHideWarning(false);
        }

      })
      .catch((err) => console.log(err));
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignOut = () => {
    dispatchLogin ({type : "loggedOut"})
  }

  return (
    <>
    {!login.loggedIn ? 
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form" action="">
        <label htmlFor="username">Username:</label>
        <input onChange={handleUsernameChange} type="text" name="username" />
        <label htmlFor="password">Password:</label>
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
        />
        <p className="warning" hidden={hideWarning} >Username or Password Incorrect!!</p>
        <button className="login-button">Sign In</button>
      </form>
    </div> : <div className="sign-out-container"> <button  onClick={handleSignOut}  className="logout-button">Sign Out</button> </div>
}
    </>
  );
}
