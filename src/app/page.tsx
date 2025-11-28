'use client'

import DataTable from "@/components/DataTable";
import Link from "next/link";
import { useEffect, useState } from "react";
let image = "iconSite.png"
let fotoAnfitrioes = "/photos/fotoAnfitrioes.jpg"

export default function Home() {
  return (
    <div className="bg-[#E0FBFC] min-h-dvh flex flex-col">
      <Header/>
      <div className="flex flex-col">
        <Apartamentos/>
        <Mapa/>
        <QuemSomos/>
        <Contatos/>
      </div>
    </div>
  );
}

const QuemSomos = () => {
  return(
    <div id="quemsomos" className="bg-[#3D5A80] p-5 md:p-10 h-fit w-11/12 md:w-6/12 text-[#293241] mt-[5%] md:ml-[4%] self-center rounded-b-2xl">
    <img className="place-self-center hidden md:block" alt="Foto Anfitriões" src={fotoAnfitrioes}/>
    <div className="md:flex md:flex-row md:mt-5">
      <div className="flex flex-col md:flex-row items-center bg-[#E0FBFC] md:mr-5 mb-5 md:rounded-b-2xl md:rounded-t-none rounded-t-2xl">
        <div className="flex-col m-2">
          <p className="font-bold text-3xl mt-[1%] text-center">Cláudio</p>
          <p className="wrap-normal w-fit p-2 pl-0 text-center">Ele é um dos anfitriões da Pousada Solaris e tem um cuidado especial para que sua estadia seja a melhor possível. Sempre atencioso, educado e gentil, recebe a todos de braços abertos, oferecendo uma recepção calorosa e dicas para aproveitar ao máximo a sua hospedagem.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mb-5 items-center bg-[#E0FBFC] md:rounded-b-2xl md:rounded-t-none rounded-t-2xl">
        <div className="flex-col m-2">
          <p className="font-bold text-center text-3xl mt-[1%]">Letícia</p>
          <p className="wrap-normal w-fit p-2 pl-0 text-center">Também anfitriã da Pousada Solaris, Letícia é a combinação perfeita de gentileza, educação e organização. É ela quem cuida para que todos os apartamentos tenham uma harmonia encantadora, trazendo uma beleza única e aconchegante para cada cantinho da pousada.</p>
        </div>
      </div>
    </div>
    <img className="place-self-center md:hidden" alt="Foto Anfitriões" src={fotoAnfitrioes}/>
    </div>
  )
}

const Contatos = () => {
  return(
    <div id="contatos" className="bg-[#3D5A80] md:justify-between p-5 pb-0 h-fit w-full text-[#293241] mt-[5%] md:pt-1.5 md:pb-1.5 self-center md:mb-0 md:w-full flex flex-row">
      <Link href="https://www.instagram.com/solaris.pousada/" target="_blank" rel="noopener noreferrer" className=" flex items-center md:justify-center bg-[#E0FBFC] mb-5 w-[45%] md:h-fit md:m-0 md:w-fit rounded-xl mr-1">
        <img className="size-6 m-1 md:m-2" src={'https://www.svgrepo.com/show/452229/instagram-1.svg'}></img>
        <p className="md:mr-4">Instagram</p>
      </Link>

      <Link href="https://wa.me/qr/RVJVGAWPUOPSB1" target="_blank" rel="noopener noreferrer" className="flex items-center md:justify-center bg-[#E0FBFC] mb-5 w-[45%] md:m-0 md:w-fit rounded-xl mr-1">
        <img className="size-6 m-1 md:m-2" src={'https://www.svgrepo.com/show/475692/whatsapp-color.svg'}></img>
        <p className="md:mr-4">Whatsapp</p>
      </Link>

      <Link href="https://www.airbnb.com.br/users/profile/1470675337183120962?previous_page_name=PdpHomeMarketplace" target="_blank" rel="noopener noreferrer" className="flex items-center md:justify-center bg-[#E0FBFC] mb-5 md:m-0 md:w-fit rounded-xl w-[45%]">
        <img className="size-6 m-1 md:m-2" src={'https://www.svgrepo.com/show/452152/airbnb.svg'}></img>
        <p className="md:mr-4">AirBnb</p>
      </Link>
    </div>
  )
}

const Header = () =>{
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () =>{
      const scrollThreshold = 50;
      if(window.scrollY < scrollThreshold){
        setIsTransparent(false)
      }else{setIsTransparent(true)}
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  

  return(
  <>
  <header className={`text-[#293241] bg-[#3D5A80] border-b-2 border-[#98C1D9] md:flex items-center hidden md:visible md:sticky md:top-0 md:z-50 ${isTransparent 
  ? 'bg-[#3D5A80]/90'
  : 'bg-[#3D5A80]'}
  `}>
      <div className="font-bold mr-[2%] p-2 h-auto w-fit border-r-2 border-[#98C1D9] flex  items-center text-white">
        <img className="size-13 rounded-t-3xl mr-2" alt="iconSolaris" src={image}></img>
        <p className="text-md">Pousada Solaris</p>
      </div>

      <Link href="#apartamentos" className="bg-[#E0FBFC] h-fit text-[#293241] p-2 pl-6 pr-6 mr-[2%] hover:ring hover:ring-[#293241] hover:bg-[#e0fbfca4] rounded-4xl">Apartamentos</Link>
      <Link href="#mapa" className="bg-[#E0FBFC] h-fit text-[#293241] p-2 pl-6 pr-6 mr-[2%] hover:ring hover:ring-[#293241] hover:bg-[#e0fbfca4] rounded-4xl">Localização</Link>
      <Link href="#quemsomos" scroll={true} className="bg-[#E0FBFC] h-fit text-[#293241] p-2 pl-6 pr-6 mr-[2%] hover:ring hover:ring-[#293241] hover:bg-[#e0fbfca4] rounded-4xl">Quem somos</Link>
      <Link href="#contatos" className="bg-[#E0FBFC] h-fit text-[#293241] p-2 pl-6 pr-6 mr-[2%] hover:ring hover:ring-[#293241] hover:bg-[#e0fbfca4] rounded-4xl">Contatos</Link>
  </header>

  <div tabIndex={0} className="group visible md:hidden sticky top-2 z-50 bg-white w-fit left-4 rounded-3xl focus-within:ring focus-within:ring-[#3D5A80] focus-within:rounded-none focus-within:rounded-r-2xl focus-within:bg-gray-200 p-1">
    <div className="size-8">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11066)"> <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="#292929" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11066"> <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)"></rect> </clipPath> </defs> </g></svg>
    
      <div className="flex flex-col absolute left-0 mt-2 rounded-r-2xl bg-[#3D5A80] overflow-hidden max-h-0 opacity-0 transform -translate-x-2 group-focus-within:max-h-[230px] group-focus-within:opacity-100 group-focus-within:translate-x-0 transition-all duration-500 ease-out p-3">
        <Link href="#apartamentos" className=" bg-[#E0FBFC] text-[#293241] p-2 mb-4 font-bold rounded-r-4xl">Apartamentos</Link>
        <Link href="#mapa" className="bg-[#E0FBFC] text-[#293241] p-2 mb-4 font-bold rounded-r-4xl">Localização</Link>
        <Link href="#quemsomos" className=" bg-[#E0FBFC] text-[#293241] p-2 mb-4 font-bold rounded-r-4xl">Quem somos</Link>
        <Link href="#contatos" className="bg-[#E0FBFC] text-[#293241] p-2 font-bold rounded-r-4xl">Contatos</Link>
      </div>
    </div>
  </div>
  </>
  )
}

const Apartamentos = () => {
  return(
    <div id="apartamentos" className="w-full mt-[5%] md:mt-[2%]">
      <DataTable/>
    </div>
  )
}

const Mapa = () => {
  return(
    <div id="mapa" className="self-center justify-center mt-[5%] h-160 w-11/12 bg-[#3D5A80] rounded-2xl">
      <iframe className="p-5 h-full w-full" title="mapaPousada" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d220.41262842182573!2d-48.58595790472369!3d-27.883492178437272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDUzJzAwLjYiUyA0OMKwMzUnMDkuMiJX!5e0!3m2!1spt-BR!2sbr!4v1763989766955!5m2!1spt-BR!2sbr"></iframe>
    </div>
  )
}