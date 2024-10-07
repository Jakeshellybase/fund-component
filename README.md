<p align="center">
  <picture>
<img width="1478" alt="Screenshot 2024-10-07 at 7 02 36 PM" src="https://github.com/user-attachments/assets/0b04ea44-c1d2-44c3-bc43-b82d772e7eec">
  </picture>
</p>

# Onchain Fund Component Demo

This is a demo application showcasing the use of OnchainKit's Fund component, built with [OnchainKit](https://onchainkit.xyz), and ready to be deployed to Vercel.

Explore the demo live at [https://fund-component.vercel.app](https://fund-component.vercel.app).

Have fun! ⛵️

<br />

## Setup

To ensure all components work seamlessly, set the following environment variables in your `.env` file using `.env.local.example` as a reference.

You can find the API key on the [Coinbase Developer Portal's OnchainKit page](https://portal.cdp.coinbase.com/products/onchainkit). If you don't have an account, you will need to create one. 

```sh
# See https://portal.cdp.coinbase.com/products/onchainkit
NEXT_PUBLIC_CDP_API_KEY="GET_FROM_COINBASE_DEVELOPER_PLATFORM"

# See https://cloud.walletconnect.com
NEXT_PUBLIC_WC_PROJECT_ID="GET_FROM_WALLET_CONNECT"
```
<br />

## Using the FundButton Component

The `<FundButton />` component provides a way for users to fund their wallet without leaving your app. It automatically detects the user's wallet type (EOA vs Smart Wallet) and directs them to the appropriate funding URL.

- **Coinbase Smart Wallet**: Provides access to the Coinbase Smart Wallet Fund flow, allowing users to buy and receive crypto or use their Coinbase balances onchain with Magic Spend.
- **EOA Wallets**: Provides access to Coinbase Onramp, enabling users to buy crypto using a fiat payment method or transfer existing crypto from their Coinbase account.

### Walkthrough

1. **Get your Project ID**: Obtain your Project ID from the Coinbase Developer Platform Dashboard.
2. **Add your Project ID to your `.env` file**:
   ```sh
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=YOUR_PUBLIC_API_KEY
   NEXT_PUBLIC_CDP_PROJECT_ID=YOUR_CDP_PROJECT_ID
   ```
3. **Add Project ID to OnchainKitProvider**:
   ```jsx
   <OnchainKitProvider
     apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY} 
     projectId={process.env.NEXT_PUBLIC_CDP_PROJECT_ID}
     chain={base}
   >
     {props.children}
   </OnchainKitProvider>
   ```
4. **Drop in the `<FundButton />` component**:
   ```jsx
   import { FundButton } from '@coinbase/onchainkit/fund';
   
   <FundButton />
   ```

### Troubleshooting

If you encounter a "something went wrong" error when navigating to pay.coinbase.com, ensure "enforce secure initialization" is disabled on the Onramp config page in the Coinbase Developer Platform Dashboard.

### Customizing the Funding Experience

You can customize the Coinbase Onramp experience by providing your own Onramp URL to the `<FundButton />` component. Use the `getOnrampBuyUrl` utility to generate a tailored Coinbase Onramp URL.

```jsx
import { FundButton, getOnrampBuyUrl } from '@coinbase/onchainkit/fund';
import { useAccount } from 'wagmi';

const projectId = 'YOUR_CDP_PROJECT_ID';
const { address } = useAccount();

const onrampBuyUrl = getOnrampBuyUrl({
  projectId,
  addresses: { address: ['base'] },
  assets: ['USDC'],
  presetFiatAmount: 20,
  fiatCurrency: 'USD'
});

<FundButton fundingUrl={onrampBuyUrl} />
```

You can choose to have the funding URL open in a popup or a new tab using the `openIn` prop.

```jsx
<FundButton openIn={"tab"} />
```

### Customizing the Fund Button

Override the text on the fund button using the `text` prop, and hide the icon with the `hideIcon` prop.

```jsx
<FundButton text="Onramp" hideIcon={true} />
```

Hide the text with the `hideText` prop.

```jsx
<FundButton hideText={true} />
```

See `FundButtonReact` for the full list of customization options.

<br />

## Locally run

```sh
# Install bun in case you don't have it
curl -fsSL https://bun.sh/install | bash

# Install packages
bun i

# Run Next app
bun run dev
```
<br />

## Resources

- [OnchainKit documentation](https://onchainkit.xyz)
- We use the [OnchainKit Early Adopter](https://github.com/neodaoist/onchainkit-early-adopter) contract written by neodaoist [[X]](https://x.com/neodaoist)

<br />

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Need more help?

If you have any questions or need help, feel free to reach out to us on [Discord](https://discord.gg/8gW3h6w5) 
or open a [Github issue](https://github.com/coinbase/onchainkit/issues) or DMs us 
on X at [@onchainkit](https://x.com/onchainkit), [@zizzamia](https://x.com/zizzamia), [@fkpxls](https://x.com/fkpxls).
