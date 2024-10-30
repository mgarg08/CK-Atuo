import { ReactComponent as CLoudkeeperLogo } from "../../assests/Logo.svg";
import { ReactComponent as Login } from "../../assests/Login.svg";
import {ReactComponent as Checkbox} from "../../assests/checkbox.svg";

export default function LoginForm() {
  return (
    <div className="login-section">
      <div className="form-wrapper">
        <div className="cloudkeeper-logo">
          <CLoudkeeperLogo />
        </div>

        <Login/>

        <form className="login-form">
          <div className="form-group">
            <label>Email ID</label>
            <input type="email" placeholder="Business Email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>

          <div className="form-checked">
            <div className="checkbox-item">
              {/* <input type="checkbox" id="rememberMe" /> */}
              <Checkbox id="rememberMe"/>
              <label className="rememberMe" for="rememberMe">Remember me</label>
            </div>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="login-button">
            LOGIN
          </button>

          <div className="signup-link">
            Don't have an account? <a href="#">Sign up</a>
          </div>
        </form>
      </div>
      <footer className="form-footer">
        <div className="contact-section">
          Have questions? <a href="#">Talk to our team</a>
        </div>
        <div className="cloudkeeper-rights">CloudKeeper 2023 | All Rights Reserved</div>
      </footer>
    </div>
  );
}
