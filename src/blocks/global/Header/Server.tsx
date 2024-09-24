import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'

export default async function HeaderServer() {

  const payload = await getPayloadHMR({config})

  const header = await payload.findGlobal({
    slug: 'header',
  })

  // console.log(header);

  return (
    <div className='bg-gray-500'>
      <div className='flex justify-between max-w-5xl mx-auto py-12 items-center w-full'>
        <div className='relative w-64 h-20'>
        <Image alt={typeof header.logo === 'number' ? '' : header.logo?.alt} src={typeof header.logo === 'number' ? '' : header.logo.url || ''} fill className='object-contain'/>
      </div>
      <div>
        {header.nav.map((item, index) => {
          return(
            <Link key={index} href={item.link || ''} className='text-white mx-4'>{item.label}</Link>
          )
        })}
      </div>
      </div>
    </div>
  )
}
