import { RTKQuery } from 'pages/RTKQuery';
import { Toolkit } from 'pages/Toolkit';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from "react";
import { StyledLink, StyledNav } from './App.styled';

// const Toolkit = lazy(()=>import('../pages/Toolkit'));
// const RTKQuery = lazy(()=>import('../pages/RTKQuery'));

export function App() {
  return (
    <>
      <StyledNav>
        <StyledLink to="/">Toolkit</StyledLink>
        <StyledLink to="/rtk">RTKQuery</StyledLink>
      </StyledNav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Toolkit/>}/>
          <Route path='/rtk' element={<RTKQuery/>}/>
          <Route path='*' element={<Toolkit/>}/>
        </Routes>
      </Suspense>
    </>
  );
};

