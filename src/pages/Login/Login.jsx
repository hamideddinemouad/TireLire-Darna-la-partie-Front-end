import { Link } from "react-router";
import Form from "./components/Form/Form";
import { useLocation } from "react-router";
// import SignInGoogle from "./components/SignInGoogle";
export default function Login() {
  const location = useLocation();
  const message = location.state?.message || false;
  let justRegistered;
    if (message) {
      justRegistered = 
      <div
        className="p-4 mb-6 border rounded-md text-sm bg-[rgba(13,110,253,0.1)] border-[#0D6EFD] text-[#0D6EFD]"
        role="alert"
      >
        {message}
      </div>;
    }

  return (
    <div className="flex items-center justify-center min-h-screen py-8 bg-[#F1F3F5] text-[#1B1B1E] font-sans">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-8">
          <h1 className="text-3xl font-bold mb-2 text-[#1D2D44]">
            Welcome Back
          </h1>
          <p className="text-gray-600 mb-8">
            Sign in to your account to continue
          </p>
          {justRegistered}
          <Form />
          {/* <SignInGoogle /> */}
          <div className="text-center mt-8">
            <p className="text-[#7B8591]">Don't have an account?</p>
            <Link
              to="/Register"
              className="font-semibold text-[#F39C12] no-underline transition-colors duration-300 ease-in-out hover:text-[#E68A0A] hover:underline"
            >
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
