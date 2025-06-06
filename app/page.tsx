'use client';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router=useRouter();

  const openInNewTab=(path:string)=>{
    window.open(path,'_blank','noopener,noreferrer');
  };

  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-7xl text-pink-300">Study Toolkit</h1>

      <div className="p-16 flex gap-16 justify-center flex-wrap">
        <button onClick={()=>openInNewTab('/Stopwatch')}>
          Stopwatch
        </button>
        <button onClick={()=>openInNewTab('/Todo')}>
          To-Do List
        </button>
      </div>
      <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
      © 2025 Study Toolkit · Built with 💖 by{' '}
      <a
        href="https://github.com/ipsita675"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400"
      >
        Ipsita Pandey
      </a>
    </footer>
    </main>
  );
}
