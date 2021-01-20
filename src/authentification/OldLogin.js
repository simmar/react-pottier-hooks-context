import React, {useState} from 'react';

const Login = (props) => {
  const [user, setUser] = useState({firstName: '', lastName: '', password: ''});

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem('value', JSON.stringify(user));
  };

  return (
    <div>
      <h1>Sign In to your account</h1>
      <form>
        <div className="field">
          <label htmlFor="firstName" className="label">
            firstName
          </label>
          <div className="control">
            <input
              id="firstName"
              className="input"
              type="text"
              name="firstName"
              placeholder="firstName"
              value={user.name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="lastName" className="label">
            Username:
          </label>
          <div className="control">
            <input
              id="lastName"
              className="input"
              type="text"
              name="lastName"
              placeholder="lastName"
              value={user.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="password" className="label">
            Password
          </label>
          <div className="control has-icons-right">
            <input
              id="password"
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="control">
          <p type="submit" className="button is-link" onClick={handleSubmit}>
            Submit
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
