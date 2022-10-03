import htmlURL from "../../assets/htmlBranco.svg"
import jsURL from "../../assets/js.svg"
import cssURL from "../../assets/css2.svg"
import reactURL from "../../assets/react.svg"
import tailwindURL from "../../assets/tailwind.svg"
import gitURL from "../../assets/git.svg"
import HabilitiesPopover from "./HabilitiesPopover"
import typescriptLogo from '../../assets/typescript.svg'
import figma from '../../assets/figma.svg'
import Typewriter  from "typewriter-effect"
import { FileArrowDown } from "phosphor-react"

export default function PrimeiraSectionDesktop(){
   
 
  return(
    <>
      <div className=" h-fit bg-zinc-800 pb-20 ">
        <div className="max-w-7xl flex m-auto mt-20 px-20 text-white ">

            <div className="min-w-[50%] mt-20 flex flex-col items-start">
             <p className="text-7xl font-display">Bruno Petito</p>
            
            <div className="text-2xl font-display mt-4 px-1"> 
              <Typewriter
                  onInit={(typewriter)=>{
                    typewriter.typeString('Desenvolvedor Front-end.').start()
                  }}
              />
            </div>

            <a
             className="self-start  bg-[#B6B0FF] w-fit mt-8 p-3 rounded sm:hover:bg-[#9790E5] text-[#27217A] font-bold"
             href="cv.pdf" 
             download>
              <div
              className="flex justify-center items-center gap-2"
              
              >
                Download CV
                <FileArrowDown size={24} color="#27217A" />

             </div> </a>
             
            </div>



            <div className="min-w-[50%]  flex flex-col items-center mt-20">
              
              <div className="grid grid-cols-3 gap-5">
                <HabilitiesPopover url={htmlURL} alt='HTML logo'
                 popoverContent="HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web."
                 tec='HTML'
                 
                 />
                 <HabilitiesPopover url={cssURL} alt='CSS logo'
                 popoverContent="CSS é uma linguagem de estilo, também conhecida como folhas de estilo em cascata. É usada para personalização visual de um site. "
                 tec='CSS'
                 />
                 <HabilitiesPopover url={jsURL} alt='JS logo'
                 popoverContent="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. "
                 tec='Javascript'
                 />
                 <HabilitiesPopover url={reactURL} alt='React logo'
                 popoverContent="O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. "
                 tec='React'
                 />
                 <HabilitiesPopover url={tailwindURL} alt='TailwindCSS'
                 popoverContent="Tailwind CSS é uma estrutura CSS de código aberto, oferece responsividade, código enxuto, customização e integração com IDEs.   "
                 tec='TailwindCSS'
                 />
                 <HabilitiesPopover url={gitURL} alt='Git'
                 popoverContent="Git  é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software  "
                 tec='Git'
                 />
                 <HabilitiesPopover url={typescriptLogo} alt='Typescript'
                 popoverContent="TypeScript é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem. "
                 tec='Typescript'
                 />
                 <HabilitiesPopover url={figma} alt='Figma'
                 popoverContent="Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplicações desktop para GNU/Linux, macOS e Windows. "
                 tec='Figma'
                 />

              
                

              </div>
            </div>
          
        </div>
      </div>
    </>
  )
}