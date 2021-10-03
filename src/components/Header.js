

import React, {useEffect} from 'react';
import styled from 'styled-components'
import { selectUserName, setUserLogin, setSignOut } from "../features/user/userSlice";
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";

function Header() {

    const history = useHistory();
    const userName = useSelector(selectUserName);
    
    const dispatch = useDispatch();
    const signIn = () =>{
        dispatch(setUserLogin(
            {
                name: "Abel",
                email: "abel@gmail.com"
            }
        ));
        history.push("/");
    
    }

    useEffect(()=>{


    },[])

    const signOut = () =>{
        dispatch(setSignOut());
        history.push("/login");
    }

    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
            {userName?
                <><NavMenu>
                    <a href>
                        <img src="/images/home-icon.svg" alt=""></img>
                        <span>HOME</span>
                    </a>
                    <a href>
                        <img src="/images/search-icon.svg" alt=""></img>
                        <span>SEARCH</span>
                    </a>
                    <a href>
                        <img src="/images/watchlist-icon.svg" alt=""></img>
                        <span>WATCHLIST</span>
                    </a>
                    <a href>
                        <img src="/images/original-icon.svg" alt=""></img>
                        <span>ORIGINALS</span>
                    </a>
                    <a href>
                        <img src="/images/movie-icon.svg" alt=""></img>
                        <span>MOVIES</span>
                    </a>
                    <a href>
                        <img src="/images/series-icon.svg" alt=""></img>
                        <span>SERIES</span>
                    </a>


                    </NavMenu>
                    <UserImg onClick={signOut} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBgVFRUYFhUYGhoYGBwWGBgYGhkaGhoZHBkYGhocIS4lHCwtIRgaJjgmKy8xQzU3GiU7QDs0Py40ODEBDAwMDw8QGhIRGDEdGCE0NDE0NDQ0MTE0NDQxNEA0MTQxNDExMTExMTE0Pz8xMTExMTExMTExMTQxMTExMTExMf/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAYCAwUHAQj/xAA9EAACAQMCAwUGAwgBBAMBAAABAgADBBESIQUxQQYTIlFhBzJxgZGhFEJSIzNygpKxwfBiotHh8VNzskP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAABMf/aAAwDAQACEQMRAD8A8ZiIgIiICIiAiIgIib7OkHdVY4DMAT5Z6wNETOqhVipGCCQR5EHBEwgIiICIiAiJvtaOpsHYYJJ8gBk/76wNEREBERAREQEREBERAREQEREBERAREQEREBJfD7VqhYL+VHc+gRSfucD5yJOjYV9CVG6sUT+XVrb/APCj5wMOIPrbvOrAaviBgn54kECS1BOVXfGfkM4nS4fTFOmbhhlixp0AeWsDLuR10gjHqfSBxVpsdgDN62FQjOmdK2x8+s6VNxpIMCtVLJ15rNDKRzEs1+wzgTnFirBlOGUgg+o/vA5AEnWq4Gn8zlU+AJH/AI+klcSt1IWrTXSlXPhHJKi++g9Oo9D6SEWIO+xGfrjb74gaa9Iq7Keakg/I4mqSb9tT6v1Kp+eAD9wZGgIiICIiAiIgIiICIiAiIgIiICIiAiIgJIo02bAHUn/ftI89J4BwNRbVXG7pw6pXb0ao3g+iU3/qgcyy4WqcPuK5Hj7+kmfJTT149N3H0Eh8eULSsKY5C2NU+rVXdifsPpOtZ1i9jd0RuQtOuo/+mppqn+h6fyE5vHPHa2FbHKm9s3o1JzpB+KtmByKT4m4v6yHnEO8CZUeRGbefC+Z8EDrUKebFz+i6p49NaMG/sJs7S8NCmiygDXa0nPqzu4yfkn2iopp8OpLuWubhqijG5Wkuhfq7bTq9oH13SUB+TubUYOf3YVGx8HeoPlAolVSMZ9f9+81y7e0LhKUq9xp5pdOMDolVFqr9C7D5SkwEREBERAREQEREBERAREQEREBERAREQE9bsOILb1gjL+zq2lGi4ONlbv1IPwYBT8DPKKKamVfMgfUy98XBa4fSw0rT089lBZHznkP2jb+QZj0gczg1+LW4RnGtFLU6o/XTZSlQfNGDAeaTsW3D0ptX4VXdQlZlr2Vc+4XI/Zvq5YdcKSOoIlT4grajnKtnfI6jP0I3E6/COOUHoracRRnoocUK1P8Ae2+rmB+tOuk8umdgA5XE+H1beo1KshSovMHqOjKfzA+YkJzPQ+IUXoUUS+H4/hzfubugQatLVywx3B5eBzjpk4xKx2g4B3ASrSrJcW1fV3NRPCx041JUQ7qwzy/9QOIJ1uA8DqXTkAhKKb1qrEKlNBuxLHbOOQkzhvBaCW6Xl5V0UHZlpUqRzWrlCQ/oigjBY/bIz3bizapbrVvmHDuGjejbUv3tY9CqHdiTzdvjgA5gRaV2lW4a9VcWXD0RLdGBHeVF/cJ8Wfxt5KN5yOz9cG6p1ah1BH71z+ooWcH+Z8n5SNx/jpuNFKigt7SlnuqSnO52NR25ux8zyzgdSdFgD1OBjxN5KP8AsOnr6wOx2gumrpdVm956lNvmaaN9AAfqJS5aamdFyjnDeJtOfdOwZfXToC/KVaAiIgIiICIiAiIgIiICIiAiIgIiICIiBspPhlPkQfoZcOy1fNw7kKwHePh8aXVVLOjatgHp60yeWvMpc7vZ6pkvTzgvTqIDy3dGVc+Q1FQfQwLBxiwsrhsWN7TP6adyHpOAeVNKzgK+NgA5yP1GVu74fVov3dek1NuisMah5qeTD1E7NSxtgltVanig691UJ1aqdyn71apznxDDKNtjsNjL1ZcKsXoBFuFFIjOh6gqU+R3CO2UPXUhQ7c4FJ7JX9W2uKQpvm3rVEp16TjUjo7KrZQ7ZwefP5bTr9rrZEs1RFCqnEr2moHJVDEAAfAD6TkUbuytbyo1XVcpQIe2FJ10VHBDKKj8yBnmM7qQdXWXxC5r3FuouBSs1NzVuw9VyC3fHLBLcA1GxnZgMHz6wO12fCraWNZkVzQs+J10DqGUPTrZU4PkZQL64q3DmvcVGq1WwSWOcDmAByAGeQ2HlLPZ8bqW1O3XuaV3aUaVejValULCpTuX1vrGA1EjYDUo5Hz2g8Co2Va7dRU7u2XDUVuWXU2ceBtJAbBzgE+WQ24gcax4VXrgtTUd2vv1HISknnqdsL64G/kDLNwQ2VDANylxdZC0VWmwoLVY6VqM7gd5oJ1DOB4dgTjHS7T29iKeXr98ygBc1AQvolNMIg9FUCVZbCmKNNmQK9WoHo8wy26Z7yq++4YgBQf0NjnuHN4iwWrUwTgB0GTkndlyT1Jxv8TONJ3Fa2qoxHViT8SScfeQYCIiAiIgIiICIiAiIgIiICIiAiIgIiICditT00qFwvI6qbgfqUnH1Qj6Tjzv8FcPb17dsb6aiejLsftiBKteONQLhkS4oVgoqU6mdLld1cFSCrjfDDoZuS44ZUyz2Famo59xda/idNRP8yvGgwpIx3DO6BeoZBTJ+veDb0mVBXGUOVAPi6EHy9IHa7W8BW0q0qlB2e3rItSg5wD0JUlQPEMg8hzHUGaeCtSFTXUdQc5LMRnJPMk8+u86Nv2gNK1/CPbrcUw/e0e8OdAIbUmnGThmJ2/UfORrbtRUHuJb0ccglBfuS0Di13XUWQ4OTgqcHfPUTs8D4RQ/C1Lu6DmkHWnRRCqtVqH3sFgdgPLybykGv2hqVG/aUqNQk8jTwflpO0lcV4s1ylJCgpU6Cd2iKdtZOWqHGOmkfL4wMm4jZ0zlOHKxHumvcVHHzVAgPwkS/4q9Vmr1CNTAKAo0qqqMIiL+VQBy9Jy6wckg76Rnb9I6zcbVmFIk+GpqIHkFYqf7QMa9LTRUn3qjFvgq7D6kk/ISDOjxqqGqaRyRQg+X/ALnOgIiICIiAiIgIiICIiAiIgIiICIiAiIgJM4WW71QpUFjpyxwu/mRIczpuQQQcEEEEdCORgdbitcMEpJkrT1kkgDVUcg1G9PdUAdAg65l245YU7rhtG8t0CNb0wjov/wAYJDjzJR8tk8wzEzz+1XxDMv3snu2NzUtyA1J1Lsp5ZyqEfzK2/wDCIHntzUzg+UxZ8sW89/mef3m67Ve8cJ+71uE3z4NR079dsT5SpZA+UCOhxq+n3/8AEkWzHAUAkk4AAySSdgB6naaWTfHqJZfZ3TRuI24ddQy7KDy1rTZkPyYA/HEDv9qrFLLhlO0ZVa4qsKrnmVcAFip6BVwnrq9TKbZVtSLTJ0sjMyFvdwwGpTjl7oIPQ589un2uvHq31XvPytoUeSjcY+OdXz9JXKhI5HB3Ax8wftAju2ST57zGIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIERA6FE6WGeR2+cvvs6p9zSvbs//AM0YL55RGcj5lk+kotenz+MtNj2jopwitajK3DMFGxIdHqamYHoQuVIPpz6BS6XlJVudl9AP7mRi2D/aTkplcA8wAD8YESoPEPj/AIk/s3dmle2z5wFq08/wlgrfYmQbhsEf70mrnn7QLl7QrHur925B1D/MeE/ZQfnKW75MuPb/ALSUbzuO7BLKgaoxBHjdV1IB1wRufMbSmCBriDEBERAREQEREBERAREQEREBERAREQERNiUifSBrmymviXPIkTelIAzG4TbMCdW6jzEjsvSfKFbK4P8AvOZOMQNBXceYm/8AFNnxDVNbDeYsIGFQlj5T4u0yzMYHwmMRiKh2xAxAzkzAiSAuAPOCBAjxMzTMwgIiICIiAiIgIiICIiAiIgJYrDswxUVblvw1EjK6lLVag86dIYJHLxNpXfnOj2d/C2SLd3Sd9XYA21DI5dK1TIOkbeHn5gciNzdvL27uKaPW7mi7qhSn4EVWOnLEeJsZ6npArvFu4DBaFNkRQCTUYNUYkZy2AFXYjwgbeZkamvKWz2l8H7i6V1HhroGHo6YVh9NLfzmU8GBKfcZ8uc1sJrNU/wDefNePhA1OuDkTfjIBG48/8HyM+nealYqdS8uoO4I8iOogb9G2flNbCSKIVgdHlkqea46j9Q/0+c0M2YGoiZFdp8M3rTGNTHSo69Sf0qOp/tA0Y2J6Dn/gTXTXO5m131HYaVHIDf5k9T6zLaBjjrMC0+kzEn6QPhzN1oKZcCrqCHYlMal/5AHZseWRnzE0s0n8Gse+r06XRnAb+EeJv+kGB0uLdj69JO+p/t6BUNqRSrqpAP7SkfEnPc7j1lZnp/Hu2L2d2gSnRqhFDEVEUsrPnOlxhkOnH9XKQeMU7LidNq1on4e9UanobYqjmzUyMAkbnkCeo5GB59EGICIiAiIgIiICb7fTqBcEqDkgcyB+XPTPLPSaIgSLy5ao7OxyzHO3IdAAOgAAAHQASPEQPZeJUG4pwajUQa7ilg421M1PwVR/MpD4/hnmfFuGPblFqbO6a2XbKq2NAYdCRhsHkGE9f9n/AARrewRlIFSoDXYOdKFWQ6UdiCUHuEsB+T68Sw41wy4apb3jJVZqjEVHUqhLKuruquzIuVwCdOwHniQeTsZ8zPUuMey1GLPaXGRgOEqeIaSTjTUXnsDjI6c5Uu1XA1tgqIHY09q9Qr4DUYZKI3IhMaT6n1lFbDGZrUmAIn0LAyK/mXYjymwVwdmyD+odf4l6/EfeaMkQRmBJLovXWfLBCj45wW+G001ajMcsc+Q5ADyAGwmoCfQYGevoNp9cz4cCYs0BmJ2uzXBxdO1IsEd1YUSQcNUUatJI5ZG2/VlnS4B2MqV3HeOtJNQU4BZ984whwByPM7eUDh8K4U1fvAm7ohqBSQNaru4GeoXLfBTLD2NprQZ7itlV0FUOAQ3JnII5YXT5e9LeLPhViyUaNdPxhcFKjuX0uPdWoyjSiNkowwDpqE9Jv9pXAcWLug0PTqd46rvlXIUjPXGo79Qv1g8d4jdmtVeo3N2Lb9ATsPkMD5TVRqsjBlYqykEEHBBHIg9JqiUTuJ1lqN3owGfdwOQf8xHo3vemSOkgxEBERAREQEREBERASTw637yrTp7+N1Tbn4mA/wAyNJVhcd2+sZ1BWC46MylQflnPygXPtr23asrWtudNuDh2XY1cHkD0XYYHXboBKFEyQZIHnt9YH6B7EWKW3DaZd9A0d/UdtggZS4zny18vMDzlW4Z26sBXekyOlu7kBnHeK4PvPUXmMnpg4GNhvK/2/wC0zOxsqbEUKR0tjbW6bYPopyB8PQSiwke28S7BcOu1721qClqOA1AipSLHoUzgcuSlceUrPFeyAsrSoHBqV61RaSMhLKtNRr1kaQVGoLkb4wNzIfsgUniGN9PdsW3xsHTf7/eeg9sK9KzoU7is7VXQBbdDhXeoDlqlRlxkbAkAAbdc4kHhNRSpKsMEEgjyI2IimhZgq82IA+J2E9Tp8S4LxFdNwPw9fkHbTTc7ABjUUaG8vGOmwkS+9nFWkdVo63I1LnJCOi7N4d9L5B94EbZAG+1VRu0HDzbXD0ipXQdg3PBA69ZzgMz0rtZ2erXF9cFhpoe+tQkEqVppqwo3IJXGk433B55k0uH8F4aA1Wt+JuAMqFAcqcbEUx4FO+cOTArtt2fStYF01d/Qq6HAC4KvybnuFbK5z0OPWwdmfZxbsve3NfWoGrSngQAZzrc74+Gnlzlu4Vd0+JWpeiyovdvQqJp8SOSppuoBxgEZC/8AI7zzz2tKadzToqzd2tNdIzscZUNjlnw85EWqp2k4bSdbG2ZaSP4DVpKrU0fINNy53fDBctk/EYkzt7wdksbl0OmpqWo+jKjB0moFPMgnW3808JzPT+CdqmuOG3FrWOatK3qaWPN6YQ6QfMqSu/kB6yleYT0vs12ta5tn4fcNljSenRc7krobCN5kdD1wPLfzSb7S4NN0qL7yMrD4qQR/aFaIm240620+7qOn4ZOPtNUBERAREQEREBERAREQEREBJFjWCVEdhkKysR5hSDj7SPEDZVqFmLMcliSSepJyTNcRAvXslqBbxyeXcMD8DUpZP0yflOb2+7Qm9u2YH9lT/Z0h00rsW/mIJ+kg9m7o0zXYHGbeqv8AUAB98TiwE9U9jV6zG4tg2ksgqUiRqAZTg+HO48QyARzO4O88rlr9mnEe44lbsThXY02z5VBpH/VpgX72o1zQtDhvFcVMbDBCrgaSevuPv/zni09R9s93k21IHkKjn5sFH3Dzy6EmLX7PO0Js7tcn9lVxTqD0bZX/AJSc/DM6nterhruljkKIx8O8qAfZQfnKBO72nvDVNuxOSLakpPmRqyfrCuFJ/B6+mod8BqdVD/PTZR9yJAiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgZK5GcHGRg/DymMRATda1yjo495GVh8VII/tNMQLV7Q78VbzbcJTRf6tVQ/eoZVZJ4hdGrUZyMFsbfAAf4kaAmdSoTjJzgYHoB0mEQEREBERAREQEREBERAREQP/2Q=="></UserImg>
                </>
          :
          <LoginContainer>
              <Login onClick={signIn}>
                Login
              </Login>

          </LoginContainer>
          
        
        }
         </Nav>
    )
}

export default Header;

// Create Header div
const Nav = styled.div`
    height: 70px;
    background: #090b13;
    display:flex;
    align-items:center;
    padding: 0 36px;
    overflow-x: hidden;
    `;

const Logo = styled.img`
        width:80px;
    `;
const NavMenu = styled.div`
    display: flex;
    flex:1;
    margin-left: 25px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img{
            height: 20px;

        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity: 0;
                transform-origin: left center;
                ​transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }`;

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    transition: all 0.2s ease 0s;
    float: right;

    &:hover{
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;

    }


`

const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`