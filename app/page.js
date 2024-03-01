import Header from "@/components/Home/Header";
import Posts from "@/components/Home/Posts";
import Stories from "@/components/Home/Stories";
import Image from "next/image";

export default function Home() {
  return (
   <main className="p-4 bg-white h-screen border-2">
      <Header />
      <Stories />
      <Posts />
   </main>
  );
}
