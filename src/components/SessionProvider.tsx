"use client";

import  { ReactNode } from 'react'
import { SessionProvider as Provider } from "next-auth/react"


type SessionProviderProps = {
  children: ReactNode
}

const SessionProvider = ({children}: SessionProviderProps) => {
  return (
    <Provider>{children}</Provider>
  )
}

export default SessionProvider