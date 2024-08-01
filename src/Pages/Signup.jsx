import React, { useState } from 'react';
import './Signup.css'; // Import the CSS file

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Placeholder for signup logic
    alert('Signup successful!');

    // Clear the form
    setName('');
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
};

export default Signup;
