

export default function AccountTypeField({ setFormValues }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Account Type</label>
      <div className="flex gap-4 mt-2">
        <div className="flex-1">
          <label className="flex items-center">
            <input
              onChange={(e) => {
                setFormValues((prev) => ({ ...prev, accountType : e.target.value}));
              }}
              type="radio"
              name="accountType"
              value="User"
              className="mr-2"
              required
              defaultChecked
            />
            <span className="ml-2">Personal</span>
          </label>
        </div>
        <div className="flex-1">
          <label className="flex items-center">
            <input
              onChange={(e) => {
                setFormValues((prev) => ({ ...prev, accountType : e.target.value}));
              }}
              type="radio"
              name="accountType"
              value="Business"
              className="mr-2"
              required
            />
            <span className="ml-2">Business</span>
          </label>
        </div>
      </div>
    </div>
  );
}
