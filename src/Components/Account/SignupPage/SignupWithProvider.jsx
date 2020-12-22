import { Button } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, googleProvider } from "../../../firebase/config";
import { signupCase } from "../../../Redux/User/UserActions";
import { useCookies } from "react-cookie";

function SignupWithProvider({ sigupCaseDis }) {
  const setCookie = useCookies(["user"])[1];
  const history = useHistory();

  const handleSigupWithGoogle = async () => {
    const { user } = await auth.signInWithPopup(googleProvider);
    try {
      sigupCaseDis(user);
      setCookie("user", JSON.stringify(user), {
        path: "/",
        maxAge: 1000000,
      });
      history.push("/");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Button
      onClick={handleSigupWithGoogle}
      className="btn-with-google"
      variant="outlined"
    >
      Signup with Google
    </Button>
  );
}
const mapDispatch = (dispatch) => ({
  sigupCaseDis: (user) => dispatch(signupCase(user)),
});

export default connect(null, mapDispatch)(SignupWithProvider);
