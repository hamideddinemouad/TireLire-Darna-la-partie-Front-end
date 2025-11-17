export default function PasswordField({onChange, borderColor}) {
  return (
    <div>
      <label htmlFor="password" className="block text-sm font-medium mb-2">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={(e) => {
            onChange(e.target.value);
            // console.log("password :" + e.target.value)
        }}
        placeholder="••••••••"
        className={`w-full px-4 py-2 bg-white border ${borderColor} rounded-md text-[#1B1B1E] transition-colors duration-300 ease-in-out focus:outline-none focus:border-[#F39C12] focus:ring-3 focus:ring-[#F39C12]/10 placeholder:text-[#7B8591]`}
        required
      />
    </div>
  );
}
