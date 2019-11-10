import React from 'react';
import Browsing from '../../components/browsing/Browsing';
import Layout from '../../components/layout/Layout';
import CarouselCustom from '../../components/carouselCustom/CarouselCustom';
import './Landing.css';

class Landing extends React.Component {
    render(){
        return (
            <Layout>
                <div className="text">
                    Find you perfect trip, designed by insiders who know and love their cities
                </div>
                <Browsing />
                <CarouselCustom />
            </Layout>          
        )
    }
}

export default Landing;