export default function EmailField({ onBlur, valid }) {
  const { borderColor, message } =
    valid === "empty"
      ? { borderColor: "border-[#E0E0E0]", message: <span></span> }
      : valid === true
      ? {
          borderColor: "border-[#28A745]",
          message: (
            <span className="text-sm font-medium text-[#28A745]">
              looks good !
            </span>
          ),
        }
      : valid === false
      ? {
          borderColor: "border-[#DC3545]",
          message: (
            <span className="text-sm font-medium text-[#DC3545]">
              Incorrect email format
            </span>
          ),
        }
      : console.log("valid var in email field error");
  // const message =
  // console.log("valid is " + valid);

  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium mb-2">
        Email Address
      </label>
      <input
        onBlur={(e) => {
          // console.log("value passed by onchange");
          onBlur(e.target.value);
        }}
        type="email"
        id="email"
        name="email"
        placeholder="you@example.com"
        className={`w-full px-4 py-2 bg-white border ${borderColor} rounded-md text-[#1B1B1E] transition-colors duration-300 ease-in-out focus:outline-none focus:border-[#F39C12] focus:ring-3 focus:ring-[#F39C12]/10 placeholder:text-[#7B8591]`}
        required
      />
      {message}
    </div>
  );
}
