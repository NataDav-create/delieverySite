import React from "react";
import { NavBar } from "./Components/Navbar";
import { Menu } from "./Components/Menu";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ModalItem } from "./Components/ModalItem";
import { Order } from "./Components/Order";

function App() {
  const [openItem, setOpenItem] = React.useState(null);
  console.log("item", openItem);

  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu setOpenItem={setOpenItem} />{" "}
      <ModalItem openItem={openItem} setOpenItem={setOpenItem} />{" "}
    </React.Fragment>
  );
}

export default App;
