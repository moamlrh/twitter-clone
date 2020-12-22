import React, { useEffect } from "react";
import "./SigninPage.css";
import SearchIcon from "@material-ui/icons/Search";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ModeCommentRoundedIcon from "@material-ui/icons/ModeCommentRounded";
import { Button, TextField } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useHistory } from "react-router-dom";
import SignupPage from "../SignupPage/SignupPage";
import SignupWithProvider from "../SignupPage/SignupWithProvider";
import { connect } from "react-redux";
import { auth } from "../../../firebase/config";

function SigninPage({ loadingState }) {
  const { dialgo } = SignupPage();
  const history = useHistory();
  useEffect(() => {
    if (auth.currentUser) {
      document
        .querySelector(".MuiFormHelperText-root")
        .addEventListener("click", () => {
          history.push("/account/begin_password_reset");
        });
    }
  }, [history, loadingState]);
  return (
    <>
      <div className="signin-page">
        <div className="login-left-side">
          <div className="left-side-info">
            <div>
              <h3>
                <span>
                  <SearchIcon className="login-info-icons" />
                </span>
                Follow your intersts
              </h3>
              <h3>
                <span>
                  <SupervisorAccountIcon className="login-info-icons" />
                </span>
                Hear what people are talking
              </h3>
              <h3>
                <span>
                  <ModeCommentRoundedIcon className="login-info-icons" />
                </span>
                Created by <a className="moaml-link" target="__blank"  href="http://www.twitter.com/moamlrh">Moaml RH. Js</a>
              </h3>
            </div>
          </div>
          <div className="right-side-footer-btn">
            <Button className="signin-footer" variant="outlined">
              Sign up
            </Button>
            <Button
              className="signup-footer"
              variant="outlined"
              onClick={() => history.push("/login")}
            >
              Log in
            </Button>
          </div>
        </div>
        <div className="login-right-side">
          <div className="right-side-inputs">
            <TextField
              className="input-email input"
              label="Phone, email, or username"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
            <div className="inputs-password">
              <TextField
                className="input-pass input"
                label="Password"
                helperText="Forget Password?"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
            </div>
            <Button variant="outlined" className="login-btn">
              Login
            </Button>
          </div>
          <div className="right-side-happen-container">
            <div className="right-side-happen">
              <TwitterIcon className="logo" />
              <p>See what’s happening in the world right now</p>
              <h5>Join Twitter today.</h5>
              <div className="happen-buttons">
                <Button className="signin" variant="outlined">
                  Sign up
                </Button>
                <Button
                  className="signup"
                  variant="outlined"
                  onClick={() => history.push("/login")}
                >
                  Log in
                </Button>
              </div>
            </div>
          </div>
          <div className="signup-with-provider">
            <SignupWithProvider />
          </div>
        </div>
        {dialgo}
      </div>
    </>
  );
}

const mapState = (state) => ({
  loadingState: state.userStore.loading,
});

export default connect(mapState)(SigninPage);
