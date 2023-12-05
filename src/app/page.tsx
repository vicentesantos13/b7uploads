import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroArea } from '@/components/HeroArea'

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black14">
      <Header/>
      <HeroArea/>
      <Footer/>
    </main>
  )
}
