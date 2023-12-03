"use client"

import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col lg:items-start items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl bg-black from-inherit lg:static lg:w-auto lg:rounded-xl lg:p-4">
          Autonomous Raid Specialist Engine (ARSE)
        </p>
      </div>
      <div id="ip-input-field" className="group rounded-lg border border-transparent px-5 py-4 transition-colors">
        <p className={`text-sm opacity-50`}>
          Enter the IP address that you would like to penetration test:
        </p>
        <input
          type="text"
          className={`mb-3 text-2xl font-semibold outline-none border-none bg-transparent mt-4`}
          placeholder="Type here"
          onKeyDown={event => {
            if (event.key === 'Enter') {
              router.push('/console');
            }
          }}
        />
      </div>
      <div></div>
    </main>
  )
}