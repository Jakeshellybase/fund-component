'use client';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation'; 

export default function AboutPage() {
    const router = useRouter();

    return (
        <>
            <Header />
            <section className='flex h-auto flex-col items-center justify-center rounded-xl bg-transparent px-2 py-4 font-sans md:h-[780px] md:grow'>
                <div className='flex flex-col items-center justify-center py-4'>
                    <h1 className='font-bold text-2xl'>About OnchainKit</h1>
                    <p className='mt-4 max-w-[480px] text-center'>
                        OnchainKit is your go-to solution for building beautiful onchain applications, regardless of your development experience.
                    </p>
                    <p className='mt-4 max-w-[480px] text-center'>
                        In contrast with traditional front-end libraries, the front-end framework we create comes with a powerful backend out of the box — <a href='https://base.org' className='text-purple-500 hover:text-purple-600' target='_blank' rel='noreferrer'>Base chain</a>, built on Ethereum and the Superchain.
                    </p>
                    <p className='mt-4 max-w-[480px] text-center'>
                        Any developer will be able to build a beautiful, powerful, and monetizable application onchain in 15 minutes, with one command.
                    </p>
                    
                    <button 
                        type="button" 
                        className='mt-4 flex items-center text-black hover:text-purple-600'
                        onClick={() => router.push('/')} 
                    >
                        <ArrowLeft className='mr-2' /> Go back
                    </button>
                </div>
            </section>
            <Footer />
        </>
    );
}