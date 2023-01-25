import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about.js';
import Events from './pages/events.js';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Table from "./components/Table/table.js";

import NewObject from "./components/NewObject/NewObject";
import Button from "./components/Button/Button"

function App() {

    return (
        <div>

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' exact component={Home()} />
                    <Route path='/about' component={About()} />
                    <Route path='/events' component={Events()} />
                    <Route path='/annual' component={AnnualReport()} />
                    <Route path='/team' component={Teams} />
                    <Route path='/blogs' component={Blogs} />
                    <Route path='/sign-up' component={SignUp} />
                </Routes>
            </BrowserRouter>
            <Table></Table>


            <Button></Button>

        </div>

    );
}

export default App;
