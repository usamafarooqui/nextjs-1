import LearnDataFetching from "@/components/LearnDataFetching";
import LearningLink from "@/components/LearningLink";
import UseRouter from "@/components/UseRouter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello world</h1>
      {/* <LearningLink /> */}
      <UseRouter />
      <LearnDataFetching />
    </main>
  );
}
