import Head from 'next/head'
import AppContainer from '../components/AppContainer';
import Career from '../components/Career';

export default function Home() {
  return (
    <div className="">
      <AppContainer 
        title={"Grinntech | Join Us"}
        childeren={Career}
        />
    </div>
  )
}
