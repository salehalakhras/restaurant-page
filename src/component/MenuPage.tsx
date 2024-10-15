import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const menu = [
  {
    name: "Hamburger",
    price: 5.99,
  },
  {
    name: "Cheeseburger",
    price: 6.99,
  },
  {
    name: "Fries",
    price: 2.99,
  },
  {
    name: "Soda",
    price: 1.99,
  },
  {
    name: "Water",
    price: 0.99,
  },
  {
    name: "Coke",
    price: 1.99,
  },
  {
    name: "Sprite",
    price: 1.99,
  },

];

const MenuPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-slate-800 items-center">
      <Header page={1}></Header>
      <div className="text-slate-300 text-6xl font-bold flex p-4">Our Menu</div>
      <div className="flex flex-col h-3/4 p-10 justify-center bg-slate-900 rounded-lg shadow-lg border border-slate-700">
        {menu.map((item) => (
          <div className="text-slate-300 text-xl font-bold flex p-4">
            {item.name} - ${item.price}
          </div>
        ))}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MenuPage;
