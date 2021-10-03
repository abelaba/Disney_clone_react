import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";

// import db from '../firebase'


function Detail() {

    // for getting id from a link 
    const { id } = useParams();
    const [movie, setMovie] = useState();

    useEffect(()=>{
       
        // Grab movieinfo from DB
        fetch("http://localhost:5000/api/movies")
        .then((res) => res.json())
        .then((data) => {
           
            data.forEach(element => {
                if(element._id === id){
                    setMovie(element);     
                }   
            })
        });
    },[id])

    return (
        <Container>
            
            {movie &&

                <><Background>
                    <img alt=""  src={movie.backgroundImg}/>
                </Background><ImageTitle>
                        <img alt=""  src={movie.titleImg}/>
                    </ImageTitle><Controls>
                        <PlayButton>
                            <img alt=""  src="/images/play-icon-black.png" />
                            <span>PLAY</span>
                        </PlayButton>
                        <TrailerButton>
                            <img alt=""  src="/images/play-icon-white.png" />
                            <span>TRAILER</span>
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupWatchButton>
                            <img alt=""  src="/images/group-icon.png" />
                        </GroupWatchButton>

                    </Controls><Subtitle>
                        {movie.subtitle}
                        
                    </Subtitle><Description>
                        {movie.description}
                    </Description></>





            }
            
        </Container>
    )
}

export default Detail


const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: calc(3.5vw + 5px);
    position: relative;

`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 60px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

`

const Controls = styled.div`
    display: flex;
    align-items: center;


`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background: rgb(198, 198, 198);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid background: rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`
const AddButton = styled.button`
    width: 44px;
    height: 44px;
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span{
        font-size: 30px;
        color: white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background-color: rgba(0, 0, 0);
`

const Subtitle = styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px; 


`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249);
    max-width: 760px;



`