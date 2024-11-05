import './login.css';

const LoginSignup = () => {
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">
                    Already Have an Account? 
                    <span className="login-link"> Login Here</span>
                </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" id="terms-checkbox" />
                    <label htmlFor="terms-checkbox">
                        By continuing, I agree to the Terms of Use and Privacy Policy
                    </label>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
