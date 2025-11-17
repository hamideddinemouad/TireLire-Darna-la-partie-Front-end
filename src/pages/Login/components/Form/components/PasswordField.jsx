export default function PasswordField() {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <a
          href="forgot-password.html"
          className="text-sm text-[#F39C12] no-underline transition-colors duration-300 ease-in-out hover:text-[#E68A0A] hover:underline"
        >
          Forgot Password?
        </a>
      </div>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="••••••••"
        className="w-full px-4 py-2 bg-white border border-[#E0E0E0] rounded-md text-[#1B1B1E] transition-colors duration-300 ease-in-out focus:outline-none focus:border-[#F39C12] focus:ring-3 focus:ring-[#F39C12]/10 placeholder:text-[#7B8591]"
        required
      />
    </div>
  );
}
