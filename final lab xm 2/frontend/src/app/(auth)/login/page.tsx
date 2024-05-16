"use client";
import { getAxiosConfig } from "@/components/axiosConfig";
import { formToJSON } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [loginStatus, setLoginStatus] = useState<string>("");
  const handleForm = async (formData: FormData) => {
    try {
      const jsonData = formToJSON(formData);
      const res = await getAxiosConfig().post("auth/login", jsonData);
      const resData: { jwt: string } = res.data;
      console.log(resData);
      localStorage.setItem("token", resData.jwt);
      const userTypeRes = await getAxiosConfig().get("http://localhost:8000/admin/type");
      const userType = userTypeRes.data[0].type;      

      if (userType === "admin") {
        router.push("/adminPages");
      } else {
        router.push("/employerPages");
      }
    } catch (ex) {
      console.log(ex);
      setLoginStatus("Login Failed");
    }
  };
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24 container mx-auto px-1 lg:px-20 md:px-10">
        <form className="flex flex-col gap-4" action={handleForm}>
          <div>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="username"
              required
            />
          </div>
          <div>
            <input
              id="password1"
              type="password"
              name="password"
              placeholder="password"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        
    </main>
  );
}
