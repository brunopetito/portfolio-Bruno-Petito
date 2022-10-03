import styles from "./Card.module.css"
import euURL from "../assets/eu3.jpg"
import githubURL from "../assets/github.svg"
import htmlURL from "../assets/html.svg"
import jsURL from "../assets/js.svg"
import cssURL from "../assets/css.svg"
import reactURL from "../assets/react.svg"
import tailwindURL from "../assets/tailwind.svg"
import gitURL from "../assets/git.svg"
import PrimeiraSectionDesktop from "./desktop/PrimeiraSectionDesktop"
import {FileArrowDown} from 'phosphor-react'




function Card(){
  return(
    <>
      <div className={`${styles.card} slide-in-blurred-left text-[#2F2F2F] sm:hidden `} >
        <div className=" w-full flex flex-col align-center pb-3">
         <p className="text-xl font-display p-3 text-center ">Desenvolvedor front-end</p>
         <div className=" flex justify-center">
          <img src={euURL} alt="foto bruno petito (muito bonito)"
          className="w-24 h-24 rounded-full" />
         </div>
         <div className="flex justify-center ">
          
            <a href="https://github.com/brunopetito"
            className="flex justify-center align-middle"
            >
              <div className="m-auto ">
              <img src={githubURL} alt=" " className="w-4 h-4" />
              </div>
              <p className="pl-[0.1rem] text-sm font-bold">brunopetito</p>
              

            </a>
         </div>
         
         <div className="grid grid-cols-3 gap-y-4  m-auto items-center ">
          <div className="flex align-center justify-center">
          <img src={htmlURL} alt="" />

          </div>
          <div className="flex align-center justify-center">
          <img src={jsURL} alt="" />

          </div>
          <div className="flex align-center justify-center">
          <img src={cssURL} alt="" />

          </div>
          <div className="flex align-center justify-center">
         
          <img src={reactURL} alt="" />
          </div>
          <div className="flex align-center justify-center">
          <img src={tailwindURL} alt="" />

          </div>
          <div className="flex align-center justify-center">
          <img src={gitURL} alt="" />

          </div>
         </div>

         <a
             className="self-center  bg-[#B6B0FF] w-[136px]  p-1 rounded sm:hover:bg-[#9790E5] text-[#27217A] font-bold text-sm"
             href="cv.pdf" 
             download>
              <div
              className="flex justify-center items-center gap-2"
              
              >
                Download CV
                <FileArrowDown size={24} color="#27217A" />

             </div> 
          </a>

        </div>
      </div>

      <div className="hidden sm:block">
        <PrimeiraSectionDesktop/>
      </div>
    </>
  )
}

export default Card
