import React, { useState } from "react";
import Header from "./Components/Header";
import Hero1 from "./Components/Hero1";
import Hero2 from "./Components/Hero2";
import Services from "./Components/Services";
import Doctors from "./Components/Doctors";
import Book from "./Components/Book";
import Sidebar from "./Components/Sidebar";

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <Header
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      ></Header>
      <Sidebar
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      ></Sidebar>
      <Hero1></Hero1>
      <Hero2></Hero2>
      <Services></Services>
      <Doctors></Doctors>
      <Book></Book>
    </>
  );
};

export default App;
