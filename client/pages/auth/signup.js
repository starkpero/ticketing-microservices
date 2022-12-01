import { useState } from "react";
import axios from "axios";
import useRequest from "../../hooks/use-request";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "api/users/signup",
    method: "post",
    body: { email, password },
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    doRequest();
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>Sign up</h1>
      <div className="form-group">
        <label>Email address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form control"
        ></input>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form control"
        ></input>
      </div>
      {errors}
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};
