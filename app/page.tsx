import type { Metadata } from "next";
import Home from "./components/home";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <main className='max-h-fit max-w-full flex-col items-center'>
      <Home />
    </main>
  );
}
