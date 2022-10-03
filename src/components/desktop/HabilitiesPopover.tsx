import * as Popover from '@radix-ui/react-popover';
import {X, XCircle} from 'phosphor-react'
interface Props{
  url:string;
  alt:string;
  popoverContent:string;
  tec:string
}

export default function HabilitiesPopover({url,alt,popoverContent,tec}:Props){
  return(
    <>
    <Popover.Root >
      <Popover.Trigger className='relative'>
        <div>
            <img src={url} alt={alt} className='w-20 h-20' />
        </div> 
        </Popover.Trigger>  
        <Popover.Content className='w-60 h-fit bg-zinc-50 border rounded z-10'>
        <Popover.Close className=' p-[2px] absolute right-1 top-1 hover:bg-zinc-200 hover:rounded-full '>
          <X size={17} color="black"/>
        </Popover.Close>
        <div className='p-2 flex flex-col justify-center items-center '>
          <p className='font-bold font-display '>{tec}</p>
          <p className='text-xs'>{popoverContent}</p>

        </div>
        <Popover.Arrow />
      </Popover.Content>
    
  </Popover.Root>
    
  </>
  )
}