import { HeroArea } from "@/components/HeroArea";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black14">
      <Layout>
        <HeroArea />
      </Layout>
    </main>
  );
}
