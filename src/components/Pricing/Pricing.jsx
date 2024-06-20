import { smallSphere, stars } from '../../assets'
import Heading from '../Heading/Heading'
import PricingList from '../PricingList/PricingList'
import Section from '../Section/Section'
import {LeftLine, RightLine} from '../design/Pricing'

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
         <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
            <img src={smallSphere} width={255} height={255} alt="Sphere" className='relative z-1' />
            <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                <img src={stars} alt="Stars" className='w-full' width={950} height={400}/>
            </div>
         </div>
         <Heading tag="Comece com o BrainWave" title="Pague uma vez, use para sempre" />

         <div className="relative">
             <PricingList />
             <LeftLine />
             <RightLine />
         </div>
         <div className='flex justify-center mt-10'>
            <a className="text-xs font-code font-bold tracking-wider uppercase border-b" href='/pricing'>Veja os detalhes completos</a>
         </div>
      </div>
    </Section>
  )
}

export default Pricing
