import { useState } from "react";

function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "male",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [dark, setDark] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) {
      alert("Accept terms first");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">

        <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-80" onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold mb-4 text-center dark:text-white">
            Sign Up
          </h2>

          <input name="name" placeholder="Name" onChange={handleChange}
            className="w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:text-white" required />

          <input name="email" placeholder="Email" onChange={handleChange}
            className="w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:text-white" required />

          <input type="password" name="password" placeholder="Password" onChange={handleChange}
            className="w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:text-white" required />

          <div className="flex gap-4 my-2 dark:text-white">
            <label><input type="radio" name="gender" value="male" defaultChecked onChange={handleChange}/> Male</label>
            <label><input type="radio" name="gender" value="female" onChange={handleChange}/> Female</label>
          </div>

          <label className="block my-2 text-sm dark:text-white">
            <input type="checkbox" name="agree" onChange={handleChange}/> I agree to terms
          </label>

          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Sign Up
          </button>

          <button
            type="button"
            onClick={() => setDark(!dark)}
            className="w-full mt-2 bg-gray-500 text-white p-2 rounded"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>

          {submitted && (
            <p className="text-green-500 mt-3 text-center">
              Form submitted successfully!
            </p>
          )}
        </form>

      </div>
    </div>
  );
}

export default SignupForm;