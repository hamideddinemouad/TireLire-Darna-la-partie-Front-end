import { Link } from "react-router";
import Form from "./components/Form/Form";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen py-8 bg-[#F1F3F5] text-[#1B1B1E] font-sans">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-8">
          <h1 className="text-3xl font-bold mb-2 text-[#1D2D44]">
            Create Account
          </h1>
          <Form />
          <div className="text-center mt-8">
            <p className="text-[#7B8591]">
              Already have an account?
              <Link
                to="/login"
                className="font-semibold text-[#F39C12] no-underline transition-colors duration-300 ease-in-out hover:text-[#E68A0A] hover:underline"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
