import Head from 'next/head'
import AppContainer from '../components/AppContainer';
import News from '../components/News';

export default function Home() {
  return (
    <div className="">
      <AppContainer 
        title={"Grinntech | News"}
        childeren={News}
        />
    </div>
  )
}
