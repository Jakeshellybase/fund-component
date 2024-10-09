'use client';

import { useAccount } from 'wagmi';
import OnchainkitSvg from 'src/svg/OnchainkitSvg';
import FundComponent from 'src/components/FundComponent';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import { ONCHAINKIT_LINK } from 'src/links';
import { Info } from 'lucide-react'; 
import { useRouter } from 'next/navigation';

export default function Header() {
    const { address } = useAccount();
    const router = useRouter(); 

    return (
      <div className='flex w-full max-w-[1200px] flex-col overflow-visible px-1 md:w-[1008px]'>
        <section className="mt-6 mb-6 flex w-full flex-col md:flex-row">
          <div className='relative flex w-full flex-col items-center justify-between gap-2 md:flex-row md:justify-end md:gap-0'>
            <a
              href={ONCHAINKIT_LINK}
              title="onchainkit"
              target="_blank"
              rel="noreferrer"
              className='mb-2 block md:hidden'
            >
              <OnchainkitSvg />
            </a>
            <a
              href={ONCHAINKIT_LINK}
              title="onchainkit"
              target="_blank"
              rel="noreferrer"
              className="hidden md:block"
            >
              <OnchainkitSvg />
            </a>
  
            <div className='flex w-full items-center justify-center gap-x-2 md:justify-end'>
              <SignupButton />
              {!address && <LoginButton />}
              <FundComponent/>
              <button
                type="button"  
                className='ml-1 rounded-2xl border-gray-300 bg-purple-500 p-1 text-white'
                onClick={() => router.push('/about')} 
            >
                <Info size={24} />
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }