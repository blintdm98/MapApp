import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container, Main } from './LayoutStyles'
import { postSession } from 'next-auth/react';

export const Layout = ({ children }) => {
  return (
    <Container>
        <Header/>
          <Main>{children}</Main>
        <Footer />
    </Container>
  )
}

export async function getServerSideProps(ctx){
    const session = await postSession(ctx);
    return {
        props:{
            session: session ? session.user : null,
        }
    }
}
