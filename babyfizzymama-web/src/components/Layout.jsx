import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "./Header/Header";
// import { Footer } from "./Footer/Footer";
import { Footer } from "./Footer/Footer";
export default function Layout({ children }) {
  return (
    <>
    <Box>
      <Header />
      <Box>
      {children}
      </Box>
      <Footer />
    </Box>
    </>
  );
}


// import * as React from 'react';
// import { Container } from 'reactstrap';
// import NavMenu from './NavMenu';

// export default (props: { children?: React.ReactNode }) => (
//     <React.Fragment>
//         <NavMenu/>
//         <Container>
//             {props.children}
//         </Container>
//     </React.Fragment>
// );
