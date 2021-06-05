import Head from 'next/head'
import AppContainer from '../components/AppContainer';
import AboutUs from '../components/AboutUs';

export default function Home() {
  return (
    <div className="">
      <AppContainer 
        title={"Grinntech | About Us"}
        childeren={AboutUs}
        />
    </div>
  )
}
