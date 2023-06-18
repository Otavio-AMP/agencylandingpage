import Image from 'next/image'
import Header from './components/header'
import Footer from './components/footer'
import placeholder from '../../public/statics.svg'
import improveIcon from '../../public/iconImprove.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-customPurple">
      <Header />
     
      <section className="flex flex-row items-center justify-center bg-backgroundEffect w-full h-screen bg-no-repeat bg-cover bg-center mb-52">
        <div className="flex flex-col text-left pl-16 w-1/2 gap-10">
          <h2 className='text-7xl'>
            Melhor agência de marketing do bairro
          </h2>
          <p>
            Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.
          </p>
          <button className='bg-white px-5 py-2 rounded text-purple-800 w-1/3 hover:bg-greenHighlight hover:text-white'>
            Aumentar vendas 
          </button>
        </div>
        <div className="flex flex-row items-center justify-center w-1/2">
          <Image src={placeholder} width={500} height={342} alt='placeholder'/>
        </div>
      </section>

      <section className='flex flex-col items-center justify-center gap-4 mb-52'>
        <h2 className='text-6xl text-center'>
          Neste bairro, não há agência melhor. Garantimos.
        </h2>
        <p className='text-center mb-14'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='grid grid-cols-2 gap-6 px-40'>
          <div className='flex flex-col gap-10 bg-white rounded p-5'>
            <Image src={improveIcon} width={85} height={85} alt='improve icon'/>
            <span className='text-4xl text-purple-800'>Digital Strategy</span>
            <p className='text-gray text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className='flex flex-col gap-10 bg-white rounded p-5'>
            <Image src={improveIcon} width={85} height={85} alt='improve icon'/>
            <span className='text-4xl text-purple-800'>Estratégia digital</span>
            <p className='text-gray'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className='flex flex-col gap-10 bg-white rounded p-5'>
            <Image src={improveIcon} width={85} height={85} alt='improve icon'/>
            <span className='text-4xl text-purple-800'>Social Media</span>
            <p className='text-gray'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className='flex flex-col gap-10 bg-white rounded p-5'>
            <Image src={improveIcon} width={85} height={85} alt='improve icon'/>
            <span className='text-4xl text-purple-800'>Social Media</span>
            <p className='text-gray'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-row items-start justify-center bg-backgroundEffect w-full h-screen bg-no-repeat bg-cover bg-center px-20 mb-52">
        <div className='flex flex-col gap-6 w-2/3 mt-20'>
          <h3 className='text-3xl text-greenHighlight'>
            Entre em contato
          </h3>
          <h2 className='text-6xl'>
            Aumente seu resultado de vendas e performance
          </h2>
          <p className='text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>

        <div className='flex flex-col items-center justify-center h-full'>
          <div className='flex flex-col bg-white rounded p-5 h-full'>
            <h3 className='text-4xl text-purple-800 mb-5'>
              Fale com um especialista
            </h3>
            <form className='flex flex-col justify-between gap-5 h-full' action="">
              <input className='bg-whiteShade p-3 text-black' type="text" placeholder='Nome completo'/>
              <input className='bg-whiteShade p-3 text-black' type="text" placeholder='E-mail profissional'/>
              <input className='bg-whiteShade p-3 text-black' type="text" placeholder='Celular/Whatsapp'/>
              <input className='bg-whiteShade p-3 text-black' type="text" placeholder='Site'/>
              <input className='bg-whiteShade p-3 text-black' type="text" placeholder='Orçamento para mídia'/>
              <button className='bg-greenShade px-5 py-2 rounded hover:bg-greenDark'>Enviar</button>
            </form>
          </div>
          <p className='text-center font-light px-8'>
            Ao enviar esse formulário, você reconhece que leu e concorda com a nossa <span className='text-white font-bold'>Política de Privacidade</span>.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
