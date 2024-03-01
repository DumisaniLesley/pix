import Header from "@/components/Home/Header";
import Posts from "@/components/Home/Posts";
import Stories from "@/components/Home/Stories";
import Image from "next/image";

export default function Home() {
  return (
   <main className="p-4 sm:py-8 bg-gray-200 max-w-full sm:max-w-[600px] sm:mx-auto">
      <Header />
      <Stories />
      <Posts />
      <div className="mt-10">
        <p>Some action buttons here</p>
      </div>
   </main>
  );
}
