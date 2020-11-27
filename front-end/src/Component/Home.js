import React, {Component, useRef, useState} from 'react';
import Footer from './Footer.js';
import axios from 'axios';
import Header from './Header.js';
import { Button } from 'react-bootstrap'


export default function Home(){
    const locationRef = useRef()

    function findlocations(e) {
        console.log(locationRef.current.value)
    }

    return (
    <div className="App">
        <Header></Header>
        <div className = "header">
            <form onSubmit={findlocations}>
                <div className = "form-box">
                    <input type = "text" className = "search-field1" 
                    placeholder = "Enter the address" ref={locationRef}></input>
                    <input type = "date" className = "search-field" 
                    placeholder = "Check in date"></input>
                    <input type = "date" className = "search-field" 
                    placeholder = "Check out date"></input>
                    <a className = "search-btn" href="#">
                        <Button className="w-100 btn" type="submit">Search Parking!</Button>
                    </a>
                </div>
            </form>
            <h1 className = "para">Park N'Go</h1>
            <button className = "explore" type = "button">Explore nearby locations</button>
        </div>
            <div className="services">
                <div className="container">
                    <div className="firstrow row">
                        <div className="icon col-md-5">
                            <img src="images/search.png" alt="" />
                        </div>
                        <div className="searchPara col-md-7">
                            <h2>Search</h2>
                        Ease your search for parkings in busy areas like donwtown by searching for parking-slots including residents' driveways
                        </div>
                    </div>
                    <div className="secondrow row">
                        <div className="bookPara col-md-7">
                            <h2>Book</h2>
                        Book for your parking spot at a nearby driveway at a convenient location
                        </div>
                        <div className="icon col-md-5">
                            <img src="images/book1.png" alt="" />
                        </div>
                    </div>
                    <div className="thirdrow row">
                        <div className="icon col-md-5">
                            <img className = "cashh" src="images/cash.png" alt=""/>
                        </div>
                        <div className="budgetPara col-md-7">
                            <h2>Book</h2>
                        Get a budget friendly parking spot for a longer period of time
                        </div>
                    </div>
                </div>
            </div>
        <div className="cities">
        <h3 className="city"> Featured Cities</h3>
        <div className="imageTor">Toronto</div>
        <div className="imageOta">Ottawa</div>
        <div className="imageVan">Vancover</div>
        <div className="imageAlb">Alberta</div>
        <div className="imageMon">Monteral</div>
        <div className="imageQue">Quebec</div>
        </div>
        
    </div>
    );
}