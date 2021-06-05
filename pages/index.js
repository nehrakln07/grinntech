import Head from 'next/head'
import AppContainer from '../components/AppContainer';
import HomeComponent from '../components/HomeComponent';

export default function Home() {
  return (
    <div className="">
      <AppContainer 
        title={"Grinntech | Lithium-ion Battery Manufacturer"}
        childeren={HomeComponent}
        />
    </div>
  )
}
