import { useState } from "react";
import { Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="d-flex justify-content-center">
      <div className="form-image">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-4">Login</h1>
        <form id="login">
          <div className="mb-3">
            <label htmlFor="email" className="form-label display-6">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email address..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label display-6">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button variant="primary" className="form-control">
            Login
          </Button>
        </form>
        <Button variant="primary" className="form-control">
          Continue with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
