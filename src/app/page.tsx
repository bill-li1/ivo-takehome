import Counter from "@/components/counter";

export default function Home() {
  return (
    <div className="flex content-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] border-2 border-green-500">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center w-full border-2 border-blue-500">
        <Counter />
      </main>
    </div>
  );
}
