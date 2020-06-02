//Componente principal que contiene la estructura del proyecto
import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Main from '../Components/Main';
import Sidebar from '../Components/Sidebar';
import Info from '../Components/Info';
import About from '../Components/About';
import Education from '../Components/Education';
import Experience from '../Components/Experience';
import Certificates from '../Components/Certificates';
import Skills from '../Components/Skills';
import useGetData from '../Hooks/useGetData';

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        margin:0;
        padding:0;
        background: #f5f5f5;
    }
`;
const App = () => {
    const data = useGetData();
    console.log(data);
    return data.length == 0 ? <h1>Cargando....</h1> : (
        <Main>
            <GlobalStyle/>
            <Sidebar>
                <About
                    avatar={data.avatar}
                    name={data.name}
                    profession={data.profession}
                    bio={data.bio}
                    address={data.address}
                    social={data.social}
                />
            </Sidebar>
            <Info>
                <Education data ={data.education}/>
                <Skills data = {data.skills}/>
            </Info>
        </Main>
    );
}

export default App;