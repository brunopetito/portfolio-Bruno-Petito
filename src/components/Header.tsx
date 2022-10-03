import elipseURL from '../assets/elipse.svg'
import Navbar from './desktop/Navbar'
function Header(){
 
  return(
    
    <div className='sm:bg-zinc-800 xl:m-auto sm:border-b '>
    <div className="flex w-full sm:items-center justify-center relative sm:max-w-7xl sm:h-24  px-20 sm:justify-between xl:m-auto">
      <img src={elipseURL} className="absolute -z-10 sm:hidden"/>
      
      <div className='hidden sm:block text-zinc-50  ' >
        <p>Logo</p>
      </div>
      <div className='hidden sm:block  '>
        <Navbar/>
      </div>
     
    </div>
    <div className='flex w-full justify-center pt-4 sm:hidden'>
        <p className='text-zinc-50 font-display text-xl'>Bruno Petito</p>
        
    </div>
    
    </div>
  )
}
export default Header