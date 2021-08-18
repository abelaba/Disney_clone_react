import React, {useEffect,useState } from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import {useDispatch} from 'react-redux';
import { setMovies } from "../features/movie/movieSlice";
import { AnimateSharedLayout, AnimatePresence,motion } from "framer-motion"



function Home(){

    const dispatch = useDispatch();
    const [selectedId, setSelectedId] = useState(null)
    
    const item = {
        "id":1,
        "title": "fsjdfjksdf",
        "subtitle":"slkdfjklsdfjklj",
    }

    useEffect(()=>{
        fetch("http://localhost:5000/api/movies")
        .then((res) => res.json())
        .then((data) => {
                console.log(data);
                dispatch(setMovies(data));
        });
        console.log(selectedId)
    },[dispatch])

    const items = [
    {   "id":1,
        "title": "title",
        "subtitle":"subtitle",
    },
    {   "id":2,
        "title": "title2",
        "subtitle":"subtitle2",
    }
    ]

    return <div>
                <Container>
                    <ImgSlider/>
                    <Viewers/>
                    <Movies/>
                
 
                    
                
                    
 
           
                </Container>
           </div>
}

export default Home;


const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before{
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    

`