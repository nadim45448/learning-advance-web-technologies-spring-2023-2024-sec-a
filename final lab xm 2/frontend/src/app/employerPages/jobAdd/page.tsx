"use client";
import axios from "axios";
import { useState } from "react";
import EmployerPages from "../page";

export default function JobAdd() {
  const [alertMessage, setAlertMessage] = useState("");
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    budget: "",
    duration: "",
    skills: [],
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .post("http://localhost:8000/job/post", jobData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("Job added successfully:", response.data);
          setAlertMessage("Job added successfully!");
        })
        .catch((error) => {
          console.error("Error adding job:", error);
          setAlertMessage("Error adding job. Please try again.");
        });
    } else {
      console.error("No token found in local storage");
      setAlertMessage("Error: No token found in local storage.");
    }
  };

  return (
    <> 
    <EmployerPages/>

    <main className="flex min-h-screen flex-col justify-between p-24 container mx-auto px-1 lg:px-20 md:px-10">
      <div>
        
        <form className="flex-col text-center" onSubmit={handleSubmit}>
          <h1 className="mb-6 text-2xl font-medium">Post a Job</h1>
          <input
            className="w-1/2 rounded-xl px-5 py-2 mb-8"
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />{" "}
          <br />
          <input
            className="w-1/2 rounded-xl px-5 py-2 mb-8"
            type="number"
            name="budget"
            value={jobData.budget}
            onChange={handleChange}
            placeholder="Budget"
            required
          />
          <br />
          <input
            className="w-1/2 rounded-xl px-5 py-2 mb-8"
            type="text"
            name="duration"
            value={jobData.duration}
            onChange={handleChange}
            placeholder="Duration"
            required
          />
          <br />
          
          
          <br />
          <button
            className="w-1/2 px-5 bg-red-700 text-white py-2 text-xl rounded-xl hover:bg-black hover:text-white"
            type="submit"
          >
            Add Job
          </button>
          <br />
          <br />
          
        </form>
      </div>
    </main></>
  );
}