import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
            <div className="login-container">
                <h1>Login</h1>
                <div className="login-fields">
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p className="login-login">
                    Don't have an account? 
                    <Link to='/signup' style = {{textDecoration:'none'}}><span className="sign-link"> Sign Up </span></Link>
                </p>
                <div className="login-agree">
                    <input type="checkbox" id="terms-checkbox" />
                    <label htmlFor="terms-checkbox">
                        By continuing, I agree to the Terms of Use and Privacy Policy
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Login;
