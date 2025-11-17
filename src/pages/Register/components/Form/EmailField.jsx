import axios from "axios";
import { useEffect, useState } from "react";

async function alredyregistered(email) {
  try {
    await axios.post("http://localhost:3001/checkEmail", { email: email });
    await axios.post("http://localhost:3000/api/auth/checkemail", {
      email: email,
    });
    return true;
  } catch (error) {
    if (error.response && error.response.status === 409) {
      return false;
    }
    if (error.request) {
      return false;
    }
    if (error.message) {
      return false;
    }
    return false;
  }
}
async function verifyEmail(email) {
  if (!email) {
    return "empty";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    if (await alredyregistered(email)) {
      return true;
    }
    return "used";
  }
  if (!emailRegex.test(email)) {
    return false;
  }
}
async function userFeedback(email) {
  const status = await verifyEmail(email);
  const { fieldColor, message, messageColor, valid } =
    status === "empty"
      ? {
          fieldColor: "border-[#E0E0E0]",
          message: "",
          messageColor: "",
          valid: false,
        }
      : status === false
      ? {
          fieldColor: "border-[#DC3545]",
          message: "invalid email format",
          messageColor: "text-[#DC3545]",
          valid: false,
        }
      : status === true
      ? {
          fieldColor: "border-[#28A745]",
          message: "looks good",
          messageColor: "text-[#28A745]",
          valid: true,
        }
      : status === "used"
      ? {
          fieldColor: "border-[#DC3545]",
          message: "email already used",
          messageColor: "text-[#DC3545]",
          valid: false,
        }
      : console.error("userfeedback func error");

  return { fieldColor, message, messageColor, valid };
}

export default function EmailField({ setFormVerification, setFormValues }) {
  const [email, setEmail] = useState("");
  const [feedBack, setFeedBack] = useState({
    fieldColor: "",
    message: "",
    messageColor: "",
    valid: false,
  });
  //   const{fieldColor, message, messageColor};
  useEffect(() => {
    const fetchFeedBack = async () => {
         const data = await userFeedback(email);
         setFeedBack(data);
         setFormVerification((prev) => ({...prev, email : data.valid}))
         setFormValues((prev) => ({...prev, email : email}));
    };
    fetchFeedBack()
  }, [email, setFormVerification, setFormValues]);
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium mb-2">
        Email Address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="you@example.com"
        className={`w-full px-4 py-2 bg-white border ${feedBack.fieldColor} rounded-md text-[#1B1B1E] transition-colors duration-300 ease-in-out focus:outline-none focus:border-[#F39C12] focus:ring-3 focus:ring-[#F39C12]/10 placeholder:text-[#7B8591]`}
        required
      />
      <span className={`text-sm font-medium ${feedBack.messageColor}`}>
        {feedBack.message}
      </span>
    </div>
  );
}
