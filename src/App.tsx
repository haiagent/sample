import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/main.css';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-white">
                <Header />
                <main className="flex-1">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
