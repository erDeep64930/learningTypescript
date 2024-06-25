"use client";
import React, { FormEvent, useRef, useState } from "react";
type formData = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submitData, setSubmitData] = useState<formData>({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (event:FormEvent<HTMLFormElement>)=>{
    const nameVal= name.current!.value;
    const emailVal= email.current!.value;
    const passwordVal= password.current!.value;
    console.log(nameVal);
    console.log(emailVal);
    console.log(passwordVal);
    console.log(submitData);
    event.preventDefault();
    setSubmitData({name:nameVal,email:emailVal,password:passwordVal});
  }

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={name} placeholder="enter your name" />
        <input type="text" ref={email} placeholder="enter your email" />
        <input type="text" ref={password} placeholder="enter your password" />
        <button type="submit" onClick={() => console.log(submitData)}>Submit</button>
      </form>

      <section>
        <h1>Name:{submitData.name}</h1>
        <h1>Email:{submitData.email}</h1>
        <h1>Password:{submitData.password}</h1>
      </section>
    </div>
  );
};

export default Form;
