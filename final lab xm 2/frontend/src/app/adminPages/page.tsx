"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminPages() {
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
    <main className="">
      Admin <br />
      <Link href="/adminPages/register">Register new user</Link><br />
      <Link href="/adminPages/user">Users control</Link><br />
      <button onClick={handleLogout}>Logout</button>

    </main>
  );
}
