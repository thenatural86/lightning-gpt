import ThemeToggle from './ThemeToggle'
import { SiOpenaigym } from 'react-icons/si'
import { BsCloudLightningFill } from 'react-icons/bs'

const SidebarHeader = () => {
  return (
    <div className='flex items-center mb-4 gap-4 px-4'>
      {/* <SiOpenaigym className='w-10 h-10 text-primary' /> */}
      <BsCloudLightningFill className='w-10 h-10 text-primary' />
      <h2 className='text-xl font-extrabold text-primary mr-auto'>
        LightningGPT
      </h2>
      <ThemeToggle />
    </div>
  )
}
export default SidebarHeader
