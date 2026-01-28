import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/user/signup/",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true },
      );
        navigate("/home");
    } catch (error) {
      console.error("Signup error:", error.response?.data);
    }
  };

  return (
    <>
      <img
        className="background"
        src="../../public/images/backgroundimg.png"
        alt=""
      />
      <div className="Maindiv">
        <div className="Mainbgdiv">
          <img className="Mainbg" src="../../public/images/mainbg.png" alt="" />
        </div>
        <div className="Welcomediv2">
          <div className="welcome2">
            <h1>
              <span>Welcome To</span> <span>Barter!</span>
            </h1>
          </div>

          <div className="name">
            <h1 className="nametext">Name</h1>
            <div className="nameinput">
              <input
                className="inputbox2"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              ></input>
              <input
                className="inputbox2"
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              ></input>
            </div>
          </div>

          <div className="emaildiv2">
            <h1 className="emailtext2">Email</h1>
            <input
              className="inputbox"
              placeholder="eg. abc"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            ></input>
          </div>

          <div className="newpassworddiv">
            <h1 className="newpasswordtext">New Password</h1>
            <input
              className="inputbox"
              type="password"
              placeholder="eg. abc"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            ></input>
          </div>

          <div className="conpassworddiv">
            <h1 className="conpasswordtext">Confirm Password</h1>
            <input
              className="inputbox"
              type="password"
              placeholder="eg. abc"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            ></input>
          </div>

          <div
            className="signupdiv"
            onClick={handleSubmit}
            style={{ cursor: "pointer" }}
          >
            <h1 className="signup">Sign Up</h1>
          </div>
          <div className="alrdiv">
            <Link to="/" className="alreadyregistered">
              Already Registered?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
