import foto from '../../assets/eu.jpg'
import { UserList } from "phosphor-react";

export default function SobreDesktop(){
  return(
    <div className=" text-zinc-50 bg-old bg-center">
      <div className='flex flex-col justify-center align-middle sm:max-w-7xl sm:m-auto '>
        <div className="flex align-middle justify-center gap-5 my-8">
          <p className="font-display text-4xl ">Sobre mim</p>
          <UserList size={36} color="rgb(250 250 250 / var(--tw-text-opacity))" className="self-center" />
        </div>
      
      <div className='flex items-center justify-center gap-x-8 mb-8 '>
        <img src={foto} alt="Foto do cara mais bonito do RJ " className=' max-w-md w-1/2' />
          <p className="font-content px-4 w-1/3 leading-7 text-lg ">Olá! me chamo Bruno Petito, e estive lecionando Matemática por 2 anos. Pela minha paixão por computação, decidi recomeçar e atualmente estudo Sistemas de Computação.
                Hoje possuo conhecimentos em <span className='font-bold text-violet-300'>HTML, CSS, React, Typescript, Git, Github e Tailwind.</span> E continuo estudando algumas outras tecnologias como Node.js e UX/UI design.
                Busco oportunidades para atuar na área de Desenvolvimento Front-End.</p>
      </div>
      </div>
      

    </div>
  )
}