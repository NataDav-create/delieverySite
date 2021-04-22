import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { NavBar } from "./Components/Navbar/Navbar";
import { Menu } from "./Components/Menu/Menu";
import { GlobalStyle } from "./Components/Style/GlobalStyle";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Order/Order";
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";
import { useAuth } from "./Components/Hooks/useAuth";
import { useTitle } from "./Components/Hooks/useTitle";
import { useShowOrders } from "./Components/Hooks/useShowOrders";
import { useDB } from "./Components/Hooks/useDB";
import { OrderConfirm } from "./Components/Order/OrderConfirm";
import { useOrderConfirm } from "./Components/Hooks/useOrderConfirm";
import { Context } from "./Components/functions/context";
import { useModal } from "./Components/Hooks/useModal";

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
  const database = firebase.database();
  useTitle(openItem.openItem);
  const dbMenu = useDB(database);
  const showOrders = useShowOrders();
  const orderConfirm = useOrderConfirm();
  const modalThanks = useModal();

  return (
    <Context.Provider
      value={{
        auth,
        openItem,
        orders,
        orderConfirm,
        showOrders,
        database,
        modalThanks,
      }}
    >
      <GlobalStyle />
      <NavBar />
      {showOrders.showOrder && <Order />}
      <Menu dbMenu={dbMenu} /> {openItem.openItem && <ModalItem />}
      {orderConfirm.openOrderConfirm && <OrderConfirm database={database} />}
    </Context.Provider>
  );
}

export default App;
