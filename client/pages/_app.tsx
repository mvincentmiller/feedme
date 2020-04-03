import App from 'next/app'
import '../styles/base.scss'
import { StoreProvider } from '../components/Store'




class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div className="container">
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
      </div>
    )
  }
}

export default MyApp
