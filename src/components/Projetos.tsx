import { ProjectorScreenChart,CaretCircleDoubleDown, GithubLogo } 
from "phosphor-react";
import useScrollPosition from '../hooks/useScrollPosition.js'


import CardProjeto from "./CardProjeto";
import gitLogo from '../assets/githubz.svg'

import projeto2Url from "../assets/diary.jpg"
import diaryLogo from "../assets/Dlogo.svg"
import montyFoto from "../assets/monty.jpg"
import velhaFoto from "../assets/velha.jpg"





export default function Projetos(){
  const scrollPosition = useScrollPosition();
  return(
    <div id="projetosRef" className="   sm:m-auto sm:bg-slate-100 sm:py-2" >
      {/* Abaixo a versão do mobile */}
      <div  className="" > 
        <div className={`flex justify-center fit-content mt-20 sm:mt-0 items-center gap-1  ${scrollPosition >10? 'invisible ':'blink-2'}`}>
          <span >Scroll Down </span>
          <CaretCircleDoubleDown size={18} color="#2F2F2F" />
        </div>
        

        <div className={`text-[#2F2F2F]  ${scrollPosition < 100 ?'invisible': 'fade-in'}`}>

          <section className="flex justify-center content-center align-center gap-2  ">
            <span className="text-2xl font-display sm:text-4xl">Projetos</span>
              <ProjectorScreenChart size={28} color="#2F2F2F" className="self-center "/>
        
          </section>

          <section className="mb-12 font-content sm:flex flex-col">
            <div className="sm:flex sm:gap-4 sm:m-auto sm:max-w-7xl sm:items-center sm:px-20 ">
              <CardProjeto
              url={projeto2Url} 
              urlLogo={diaryLogo} 
              urlVercel={'https://di4ry.vercel.app/'}
              description={ 'O  Di4ry foi criado com objetivo de consolidar meus estudos em UI/UX Design,React e TailwindCSS.'}
              tecnologies={'React,TailwindCSS e Hygraph'}
              />

              <CardProjeto
                tittle={'Paradoxo de Monty Hall'}
                urlVercel={'https://monty-hall-chi.vercel.app/'}
                description="Esse projeto foi criado a partir de dificuldade de vizualiação dos meus alunos quando eu ensinava esse paradoxo durante minhas aulas."
                tecnologies={'React e TailwindCSS'}
                url={montyFoto}
              />

              <CardProjeto
                tittle={'Jogo da Velha'}
                urlVercel={'https://jogo-da-velha-six-pi.vercel.app/'}
                description="Clássico jogo de velha um projeto simples inspirado em layouts de jogo da velha da internet porém responsivo."
                tecnologies={'React e TailwindCSS'}
                url={velhaFoto}
              />  


            </div>
            

            <a href='https://github.com/brunopetito?tab=repositories'
            >
              <div className="flex gap-2 align-middle justify-center mt-6 bg-[#B6B0FF] w-fit m-auto p-3 rounded sm:hover:bg-[#9790E5]">
                <span className="text-[#27217A] font-bold" >Mais projetos </span>
                
                <img src={gitLogo} alt="logo github clicavel"   />
              </div>
            </a>
          
              
          </section>
        </div>
      </div> 








      
      
    </div>
    
  )
}