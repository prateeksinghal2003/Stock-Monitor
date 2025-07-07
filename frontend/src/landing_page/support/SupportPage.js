import React from "react";

import Hero from "./Hero";
import CreateTicket from "./CreateTicket";

import Navbar from "../Navbar";
import Footer from "../Footer";

function SupportPage() {
  return (
    <>
    <Navbar></Navbar>
      <Hero />
      <CreateTicket />
    </>
  );
}

export default SupportPage;
