import React from 'react'
import Header from '@/components/Header'

const layout = async ({children}: {children: React.ReactNode}) => {
  return (
    <main className=''>
        <div className='mx-auto '>
            <Header />
            <div className='mt-20 pb-20'>
            {children}
            </div>
        </div>
    </main>
  )
}

export default layout