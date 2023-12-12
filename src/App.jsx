import React from 'react';
import './App.css';
import ryzen5 from './assets/amd-ryzen-5.jpeg';
import ryzen7 from './assets/amd-ryzen-7.jpeg';
import memoria from './assets/memoria-ram-fury.jpeg';
import gabinete from './assets/gabinete-xigmatek.jpeg';
import mother from './assets/motherboard-asus.jpeg';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import CardProduct from './components/CardProduct/CardProduct';
import ItemPromotion from './components/ItemPromotion/ItemPromotion';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <NavBar />
                <ItemPromotion />
                <div className='div-productos' style={{margin:"auto", width:"100%"}}>
                    <CardProduct name="amd-ryzen-5" precio="2000" cuotas="" img={ryzen5}/>
                    <CardProduct name="amd-ryzen-7" precio="" cuotas="" img={ryzen7}/>
                    <CardProduct name="memoria-ram-fury" precio="" cuotas="" img={memoria}/>
                    <CardProduct name="gabinete-xigmatek.jpeg" precio="" cuotas="" img={gabinete}/>
                    <CardProduct name="motherboard-asus" precio="" cuotas="" img={mother}/>
                </div>
                <Footer />
            </div>
        );
    }
}
export default App;
