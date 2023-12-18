'use client'
import { ModeToggle } from '@org-force/ui'
import { Suspense } from 'react'

// const { api } = webEnv

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */

  return (
    <>
      <ModeToggle />

      <Suspense>
        <TestComponent />
      </Suspense>
    </>
  )
}

function TestComponent() {
  // const [_data] = useGetUsersQuery()
  return (
    <main>
      <h1>This is rendered as part of SSR</h1>
    </main>
  )
}
