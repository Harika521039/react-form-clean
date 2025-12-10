import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function FormPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    countryCode: "+91",
    country: "",
    city: "",
    pan: "",
    aadhaar: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

 
  const validate = () => {
    let err = {};

    if (!form.firstName) err.firstName = "Required";
    if (!form.lastName) err.lastName = "Required";
    if (!form.username) err.username = "Required";

    if (!form.email) err.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      err.email = "Invalid email";

    if (!form.password) err.password = "Required";

    if (!form.phone) err.phone = "Required";

    if (!form.country) err.country = "Required";
    if (!form.city) err.city = "Required";

    if (!form.pan) err.pan = "Required";
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i.test(form.pan))
      err.pan = "PAN must be in format ABCDE1234F";

    if (!form.aadhaar) err.aadhaar = "Required";
    else if (form.aadhaar.length !== 12)
      err.aadhaar = "Aadhaar must be 12 digits";

    setErrors(err);
    setIsValid(Object.keys(err).length === 0);
  };

  useEffect(() => {
    validate();
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (isValid) {
      navigate("/details", { state: form });
    }
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name"
          value={form.firstName} onChange={handleChange}
          className={errors.firstName && "error-box"} />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <input name="lastName" placeholder="Last Name"
          value={form.lastName} onChange={handleChange}
          className={errors.lastName && "error-box"} />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        <input name="username" placeholder="Username"
          value={form.username} onChange={handleChange}
          className={errors.username && "error-box"} />
        {errors.username && <p className="error">{errors.username}</p>}

        <input name="email" placeholder="Email"
          value={form.email} onChange={handleChange}
          className={errors.email && "error-box"} />
        {errors.email && <p className="error">{errors.email}</p>}

        <div className="password-field">
          <input type={showPassword ? "text" : "password"}
            name="password" placeholder="Password"
            value={form.password} onChange={handleChange}
            className={errors.password && "error-box"} />

          <button type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="toggle-btn">
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {errors.password && <p className="error">{errors.password}</p>}

        <div className="phone-row">
          <select name="countryCode"
            value={form.countryCode} onChange={handleChange}>
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
          </select>

          <input name="phone" placeholder="Phone Number"
            value={form.phone} onChange={handleChange}
            className={errors.phone && "error-box"} />
        </div>
        {errors.phone && <p className="error">{errors.phone}</p>}

        <input name="country" placeholder="Country"
          value={form.country} onChange={handleChange}
          className={errors.country && "error-box"} />
        {errors.country && <p className="error">{errors.country}</p>}

        <input name="city" placeholder="City"
          value={form.city} onChange={handleChange}
          className={errors.city && "error-box"} />
        {errors.city && <p className="error">{errors.city}</p>}

        <input name="pan" placeholder="PAN (ABCDE1234F)"
          value={form.pan} onChange={handleChange}
          className={errors.pan && "error-box"} />
        {errors.pan && <p className="error">{errors.pan}</p>}

        <input name="aadhaar" placeholder="Aadhaar (12 digits)"
          value={form.aadhaar} onChange={handleChange}
          className={errors.aadhaar && "error-box"} />
        {errors.aadhaar && <p className="error">{errors.aadhaar}</p>}

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormPage;
