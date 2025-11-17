import axios from "axios";
import AccountTypeField from "./AccountTypeField";
import ConfirmPasswordField from "./ConfirmPasswordField";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import SubmitButton from "./SubmitButton";
import { useEffect, useState } from "react";
import FirstNameField from "./FirstNameField";
import LastNameField from "./LastNameField";
import { Navigate, useNavigate } from "react-router";

function checkPasswords(password, confirmation) {
  if (!password || !confirmation) {
    return {
      textColor: "",
      message: "",
      borderColor: "border-[#E0E0E0]",
    };
  }
  if (password === confirmation) {
    return {
      textColor: "text-[#28A745]",
      message: "Passwords match",
      borderColor: "border-[#28A745]",
    };
  }
  return {
    textColor: "text-[#DC3545]",
    message: "Passwords do not match",
    borderColor: "border-[#DC3545]",
  };
}

export default function Form() {
  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    // console.log(formVerification)
    // console.log(formValues);
    e.preventDefault();
    const values = Object.values(formVerification);
    if (values.some((value) => value === false)) {
      return;
    }
    const darnaData = {
      "first-name": formValues.firstName,
      "last-name": formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      role: formValues.accountType,
    };
    const tirelireData = {
      name: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirmPassword,
      role: formValues.accountType,
    };
    try {
      await axios.post("http://localhost:3000/api/auth/register", darnaData);
      await axios.post("http://localhost:3001/register", tirelireData);
      Navigate("/login", {
        state: {
          message: `Accout : ${formValues.email} created successfully`,
        },
      });
    } catch (error) {
        console.error(error);
    }
  }; // try {

  // } catch (error) {}

  const [password, setPassword] = useState("");
  const [passwordVerification, setPasswordVerification] = useState("");
  const [formVerification, setFormVerification] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "User",
  });
  // verifyEmail(email);
  const { textColor, message, borderColor } = checkPasswords(
    password,
    passwordVerification
  );
  useEffect(() => {
    if (password && passwordVerification && password === passwordVerification) {
      setFormVerification((prev) => ({
        ...prev,
        password: true,
        confirmPassword: true,
      }));
      setFormValues((prev) => ({
        ...prev,
        confirmPassword: passwordVerification,
        password: password,
      }));
      return;
    }
    setFormVerification((prev) => ({
      ...prev,
      password: false,
      confirmPassword: false,
    }));
    return;
  }, [password, passwordVerification]);
  //   console.log(formVerification)
  //   console.log("formrendereded ");

  //   console.log(borderColor);
  return (
    <form
      id="registerForm"
      className="space-y-4"
      onSubmit={(e) => {
        handleSubmit(e, formVerification);
      }}
    >
      <FirstNameField
        setFormVerification={setFormVerification}
        setFormValues={setFormValues}
      />
      <LastNameField
        setFormVerification={setFormVerification}
        setFormValues={setFormValues}
      />
      <EmailField
        setFormVerification={setFormVerification}
        setFormValues={setFormValues}
      />

      <PasswordField onChange={setPassword} borderColor={borderColor} />

      <ConfirmPasswordField
        onChange={setPasswordVerification}
        borderColor={borderColor}
      />

      <span className={`text-sm font-medium ${textColor}`}>{message}</span>

      <AccountTypeField setFormValues={setFormValues} />
      <SubmitButton />
    </form>
  );
}
