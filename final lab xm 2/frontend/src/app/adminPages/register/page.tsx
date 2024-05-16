"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AdminPages from "../page";
export default function AddUser() {
  const router = useRouter();
  const [state, setState] = useState({
    name: "",
    companyName:"",
    contact:"",
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const userData = {
      name: state.name,
      companyName: state.companyName,
      contact: state.contact,
      username: state.username,
      password: state.password,
    };
    axios
      .post("http://localhost:8000/auth/register", userData)
      .then((response) => {
        console.log(response.status, response.data);
        router.push("/adminPages");
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  };

  return (
    // <main className="flex min-h-screen flex-col justify-between p-24 container mx-auto px-1 lg:px-20 md:px-10">
    //     <h1>Registration:</h1><hr />
    //     <form onSubmit={handleSubmit}>
    //         <input type="text" name="name" value={state.name} onChange={handleChange}/>
    //         <input type="email" name="email" value={state.email} onChange={handleChange}/>
    //         <input type="password" name="password" value={state.password} onChange={handleChange}/>
    //         <button type="submit">Register</button>
    //     </form>
    // </main>

    <>
    <AdminPages/>
    <main className="flex min-h-screen flex-col justify-center items-center p-24 container mx-auto px-1 lg:px-20 md:px-10">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            
            <input
              id="name1"
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
              placeholder="name"
              required
            />
          </div>
          <div>
            
            <input
              id="companyName"
              type="text"
              name="companyName"
              value={state.companyName}
              onChange={handleChange}
              placeholder="companyName"
              required
            />
          </div>
          <div>
            
            <input
              id="contact"
              type="text"
              name="contact"
              value={state.contact}
              onChange={handleChange}
              placeholder="contact"
              required
            />
          </div>
          <div>
            
            <input
              id="username"
              type="text"
              name="username"
              value={state.username}
              onChange={handleChange}
              placeholder="username"
              required
            />
          </div>
          <div>
    
            <input
              id="password1"
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              placeholder="password"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
    </main></>
  );
}