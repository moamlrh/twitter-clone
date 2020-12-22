import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { Twitter } from "@material-ui/icons";
import React, { useState } from "react";
import "./SignupPage.css";

//const text = document.querySelector("input");
//const btn = document.querySelector("button");
const AllDateType = {
  month: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "September",
    "October",
    "November",
    "December",
  ],
  day: () => {
    const arr = [];
    for (let i = 1; i <= 30; i++) {
      arr.push(i);
    }
    return arr;
  },
  year: () => {
    const arr = [];
    for (let i = 1900; i <= 2020; i++) {
      arr.push(i);
    }
    return arr;
  },
};
function SignupPage() {
  const width = window.innerWidth <= 500;
  const [open, setOpen] = useState();
  const [emailOrPhone, setEmailOrPhone] = useState();
  const [date, setDate] = useState({ month: "", day: "", year: "" });
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleSubmitInfo = (e) => {
    e.preventDefault();
    // auth.createUserWithEmailAndPassword(values.email, values.pass);
  };

  const dialgo = (
    <div className="signup-page">
      <Dialog
        className="signup-dialog"
        open={open}
        onClose={() => setOpen(!open)}
        fullWidth={width ? true : false}
        fullScreen={width ? true : false}
      >
        <form onSubmit={handleSubmitInfo}>
          <DialogTitle className="signup-dialog-header">
            <div className="signup-header">
              <Twitter className="signup-header-icon" />
              <Button
                className="header-btn-nex"
                variant="outlined"
                type="submit"
              >
                Next
              </Button>
            </div>
          </DialogTitle>
          <DialogContent className="signup-dialog-content">
            <div className="signup-contetn">
              <h3>Create your account</h3>
              <TextField
                className="input-name-dialog input"
                label="Name"
                margin="normal"
                value={values.name}
                onChange={(event) =>
                  setValues({ ...values, name: event.target.value })
                }
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
              {emailOrPhone ? (
                <TextField
                  className="input-email-dialog input-signup"
                  label="Email"
                  type="email"
                  margin="normal"
                  value={values.email}
                  onChange={(event) =>
                    setValues({ ...values, email: event.target.value })
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
              ) : (
                <TextField
                  className="input-phone-dialog input-signup"
                  label="Phone"
                  margin="normal"
                  value={values.phone}
                  onChange={(event) =>
                    setValues({ ...values, phone: event.target.value })
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
              )}
              <span
                className="use-insted-text"
                onClick={() => setEmailOrPhone(!emailOrPhone)}
              >
                Use {emailOrPhone ? "email" : "phone"} insted
              </span>
              <div className="content-date">
                <h4>Date of birth</h4>
                <span>
                  This will not be shown publicly. Confirm your own age, even if
                  this account is for a business, a pet, or something else.
                </span>
                <div className="date-input">
                  <TextField
                    select
                    className="select-month"
                    fullWidth
                    label="Month"
                    value={date.month}
                    onChange={(event) =>
                      setDate({ ...date, month: event.target.value })
                    }
                    variant="filled"
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value="" />
                    {AllDateType.month.map((option) => (
                      <option className="options" key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </TextField>
                  <TextField
                    className="select-day"
                    select
                    label="Day"
                    value={date.day}
                    onChange={(event) =>
                      setDate({ ...date, day: event.target.value })
                    }
                    variant="filled"
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {AllDateType.day()
                      .reverse()
                      .map((option) => (
                        <option className="options" key={option} value={option}>
                          {option}
                        </option>
                      ))}
                  </TextField>
                  <TextField
                    select
                    label="Year"
                    className="select-year"
                    value={date.year}
                    onChange={(event) =>
                      setDate({ ...date, year: event.target.value })
                    }
                    variant="filled"
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {AllDateType.year()
                      .reverse()
                      .map((option) => (
                        <option className="options" key={option} value={option}>
                          {option}
                        </option>
                      ))}
                  </TextField>
                </div>
                {/* <div className="signup-with-provider">
                  <SignupWithProvider />
                </div> */}
              </div>
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );

  return {
    dialgo,
  };
}

export default SignupPage;
