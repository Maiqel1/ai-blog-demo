import { serializeLexical } from '@/utils/serialize'
import React from 'react'

export default function RichTextBlockServer({content} : {content: any}) {
  return (
    <div>
        <div className='richText max-w-5xl mx-auto'>
            {serializeLexical({nodes: content.root.children})}
        </div>
    </div>
  )
}
