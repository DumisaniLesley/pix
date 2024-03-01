import Header from "@/components/Home/Header";
import Posts from "@/components/Home/Posts";
import Stories from "@/components/Home/Stories";
import Image from "next/image";

export default function Home() {
  return (
   <main className="p-4 bg-gray-200">
      <Header />
      <Stories />
      <Posts />
      <div className="mt-10">
        <p>Some action buttons here</p>
      </div>
   </main>
  );
}
