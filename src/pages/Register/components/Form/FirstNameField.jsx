export default function FirstNameField({setFormVerification, setFormValues}) {
    // setFormVerification={setFormVerification} setFormValues={setFormValues}
  return (
    <div>
      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
        First Name
      </label>
      <input
      onChange={(e) => {
        setFormVerification((prev) => ({...prev, lastName: true}))
        setFormValues((prev) => ({...prev, lastName : e.target.value
        }))
      }}
        type="text"
        id="firstName"
        name="firstName"
        placeholder="first name"
        className="w-full px-4 py-2 bg-white border border-[#E0E0E0] rounded-md text-[#1B1B1E] transition-colors duration-300 ease-in-out focus:outline-none focus:border-[#F39C12] focus:ring-3 focus:ring-[#F39C12]/10 placeholder:text-[#7B8591]"
        required
      />
    </div>
  );
}
