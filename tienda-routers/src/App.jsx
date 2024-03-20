import React from "react";
import './App.css';
import { Routes, Route, Link, useParams, Outlet, NavLink as NL, Form} from "react-router-dom";
import { Header, BtnLink, DetailCont, CenteredCont } from "./styles-components/styles-comp.jsx";
import { ThemeProvider } from "styled-components";
import {ButtonVM , invertTheme,  theme} from "./styles-components/theme"

const Home = () => {
  return (
        <ThemeProvider theme={theme}>
        <div className="features">
        <h2>Bienvenidos</h2>
        <p>Somos una tienda online de celulares</p>
        <ThemeProvider theme={invertTheme}>
          <Link to="/search-page"><ButtonVM>Ver mas</ButtonVM></Link>
          </ThemeProvider>
    </div> 
        </ThemeProvider>
  )
};

const data = {
  Samsung:{
    modelo: "A14",
    precio: "$150",
    desc: "Movil Actualizado"
  },
    Alcatel: {
    modelo: "pixi",
    precio: "$75",
    desc: "Economico"

  },
  Huawei: {
    modelo: "p40",
    precio: "$600",
    desc: "Movil viejo"

  },
  Motorola: {
    modelo: "6g",
    precio: "$500",
    desc: "resistente"

  }
}

const SearchPage = () => {
  const celulares = [
    "Samsung",
    "Huawei",
    "Alcatel",
    "Motorola"
  ];
  return(
    <div className="features">
      <h2>Pagina de Busqueda</h2>
      <ul>
        {celulares.map((celular) => (
          <li key={celular}>
            <Link to={`/celulares/${celular}`}><BtnLink>{celular}</BtnLink></Link>
          </li>
        ))}
      </ul>
    </div>
  )
};


const Celulares = () =>{
  const { nameCelular } = useParams(); 
  return(
    <div className="features">
       <h2>info de Celulares</h2>
      <h2>{nameCelular}</h2> 
      <Link to='details'> <BtnLink>ver detalles</BtnLink> </Link>
      <Outlet/>
    </div>
 
  )
};


const CelularDetails = () => {
  const {nameCelular} = useParams();
  const detalles = data[nameCelular]; 
  return (
    <DetailCont>
   <h3>Detalles del movil {nameCelular}</h3>
   <h4>Modelo: {detalles.modelo}</h4>
   <h4>Precio: {detalles.precio}</h4>
   <h4>Descripcion: {detalles.desc}</h4>
    </DetailCont>
  )
}


const NavLink = ({to, children, ...props}) =>{
  return(
    <NL {...props}
    className={
      ({isActive}) => {
        return isActive ? 'is-active' : undefined
      }} 
    to={to}> {children}

    </NL>
  )
}

function App(){
  return (
    <div>
      <Header>
      <h1>Logo</h1>

      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/search-page">Pagina de Busqueda</NavLink></li>
        </ul>
      </nav>
  
      </Header>
      <CenteredCont>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search-page" element={<SearchPage/>}/>
        <Route path="/celulares/:nameCelular" element={<Celulares/>}>
          <Route path="details" element={<CelularDetails/>}/>
        </Route>
        <Route path="*" element={<h1>Page not Found</h1>}/>
      </Routes>
      </CenteredCont>
    </div>
  )
}
export default App


