import React, { useState } from "react";

function Test() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [sex, setSex] = useState("male");

  const onSexHandler = (e) => {
    setSex(e.target.value);
  };

  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const onEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const onSubmitHandler = (e) => {
    alert(`${userName} ${userEmail} ${sex}`);
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>Enter Name : </label>
        <input
          placeholder="User Name"
          type="text"
          value={userName}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label>Email : </label>
        <input
          placeholder="Emial"
          type="email"
          onChange={onEmailChange}
          value={userEmail}
        ></input>
      </div>
      <div>
        <select value={sex} onChange={onSexHandler}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Test;
