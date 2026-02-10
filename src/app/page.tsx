import { redirect } from "next/navigation";

export default function Home() {
  // Middleware should redirect based on geo/accept-language.
  // This is a safe fallback.
  redirect("/es");
}
