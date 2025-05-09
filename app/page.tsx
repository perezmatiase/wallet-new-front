// app/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies(); 
  const accessToken = cookieStore.get("access-token");

  if (accessToken) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }

  return null; // nunca se renderiza porque siempre redirige
}
