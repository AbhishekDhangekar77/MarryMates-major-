// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [userType, setUserType] = useState('client'); // Default to client
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Simple validation
//     if (!username) {
//       setError('Username is required.');
//       return;
//     }

//     if (!password) {
//       setError('Password is required.');
//       return;
//     }

//     if (password.length < 6) {
//       setError('Password must be at least 6 characters long.');
//       return;
//     }

//     // Log the credentials being sent to the server
//     console.log("Attempting login with:", { username, password, userType });

//     // API call to login user with provided credentials
//     try {
//       const response = await axios.post("http://localhost:8080/api/auth/login", { username, password, role: userType });
//       console.log("Login response:", response);
//       if (response.status === 200) {
//         alert('Login successful!');
//         localStorage.setItem('user', JSON.stringify(response.data));
//         // Redirect to the respective dashboard based on user type
//         if (userType === 'vendor') {
//           navigate('/vendor');
//         } else if (userType === 'client') {
//           navigate('/client');
//         } else if (userType === 'admin') {
//           navigate('/admin');
//         }
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       if (error.response) {
//         console.error("Server response:", error.response.data);
//         setError(error.response.data || 'Invalid username or password.');
//       } else {
//         setError('An error occurred. Please try again.');
//       }
//     }
//   };

//   const handleResetPassword = () => {
//     setUsername('');
//     setPassword('');
//     setError('');
//     alert('Please contact support to reset your password or check your email for further instructions.');
//   };

//   return (
//     <div className="signup-form">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Username</label>
//         <input
//           type="text"
//           placeholder="Enter your username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <label>Password</label>
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <label>User Type</label>
//         <select value={userType} onChange={(e) => setUserType(e.target.value)}>
//           <option value="vendor">Vendor</option>
//           <option value="client">Client</option>
//           <option value="admin">Admin</option>
//         </select>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <div className="button-container">
//           <button type="submit">Login</button>
//           <button type="button" onClick={handleResetPassword}>
//             Reset Password
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('client'); // Default to client
  const [error, setError] = useState('');
  const [resetEmail, setResetEmail] = useState(''); // State for reset password email
  const [showResetForm, setShowResetForm] = useState(false); // State to toggle reset password form
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!username) {
      setError('Username is required.');
      return;
    }

    if (!password) {
      setError('Password is required.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // Log the credentials being sent to the server
    console.log("Attempting login with:", { username, password, userType });

    // API call to login user with provided credentials
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", { username, password, role: userType });
      console.log("Login response:", response);
      if (response.status === 200) {
        alert('Login successful!');
        localStorage.setItem('user', JSON.stringify(response.data));
        // Redirect to the respective dashboard based on user type
        if (userType === 'vendor') {
          navigate('/vendor');
        } else if (userType === 'client') {
          navigate('/client');
        } else if (userType === 'admin') {
          navigate('/admin');
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        console.error("Server response:", error.response.data);
        setError(error.response.data || 'Invalid username or password.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  const handleResetPasswordRequest = async (e) => {
    e.preventDefault();

    if (!resetEmail) {
      setError('Email is required.');
      return;
    }

    // API call to request password reset
    try {
      const response = await axios.post("http://localhost:8080/api/auth/reset-password", { email: resetEmail });
      console.log("Reset password response:", response);
      if (response.status === 200) {
        alert('Password reset link has been sent to your email.');
        setShowResetForm(false);
        setResetEmail('');
      }
    } catch (error) {
      console.error("Reset password error:", error);
      if (error.response) {
        console.error("Server response:", error.response.data);
        setError(error.response.data || 'An error occurred. Please try again.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="signup-form">
      <h2>Login</h2>
      {showResetForm ? (
        <form onSubmit={handleResetPasswordRequest}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="button-container">
            <button type="submit">Send Reset Link</button>
            <button type="button" onClick={() => setShowResetForm(false)}>
              Back to Login
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>User Type</label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="vendor">Vendor</option>
            <option value="client">Client</option>
            <option value="admin">Admin</option>
          </select>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="button-container">
            <button type="submit">Login</button>
            <button type="button" onClick={() => setShowResetForm(true)}>
              Reset Password
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;