import { FundButton } from '@coinbase/onchainkit/fund';
 
export default function FundComponent() {
  
  return <FundButton 
    className='bg-slate-200 font-sans text-black text-md text-semibold hover:bg-purple-500 hover:text-white' 
    text={"Fund"}
    hideText={false}
    hideIcon={true}
    />;
}
