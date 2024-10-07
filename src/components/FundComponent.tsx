import { FundButton } from '@coinbase/onchainkit/fund';
 
export default function FundComponent() {
  
  return <FundButton 
    className='bg-slate-300 font-sans text-black text-md hover:bg-purple-500' 
    // text={"Buy Crypto"}
    hideText={true}
    hideIcon={false}
    />;
}
