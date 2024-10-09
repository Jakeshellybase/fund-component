'use client';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import { useAccount } from 'wagmi';
import TransactionComponent from 'src/components/TransactionComponent';

export default function Page() {
	const { address } = useAccount();
	
	return (
		<>
			<Header />
			<section className='NFTSection flex h-auto flex-col items-center justify-center rounded-xl bg-transparent px-2 py-4 md:h-[780px] md:grow'>
				<div className='flex flex-col items-center justify-center py-4'>
					<img src="./image.png" alt="merch" className='w-full max-w-xs rounded-xl border-2 border-gray-100 md:max-w-lg' />
					{address && <TransactionComponent address={address} />}
				</div>
			</section>		
			<Footer />
		</>
	);
}
