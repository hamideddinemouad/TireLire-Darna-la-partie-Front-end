import { useState } from "react";
import EmailField from "./components/EmailField";
import PasswordField from "./components/PasswordField";
import SigninButton from "./components/SigninButton";
import axios from "axios";

export default function Form() {
  const [checkEmail, setCheckEmail] = useState("");
  const [LoginStatus, setLoginStatus] = useState("");

  const emailValidity = () => {
    if (!checkEmail) {
      return "empty";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(checkEmail)) {
      return true;
    }
    if (!emailRegex.test(checkEmail)) {
      return false;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    try {
      await axios.post("http://localhost:3000/api/auth/login", data, {
        withCredentials: true,
      });
      await axios.post("http://localhost:3001/login", data, {
        withCredentials: true,
      });
      setLoginStatus("connected");
    } catch (error) {
      if (error.response) {
        setLoginStatus(error.response.data.error);
      } else if (error.request) {
        setLoginStatus("Server unresponsive");
      } else {
        setLoginStatus("Server unresponsive axios err");
      }
    }
  };

  return (
    <form id="loginForm" className="space-y-4" onSubmit={handleSubmit}>
      <EmailField onBlur={setCheckEmail} valid={emailValidity()} />
      <PasswordField />
      <SigninButton />
      <span className="text-sm font-medium text-[#DC3545]">{LoginStatus}</span>
    </form>
  );
}
