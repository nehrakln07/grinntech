import Head from 'next/head'
import AppContainer from '../components/AppContainer';
import ContactUs from '../components/ContactUs';

export default function Home() {
  return (
    <div className="">
      <AppContainer 
        title={"Grinntech | Contact Us"}
        childeren={ContactUs}
        />
    </div>
  )
}
