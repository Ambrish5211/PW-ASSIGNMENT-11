import React from "react";

function Login() {

    function handleSubmit (e) {
        e.preventDefault()
    }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <h1>Login</h1>
        <input type="text" placeholder="Enter your Email" />{" "}
        <span>
          {" "}
          <br /> <br />
        </span>
        <input type="password" placeholder="Enter password" /> <br /> <br />
        <button type="submit"> Login</button>
      </form>
    </div>
  );
}

export default Login;
