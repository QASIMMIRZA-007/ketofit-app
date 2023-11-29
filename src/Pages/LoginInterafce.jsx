import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import './Login.css'

const initialLoginState = {
  mail: "",
  password: "",
  emailText: "",
  passwordError: "",
};

const initialSignupState = {
  mail: "",
  password: "",
  confirmPassword: "",
  emailText: "",
  passwordError: ""
};

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [successNote, setSuccessNote] = useState("");
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loginFormData, setLoginFormData] = useState(initialLoginState);
  const [signupFormData, setSignupFormData] = useState(initialSignupState);


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  const resetLoginForm = () => {
    setLoginFormData(initialLoginState);
  };

  const resetSignupForm = () => {
    setSignupFormData(initialSignupState);
  };

  const handleLogin = () => {
    if (loginFormData.mail.trim() === "" || loginFormData.password.length < 8) {
      setLoginFormData({
        ...loginFormData,
        emailText: "Email  is required",
        passwordError: "Your password must be at least 8 characters",
      });
    } else {
      setLoginFormData({ ...initialLoginState }); // Reset the form data
      resetLoginForm();
      setSuccessNote("Successfully logged in");
    }
  };

  const handleSignup = () => {
    if (
      signupFormData.mail.trim() === "" ||
      signupFormData.password !== signupFormData.confirmPassword ||
      signupFormData.password.length < 8
    ) {
      setSignupFormData({
        ...signupFormData,
        emailText: "Email  is required",
        passwordError: "New Password and Confirm Password do not match",
      });
    } else {
      setSignupFormData({ ...initialSignupState }); // Reset the form data
      resetSignupForm();
      setSuccessNote("Successfully signed up");
    }
  };

  const handleInputFeilds = (e, formType) => {
    const { name, value } = e.target;

    if (formType === "login") {
      setLoginFormData({
        ...loginFormData,
        [name]: value,
        emailText: "",
        passwordError: "",
        isMailValid:
          name === "mail" ? !!value.trim() : loginFormData.isMailValid,
        isPasswordValid:
          name === "password" ? !!value.trim() : loginFormData.isPasswordValid,
      });
    } else {
      setSignupFormData({
        ...signupFormData,
        [name]: value,
        emailText: "",
        passwordError: "",
      });
    }

    if (name === "confirmPassword" && formType === "signup") {
     if (signupFormData.password !== value) {
       setSignupFormData({
         ...signupFormData,
         passwordError: "New Password and Confirm Password do not match"
       });
     } else {
       setSignupFormData({ ...signupFormData, passwordError: "" });
     }
    }
  };

  useEffect(() => {
    if (successNote) {
      const timeoutId = setTimeout(() => {
        setSuccessNote("");
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [successNote]);

  return (
    <>
      {successNote && (
        <div className="success-note">
          <p>{successNote}</p>
        </div>
      )}

      <div className="form-container">
        <input type="checkbox" id="check" />

        <div className="login form">
          <h4 className="form-heading">Login</h4>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <div className="email-input">
              <input
                type="email"
                name="mail"
                placeholder="Enter your email"
                required
                value={loginFormData.mail}
                onChange={(e) => handleInputFeilds(e, "login")}
                className={loginFormData.isMailValid ? "" : "invalid-input"}
              />
            </div>
            {loginFormData.emailText && (
              <p className="passwordError">{loginFormData.emailText}</p>
            )}

            <div className="password-input">
              <input
                type={passwordVisible ? "text" : "password"}
                value={loginFormData.password}
                name="password"
                placeholder="Enter your password"
                required
                onChange={(e) => handleInputFeilds(e, "login")}
              />
              {passwordVisible ? (
                <AiFillEye
                  className="password-icon"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <AiFillEyeInvisible
                  className="password-icon"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
            <button className="btnX" onClick={handleLogin}>
              Log in
            </button>
          </form>
          <div className="signup">
            <span className="signup">
              Don't have an account?
              <label htmlFor="check">Signup</label>
            </span>
          </div>
        </div>

        <div className="registration form">
          <h4 className="form-heading">Signup</h4>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <div className="email-input">
              <input
                type="email"
                name="mail"
                placeholder="Enter your email"
                required
                value={signupFormData.mail}
                onChange={(e) => handleInputFeilds(e, "signup")}
                
              />
            </div>
            {signupFormData.emailText && (
              <p className="passwordError">{signupFormData.emailText}</p>
            )}

            <div className="password-input">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Create a password"
                required
                name="password"
                onChange={(e) => handleInputFeilds(e, "signup")}
                value={signupFormData.password}
              />
              {passwordVisible ? (
                <AiFillEye
                  className="password-icon"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <AiFillEyeInvisible
                  className="password-icon"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
            {signupFormData.passwordError && (
              <p className="passwordError">{signupFormData.passwordError}</p>
            )}
            <div className="password-input">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm your password"
                required
                name="confirmPassword"
                onChange={(e) => handleInputFeilds(e, "signup")}
                value={signupFormData.confirmPassword}
              />
              {confirmPasswordVisible ? (
                <AiFillEye
                  className="password-icon"
                  onClick={toggleConfirmPasswordVisibility}
                />
              ) : (
                <AiFillEyeInvisible
                  className="password-icon"
                  onClick={toggleConfirmPasswordVisibility}
                />
              )}
            </div>
            <button  className=' btnX'onClick={handleSignup}>Signup</button>
          </form>
          <div className="signup">
            <span className="signup">
              Already have an account?
              <label htmlFor="check">Login</label>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
