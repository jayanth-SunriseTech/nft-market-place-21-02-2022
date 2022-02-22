import React from 'react'
import ArtReflection from '../ArtReflection/ArtReflection'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import JoinIndi from '../JoinIndi/JoinIndi'
import OurCollections from '../OurCollections/OurCollections'
import ResourcesStarted from '../ResourcesStarted/ResourcesStarted'
import SellNFTs from '../SellNFTs/SellNFTs'
import TodaysPick from '../TodaysPick/TodaysPick'
import TopCollectionsList from '../TopCollectionsList/TopCollectionsList'
import TopTrending from '../TopTrending/TopTrending';
import './Home.css'

function Home() {
  return (
    <div className='home_page'>
        <section>
        <Banner/>
        </section>
        <section>
    <ArtReflection/>
        </section>
        <section>
    <OurCollections/>
        </section>
        <section>
    <TopTrending/>
        </section>
        <section>
    <TodaysPick/>
        </section>
        <section>
    <TopCollectionsList/>
        </section>
        <section>
    <SellNFTs/>
        </section>
        <section>
    <ResourcesStarted/>
        </section>
        <section>
    <JoinIndi/>
        </section>
        <section>
    <Footer/>
        </section>
    </div>
  )
}

export default Home