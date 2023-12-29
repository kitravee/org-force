'use client'
import { useSession } from 'next-auth/react'

export const ComponentTest = () => {
  const data = useSession()
  console.log(data)
  return null
}
