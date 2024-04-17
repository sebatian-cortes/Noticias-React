import React from 'react'

export const Section = ({ children }) => {
    return (
        <section className='bg-violet-400 border-slate-900 w-6/12 max-h flex justify-center'>
            {children}
        </section>
    )
}
