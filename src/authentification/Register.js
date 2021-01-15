import React from 'react';

const Register = ({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched,
  values,
}) => {
  return (
    <div>
      <div>
        <h1>Sign In to your account</h1>
      </div>
      <form onSubmit={handleSubmit} autoComplete="off" className="form">
        <div className="field">
          <label className="label" htmlFor="firstName">
            First Name *
            <input
              type="text"
              className="input"
              id="firstName"
              placeholder="Enter first name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="firstName"
              required
            />
            {touched.firstName && errors.firstName}
          </label>
        </div>

        <div className="field">
          <label className="label" htmlFor="lastName">
            Last name *
            <input
              type="text"
              className="input"
              id="lastName"
              placeholder="Enter last name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="lastName"
              required
            />
            <span className="help is-danger">
              {touched.lastName && errors.lastName}
            </span>
          </label>
        </div>

        <div className="field">
          <label className="label" htmlFor="email">
            Email address *
            <input
              type="text"
              className="input"
              id="email"
              placeholder="Enter email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              required
            />
            {touched.email && errors.email}
          </label>
        </div>

        <div className="field">
          <label className="label" htmlFor="password">
            Password *
            <input
              type="password"
              className="input"
              id="password"
              placeholder="Password"
              value={values.password || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
              min="0"
              required
            />
            <span className="help is-danger">
              {touched.password && errors.password}
            </span>
          </label>
        </div>

        <div className="form-group">
          <button type="submit" className="button is-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
