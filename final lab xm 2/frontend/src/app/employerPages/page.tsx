"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function EmployerPages() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
          const token = localStorage.getItem("token");
    
          await axios.post("http://localhost:8000/auth/logout", null, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
          router.push("/login");
        } catch (error) {
          console.error("Error logging out:", error);
        }
      };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Employer
      <Link href="/employerPages/jobAdd">Add Jobs</Link>
      <br />
      <Link href="/employerPages/job">Job control</Link>
      <br />
      <button onClick={handleLogout}>Logout</button>
    </main>
  );
}
