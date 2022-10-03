

interface Props{
  url?:string;
  urlLogo?:string;
  description:string;
  tecnologies:string;
  urlVercel:string;
  tittle?:string;
  
}

export default function CardProjeto({url,urlLogo,description,tecnologies,urlVercel,tittle}:Props){

 
  
return (
  <>
    <div className="flex w-[90%] m-auto  align-middle justify-center mt-8 border shadow-sm p-2 rounded-lg ">
      <div className="flex flex-col align-center justify-end sm:h-[550px]"> 
      {urlLogo && <img className="self-center mb-4 w-15 sm:w-20 sm:mb-14 " src={urlLogo} alt="" />}
        
      {tittle && <p className="text-center font-bold  font-display text-2xl sm:mb-16">{tittle}</p>} 
        
        <div>
          <p className="font-content ">{description}</p>
         <div className="mt-2">Tecnologias Utilizadas:
           <p className="font-bold mb-4">{tecnologies}</p>
         </div>

         
         <a href={urlVercel}><img src={url} alt="Foto com a página inicial do projeto "className="rounded" /></a>
        </div>
        
   
      </div>
      
      
      
    </div>
  </>
)
}