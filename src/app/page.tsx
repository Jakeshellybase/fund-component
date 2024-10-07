'use client';
import Footer from 'src/components/Footer';
import { useAccount } from 'wagmi';
import { ONCHAINKIT_LINK } from 'src/links';
import OnchainkitSvg from 'src/svg/OnchainkitSvg';
import FundComponent from 'src/components/FundComponent';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import TransactionComponent from 'src/components/TransactionComponent';

export default function Page() {
  const { address } = useAccount();

  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
      <section className="mt-6 mb-6 flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-0">
          <a
            href={ONCHAINKIT_LINK}
            title="onchainkit"
            target="_blank"
            rel="noreferrer"
          >
            <OnchainkitSvg />
          </a>

          <div className="flex items-center gap-3">
            <SignupButton />
            {!address && <LoginButton />}
            {address && <FundComponent />}
          </div>
        </div>
      </section>
      <section 
        className='flex flex-col items-center justify-center'
        style={{ height: '760px' }}
      >
      
      {/* NFT display section */}
      <section className="SkuSection flex w-full flex-col items-center justify-center rounded-xl px-2 py-4 md:grow">
        <div className='flex flex-col items-center justify-center py-4'>
          <img src="./image.png" alt="merch" className="w-full max-w-lg rounded-xl border-2 border-gray-100" />
          {address && <TransactionComponent address={address} />}
        </div>
      </section>
  
      </section>
      <Footer />
    </div>
  );
}
