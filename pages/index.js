import Head from 'next/head'
import Image from 'next/image'
import MessengerCustomerChat from 'react-messenger-customer-chat';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <h1>FB Chat App</h1>
     <MessengerCustomerChat
      pageId="106303965448172"
      appId="360067684610253"
    />
    </>
     )
}
