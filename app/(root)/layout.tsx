import React, { Children, ReactNode } from 'react'

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
        nav
        {children}
        footer
    </main>
  )
}

export default RootLayout