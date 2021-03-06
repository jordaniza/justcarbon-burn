import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiProvider, createClient } from 'wagmi'
import { providers } from '../connectors'
import { Provider as ReduxProvider } from "react-redux";
import store from 'store'

const client = createClient({
  provider() {
    return process.env.NODE_ENV === 'development' ? providers.LOCAL : providers.MAINNET;
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store} >
      <WagmiProvider client={client}>
        <Component {...pageProps} />
      </WagmiProvider>
    </ReduxProvider>
  )
}

export default MyApp
