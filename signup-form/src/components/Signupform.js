import { useState } from "react";
import "./Signupform.css";

function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "male",
    agree: false,
  });

  const [dark, setDark] = useState(false);

  const [submitted, setSubmitted] = useState(false);

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
    <div className={dark ? "container dark" : "container"}>
      <form onSubmit={handleSubmit} className="form">
        <h2>Sign Up</h2>

        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

        <div>
          <label>
            <input type="radio" name="gender" value="male" onChange={handleChange} defaultChecked />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" onChange={handleChange} />
            Female
          </label>
        </div>

        <label>
          <input type="checkbox" name="agree" onChange={handleChange} />
          I agree to terms
        </label>

        <button type="submit">Sign Up</button>

        <button
  type="button"
  onClick={() => setDark(!dark)}
>
  Toggle Dark Mode
</button>

        {submitted && <p style={{ color: "green" }}>Form submitted successfully!</p>}
      </form>
    </div>
  );
}

export default SignupForm;