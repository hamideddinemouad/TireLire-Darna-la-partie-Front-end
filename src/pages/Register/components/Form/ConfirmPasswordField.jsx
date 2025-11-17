export default function ConfirmPasswordField({ onChange, borderColor}) {

  return (
    <div>
      <label
        htmlFor="confirmPassword"
        className="block text-sm font-medium mb-2"
      >
        Confirm Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        onChange={(e) => {
          onChange(e.target.value);
          //   console.log("confirm :" + e.target.value)
        //   console.log("border color :" + borderColor);
        }}
        placeholder="••••••••"
        className={`w-full px-4 py-2 bg-white border ${borderColor} rounded-md text-[#1B1B1E] transition-colors duration-300 ease-in-out focus:outline-none focus:border-[#F39C12] focus:ring-3 focus:ring-[#F39C12]/10 placeholder:text-[#7B8591]`}
        required
      />
      <div id="passwordError" className="text-[#DC3545] text-sm mt-1"></div>
    </div>
  );
}
