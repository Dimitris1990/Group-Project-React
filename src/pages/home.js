import React,{useState} from 'react';
import Navbar from '../components/Navbar';
import Dropdown from '../components/Dropdown';
import Banner from '../components/Banner';
import Info from '../components/Info';
import { homeObjectOne,homeObjectTwo,homeObjectThree } from '../components/Info/Data';
import Market from '../components/Market';
import Footer from '../components/Footer';

function Home() {
    const[isOpen,setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Banner />
            <Info {...homeObjectOne}/>
            <Info {...homeObjectTwo}/>
            <Market />
            <Info {...homeObjectThree}/>
            <Footer />
        </>
    )
}

export default Home;
