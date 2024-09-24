import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'

export default async function FooterServer() {

  const payload = await getPayloadHMR({config})

  const footer = await payload.findGlobal({
    slug: 'footer',
    depth: 2
  })

  return (
    <div className='bg-green-300 border-t border-t-green-500'>
      <div className='flex justify-between max-w-5xl mx-auto py-12 items-center w-full'>
        <div className='relative w-64 h-20'>
      <Image alt={typeof footer.logo === 'number' ? '' : footer.logo?.alt} src={typeof footer.logo === 'number' ? '' : footer.logo.url || ''} fill className='object-contain'/>
      </div>
      {footer.copyrightNotice}
      <div>
        {footer.nav.map((item, index) => {
          return(
            <Link key={index} href={item.link || ''} className='text-white mx-4'>{item.label}</Link>
          )
        })}
      </div>
      </div>
    </div>
  )
}
