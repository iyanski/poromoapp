import '../styles/globals.css'
import { ItemsProvider } from "../context/items";
function App({ Component, pageProps }) {
  return(
    <ItemsProvider>
      <Component {...pageProps} />
    </ItemsProvider>
  )
}

export default App
