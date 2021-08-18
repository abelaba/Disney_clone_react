import React,{useState} from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";
import { AnimateSharedLayout, AnimatePresence,motion } from "framer-motion"



function Movies() {

    const movies = useSelector(selectMovies);
    const [selectedId, setSelectedId] = useState(null)
    const [item,setItem] = useState()

    const wrapVariants = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                delay:1,
                duration:1
            }
        },
        hover:{
            scale:1.1,
            type:"spring",
            transition:{
                duration:1,
            }
        }
       
    }

    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                {movies && 
                    movies.map((movie)=>{
                        return <Wrap variants={wrapVariants} initial="hidden" animate="visible" whileHover="hover" key={movie._id}>
                        <Link to={`/detail/${movie._id}`}>
                            <img alt=""  src={movie.cardImg} />
                        </Link>
                        </Wrap>
                    })
                }



            </Content>
        </Container>
    )
}

export default Movies;


const Container = styled.div`
    padding
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4,minmax(0,1fr));
`

const Wrap = styled(motion.div)`
    border: 3px solid rgba(249,249,249,0.10);
    border-radius: 10px;
    box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
    rgb(0 0 0/ 73%) 0px 16px 10px -10px; 
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        box-shadow: rgb(0 0 0/ 80%) 0px 40px 58px -16px,
        rgb(0 0 0/ 72%) 0px 30px 22px -10px; 
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`
