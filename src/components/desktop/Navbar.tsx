
import { Link } from 'react-scroll'

export default function Navbar(){
  return(
    <nav className='font-display text-zinc-300 flex gap-4 '>
      
     <Link to="projetosRef" spy={true} smooth={true} offset={-100} duration={500} className='hover:text-zinc-50  hover:border-b-zinc-50 hover:cursor-pointer  border border-transparent '>
          Projetos
      </Link>
      <Link to="sobreRef" spy={true} smooth={true} offset={-100} duration={1300} className='hover:text-zinc-50 hover:border-b-zinc-50 hover:cursor-pointer  border border-transparent'>
       Sobre
      </Link>
    </nav>
  )
}