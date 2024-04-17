import React from 'react'

export const Section = ({ children, style }) => {
    return (
        <section className={style}>
            {children}
        </section>
    )
}
