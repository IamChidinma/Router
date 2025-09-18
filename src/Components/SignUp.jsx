// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "../Styles/Signup.css";

// const Signup = () => {
//   const [input, setinput] = useState({ name: "", email: "", password: "" });
//   const [errors, setErrors] = useState({});
//   const [isValid, setIsValid] = useState(false);
//   const inputChange = (e) => {
//     const { name, value } = e.target;
//     setinput((prev) => ({ ...prev, [name]: value }));
//   };
//   const validate = () => {
//     let err = {};
//     if (!input.name.trim()) {
//       err.name = "username is required";
//     }
//     if (!input.email.trim()) {
//       err.email = "email is required";
//     } else if (!/\S+@\S+\.\S+/.test(input.email)) {
//       err.email = "Invalid email format";
//     }
//     if (!input.password.trim()) {
//       err.password = "password is required";
//     } else if (input.password.length < 6) {
//       err.password = "Password must be at least 6 characters";
//     }

//     setErrors(err);
//     setIsValid(Object.keys(err).length === 0);
//   };

//   useEffect = () => {
//     validate();
//   },
//     [input];

//   const click = (e) => {
//     e.preventDefault();
//     if (isValid) {
//       alert("✅ Signup Successful!");
//       setForm({ userName: "", email: "", password: "" });
//     }
//   };
//   return (
//     <div className="signup-container">
//       <div className="signup-left">
//         <div className="overlay">
//           <h2>Create Account</h2>
//           <p>
//             To become a part of our community, please sign up using your
//             personal information.
//           </p>
//         </div>
//       </div>

//       <div className="signup-right">
//         <h2>SIGNUP</h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={input.name}
//           onChange={inputChange}
//           className={err.name ? "signup-input" : ""}
//         />
//         {err.name && <p className="error-text">{err.name}</p>}
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your email"
//           value={input.email}
//           onChange={inputChange}
//           className={errors.email ? "signup-input" : ""}
//         />
//         {err.email && <p className="error-text">{err.email}</p>}
//         <input
//           type="password"
//           name="password"
//           placeholder="Create password"
//           value={input.password}
//           onChange={inputChange}
//           className={err.password ? "signup-input" : ""}
//         />
//          {errors.password && <p className="error-text">{errors.password}</p>}
//         <label className="terms">
//           <input type="checkbox" /> I agree to the{" "}
//           <a href="/terms">Terms & Conditions</a>
//         </label>

//         <button onClick={click} disabled={!isValid} className="signup-btn">
//           <Link to="/Home">Sign Up</Link>
//         </button>

//         <p className="switch">
//           Already have an account? <Link to="/">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Styles/Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [input, setinput] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setinput((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let err = {};

    if (!input.name.trim()) {
      err.name = "Username is required";
    }
    if (!input.email.trim()) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      err.email = "Invalid email format";
    }
    if (!input.password.trim()) {
      err.password = "Password is required";
    } else if (input.password.length < 6) {
      err.password = "Password must be at least 6 characters";
    }

    setErrors(err);
    setIsValid(Object.keys(err).length === 0);
  };

  useEffect(() => {
    validate();
  }, [input]);

  const click = (e) => {
    e.preventDefault();
    if (isValid) {
      alert("✅ Signup Successful!");
      setinput({ name: "", email: "", password: "" });
      navigate("/Home"); // redirect after success
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="overlay">
          <h2>Create Account</h2>
          <p>
            To become a part of our community, please sign up using your
            personal information.
          </p>
        </div>
      </div>

      <div className="signup-right">
        <h2>SIGNUP</h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={input.name}
          onChange={inputChange}
          className={errors.name ? "error-input" : "signup-input"}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={input.email}
          onChange={inputChange}
          className={errors.email ? "error-input" : "signup-input"}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Create password"
          value={input.password}
          onChange={inputChange}
          className={errors.password ? "error-input" : "signup-input"}
        />
        {errors.password && <p className="error-text">{errors.password}</p>}

        <label className="terms">
          <input type="checkbox" /> I agree to the{" "}
          <a href="/terms">Terms & Conditions</a>
        </label>

        <button onClick={click} disabled={!isValid} className="signup-btn">
          Sign Up
        </button>

        <p className="switch">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
