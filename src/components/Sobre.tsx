import { UserList } from "phosphor-react";
import euURL from '../assets/eu.jpg'
import SobreDesktop from "./desktop/SobreDesktop";
export default function Sobre(){
  return(
    <div id='sobreRef'>
      <div className=" bg-old bg-center  text-zinc-50 flex flex-col justify-center align-middle sm:hidden  ">
        <div className="flex align-middle justify-center gap-2 p-2 mb-2">
          <p className="font-display text-2xl ">Sobre mim</p>
          <UserList size={24} color="rgb(250 250 250 / var(--tw-text-opacity))" className="self-center" />
        </div>
        <div className="flex flex-col align-middle justify-center mb-4">
          <img src={euURL} alt="Foto do cara mais bonito do RJ que fez esse site."
           className="w-3/5 self-center rounded mb-2"
           />
          <div className="w-[90%] self-center mt-2">
            <p className="font-content">Me chamo Bruno Petito, e estive lecionando Matemática por 2 anos. Pela minha paixão por computação, decidi recomeçar e atualmente estudo Sistemas de Computação.
            Hoje possuo conhecimentos em HTML, CSS, React, Typescript, Git, Github e Tailwind. E continuo estudando algumas outras tecnologias como Node.js e UX/UI design.
            Busco oportunidades para atuar na área de Desenvolvimento Front-End.</p>
          </div>
        </div>

      </div>
      <div className="hidden sm:block">
          <SobreDesktop/>
      </div>

    </div>
  )
}