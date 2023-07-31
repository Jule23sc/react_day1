import React from 'react'
import './Home.scss'
import Head from '../components/Head';
import FirstSection from '../components/FirstSection';
import Footer from '../components/Footer';

function Home() {
    return (  
        <div>
            <Head/>
            <FirstSection/>
            <Footer/>
        </div>
    );
}

export default Home;