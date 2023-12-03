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
          Console Log:
        </p>
        <p className={`text-sm`}>
        - Nikto v2.1.6<br/>
---------------------------------------------------------------------------<br/>
+ Target IP: 192.168.1.1<br/>
+ Target Hostname: example.com<br/>
+ Target Port: 80<br/>
+ Start Time: 2023-12-04 15:30:00<br/>
---------------------------------------------------------------------------<br/>
+ Server: Apache/2.4.29 (Ubuntu)<br/>
+ The anti-clickjacking X-Frame-Options header is not present.<br/>
+ The X-XSS-Protection header is not defined. This header can hint to the user agent to protect against some forms of XSS<br/>
+ The X-Content-Type-Options header is not set. This could allow the user agent to render the content of the site in a different fashion to the MIME type<br/>
+ Server may leak inodes via ETags, header found with file /robots.txt, inode: 123456, size: 5678, mtime: -456<br/>
+ Uncommon header 'x-ob_mode' found, with contents: 1<br/>
+ Apache/2.4.29 appears to be outdated (current is at least Apache/2.4.37). Apache 2.2.34 is the EOL for the 2.x branch.<br/>
+ Web Server returns a valid response with junk HTTP methods, this may cause false positives.<br/>
+ Allowed HTTP Methods: GET, HEAD, POST, OPTIONS<br/>
+ OSVDB-3233: /icons/README: Apache default file found.<br/>
+ 7919 requests: 0 error(s) and 9 item(s) reported on remote host<br/>
+ End Time: 2023-12-04 15:45:00<br/>
+ (Nikto took 15 minutes to complete the scan)<br/>
---------------------------------------------------------------------------<br/>
+ 1 host(s) tested<br/>

        </p>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Report{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Generate an in-depth report about the PenTesting process.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Dashboard{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Analyze your PenTesting results in a dashboard.
          </p>
        </a>
        </div>
    </main>
  )
}