import React from 'react';
import './app.scss';
import Header from "../header/header.jsx";
import About from "../about/about.jsx";
import Team from "../team/team.jsx";
import Services from "../services/services.jsx";
import Partfolio from "../partfolio/partfolio.jsx";
import Contacts from "../contacts/contacts.jsx";
import Charts from "../charts/charts.jsx";
import Footer from "../footer/footer.jsx";

const App = () => {
    return (
        <div>
            <div className="container">
                <Header/>
                <About/>
                <Team/>
                <Services/>
                <Partfolio/>
                <Charts/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
};

export default App;