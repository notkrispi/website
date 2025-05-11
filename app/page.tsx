import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import {lusitana} from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      <p className= {`${lusitana.className} pi text-color-yellow height- 30px width-40px bg-color-black`}>hello Everyone</p>
      <Image 
      src="/hero-desktop.png"
      width={1000}
      height={760}
      className="hidden md:block"
      alt="screenshots of the dashbboardd showing desktop version"
      />
      <Image
        src="/hero-mobile.png"
        width={560}
        height={620}
        className="block md:hidden"
        alt="screenshots of the mobile image"
      />
       </div>

    </main>
  );
}
