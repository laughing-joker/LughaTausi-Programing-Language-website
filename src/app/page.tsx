import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
           
           
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert w-40 h-30 rounded"
          src="/c.jpg"
          
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
         
        >
          <h2 className="mb-3 text-2xl font-semibold transition duration-200 ease-in-out hover:text-blue-500 cursor-pointer">
            Maelezo{" "}
           
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Pata maelezo ya kina kuhusu vipengele vya LughaTausi.
          </p>
        </a>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          
        >
          <h2 className="mb-3 text-2xl font-semibold hover:text-blue-500 transition duration-200 ease-in-out">
            Jifunze{" "}
            
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Jifunze kuhusu LughaTausi katika kozi shirikishi na&nbsp;maswali!
          </p>
        </a>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          
        >
          <h2 className="mb-3 text-2xl font-semibold hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer">
          Violezo{" "}
            
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Gundua violezo vya kuanza kwa LughaTausi.
          </p>
        </a>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          
        >
          <h2 className="mb-3 text-2xl font-semibold hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer">
          Weka{" "}
            
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
          Sambaza tovuti yako ya LughaTausi kwa maoni zaidi.
          </p>
        </a> 
      </div> 
      <div className="flex items-center justify-center  bg-gray-100">
      <button className="px-6 mt-12 py-3 font-semibold text-black bg-green-300 rounded hover:bg-blue-400 transition duration-300 ease-in-out curser-pointer">
       Pakua &nbsp; LughaTausi
      </button>
    </div>
    </main> 
  );
}
