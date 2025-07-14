import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
