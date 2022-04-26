import {Layout} from "./common"
import {wrapper} from '../redux/store.ts'
import App from "next/app"
import Head from "next/head"
import { useState, useEffect } from "react"
// import './user/style/UserLayout.scss'
// import "./user/style/UserRegister.scss"
const MyApp = ({ Component, pageProps }) => { // props
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  })
  if (!showChild) { return null }
  return (<>
    <Head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      <title>Soccer App</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>)
  App.propTypes = {
    Component : propTypes.elementType.isRequired, // JSX
    pageProps : PropTypes.any.isRequired // {}, []
  }
}
export default wrapper.withRedux(MyApp)