import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { NavBar } from "./Components/Navbar/Navbar";
import { Menu } from "./Components/Menu/Menu";
import { GlobalStyle } from "./Components/Style/GlobalStyle";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Order/Order";
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";
import { useAuth } from "./Components/Hooks/useAuth";

const firebaseConfig = {
  apiKey: "AIzaSyDLoY4qQocj5NBol8TVHcDq-DZc60CJNtQ",
  authDomain: "sushishop-734aa.firebaseapp.com",
  databaseURL:
    "https://sushishop-734aa-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sushishop-734aa",
  storageBucket: "sushishop-734aa.appspot.com",
  messagingSenderId: "789062012212",
  appId: "1:789062012212:web:c15b470edf102bab3be961",
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} {...auth} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </React.Fragment>
  );
}

export default App;
