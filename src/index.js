import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    // const style = {
    //   color= "red"
    //   fontSize= "48px"
    //   textTransform= "uppercase"
    // };
    const style = {};

    return (
        <header className="header">
            <h1 style={style}>Pizza</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;
    return (
        <main className="menu">
            <h2>Menu</h2>

            {numPizzas > 0 ? (
                <ul className="pizzas">
                    {pizzaData.map((pizza) => {
                        return <Pizza pizza={pizza} key={pizza.name} />;
                    })}
                </ul>
            ) : null}
        </main>
    );
}

function Pizza({ pizza }) {
    return (
        <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
            <img src={pizza.photoName} alt={pizza.name}></img>
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour < closeHour;
    return (
        <footer className="footer">
            {isOpen ? (
                <div className="order">
                    <p>We'r still open until {closeHour}:00.</p>
                    <button className="btn">Order</button>
                </div>
            ) : (
                <div className="order">
                    <p>We're closed until {openHour}:00 tomorrow.</p>
                    <p>See you soon!</p>
                </div>
            )}
        </footer>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
