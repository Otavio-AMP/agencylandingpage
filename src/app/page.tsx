import Image from 'next/image'
import Header from './components/header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-customPurple">
      <Header />
      
      <div className="">
        <h1>Project Start</h1>
      </div>

      <footer className="">
        
      </footer>
    </main>
  )
}
