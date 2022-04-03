import "./App.css";
import logo from "./Image/logo.png";
import banner from "./Image/banner.png";
import fb from "./Image/facebook.png";
import go from "./Image/google.png";
function App() {
  return (
    <div className="task">
      <div className="background">
        <img src={banner} alt="" />
      </div>
      <div className="loginCenter">
        <div className="Login">
          <img src={logo} alt="Logo" />
          <p className="logoText">Explore new courses... Hurry up!!</p>
          <input className="input" type="email" placeholder="Email Address" />
          <input className="input" type="password" placeholder="Password" />
          <p className="forgetText">Forget password?</p>
          <button>LOG IN</button>
          <span className="lineBreak"> or </span>
          <div className="social-icon">
            <div><img src={fb} alt="FB" /></div>
            <div><img src={go} alt="GO" /></div>
          </div>
          <p className="logoText">
            Don't have an account? <span className="linkText">Sing Up</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
