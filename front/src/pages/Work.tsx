import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>tochiman</title>
        <meta name="description" content="tochimanに関する情報などを載せてるサイトです" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
    </>
  )
}