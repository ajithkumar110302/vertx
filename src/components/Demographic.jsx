import React from 'react'
import CardContainer from './ui/CardContainer'
import CountryIndicators from './CountryIndicators'
import CountryProgress from './CountryProgress'
import PingDot from './ui/PingDot'
import OutlineButton from './ui/OutlineButton'
import { insightsOptions } from '../utils/data'

const Demographic = () => {
  return (
    <CardContainer Classname='h-auto'>
        <div className='w-full h-full lg:grid grid-cols-12 gap-4 pb-10 md:pb-0'>
            {/* map */}
            <div className='relative col-span-8'>
                <h1 className='text-xl font-semibold'>Demographics</h1>
                <div className='relative w-full h-full mt-10 lg:mt-0'>
                    <div className='absolute -top-8 lg:top-4 left-0'>
                        <OutlineButton value={insightsOptions[0]} options={insightsOptions} />
                    </div>
                    <img src="/map2.svg" alt="map_image" className='w-full h-auto object-cover'/>
                    <PingDot  top={25} left={5} color="bg-orange" bColor="border-orange"/>
                    <PingDot  top={20} left={20} color="bg-sandal" bColor="border-sandal"/>
                    <PingDot  top={30} left={18} color="bg-orange" bColor="border-orange"/>
                    <PingDot  top={30} left={60} color="bg-green" bColor="border-green"/>
                    <PingDot  top={35} left={70} color="bg-blue" bColor="border-blue"/>
                </div>
                <div className='hidden md:block absolute bottom-0 left-0 right-0 z-10'>
                    <CountryIndicators />
                </div>
            </div>

            {/* countries */}
            <div className='col-span-4 h-full'>
                <CountryProgress />
            </div>
        </div>
    </CardContainer>
    )
}

export default Demographic
