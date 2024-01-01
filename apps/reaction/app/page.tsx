'use client'
import { Button, ModeToggle, Navigation } from '@org-force/ui'
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
      <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 top-0 z-50 w-full border-b backdrop-blur">
        <Navigation />
      </header>

      <main className="flex-1">
        <div className="container relative">
          <ModeToggle />
          <Button>test</Button>
          <div className="h-[2000px]">asd</div>
          <Suspense>
            <TestComponent />
          </Suspense>
        </div>
      </main>
    </>
  )
}

function TestComponent() {
  // const [_data] = useGetUsersQuery()
  return (
    <main>
      <h1 className="font-mono">This is rendered as part of SSR</h1>
      <h1 className="font-sans">This is rendered as part of SSR</h1>
    </main>
  )
}
