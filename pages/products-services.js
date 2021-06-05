import Head from 'next/head'
import AppContainer from '../components/AppContainer';
import ProductsServices from '../components/ProductsServices';

export default function Home() {
  return (
    <div className="">
      <AppContainer 
        title={"Grinntech | Products & Services"}
        childeren={ProductsServices}
        />
    </div>
  )
}
