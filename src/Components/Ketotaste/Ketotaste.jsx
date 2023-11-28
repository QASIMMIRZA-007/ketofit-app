import React, { useState } from "react";
import "./Ketotaste.scss";

function Ketotaste() {
  const [selectedCategory, setSelectedCategory] = useState("dinner");

  const data = {
    breakfast: [
      {
        id: 0,
        img: "https://images.unsplash.com/photo-1538220856186-0be0e085984d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Chorizo Omelette",
        des: "7.6g carbs | 39g protein | 52.5g fat",
        link: "Preview recipe",
      },
      {
        id: 1,
        img: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Chorizo Omelette",
        des: "7.6g carbs | 39g protein | 52.5g fat",
        link: "Preview recipe",
      },
      {
        id: 2,
        img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnJlYWtmYXN0fGVufDB8fDB8fHww",
        title: "Chorizo Omelette",
        des: "7.6g carbs | 39g protein | 52.5g fat",
        link: "Preview recipe",
      },
    ],
    dinner: [
      {
        id: 0,
        img: "./Images/pasta.png",
        title: "Peanut Butter Pancakes",
        des: "7.6g carbs | 39g protein | 52.5g fat",
        link: "Preview recipe",
      },
      {
        id: 1,
        img: "./Images/pasta.png",
        title: "Peanut Butter Pancakes",
        des: "7.6g carbs | 39g protein | 52.5g fat",
        link: "Preview recipe",
      },
      {
        id: 2,
        img: "./Images/pasta.png",
        title: "Peanut Butter Pancakes",
        des: "7.6g carbs | 39g protein | 52.5g fat",
        link: "Preview recipe",
      },
    ],
    lunch: [
      {
        id: 0,
        img: "https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHVuY2h8ZW58MHx8MHx8fDA%3D",
        title: "Toast With Mozzarella",
        des: "7.6g carbs | 39g protein | 52.5g fat",
        link: "Preview recipe",
      },
      {
        id: 1,
        img: "https://images.unsplash.com/photo-1505576633757-0ac1084af824?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHVuY2h8ZW58MHx8MHx8fDA%3D",
        title: "Chorizo Omelette",
        des: "7.6g carbs | 39g protein | 52.5g fat",
        link: "Preview recipe",
      },
      {
        id: 2,
        img: "https://plus.unsplash.com/premium_photo-1672242676674-f4349cc6470e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGx1bmNofGVufDB8fDB8fHww",
        title: "Chorizo Omelette",
        des: "7.6g carbs | 39g protein | 52.5g fat",
        link: "Preview recipe",
      },
    ],
    snacks: [
      {
        id: 0,
        img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25hY2tzfGVufDB8fDB8fHww",
        title: "Toast With Mozzarella",
        des: "7.6g carbs | 39g protein | 520.0g fat",
        link: "Preview recipe",
      },
      {
        id: 1,
        img: "https://images.unsplash.com/photo-1614735241165-6756e1df61ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25hY2tzfGVufDB8fDB8fHww",
        title: "Chorizo Omelette",
        des: "7.6g carbs | 39g protein | 52.5g fat",
        link: "Preview recipe",
      },
      {
        id: 2,
        img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25hY2tzfGVufDB8fDB8fHww",
        title: "Chorizo Omelette",
        des: "7.6g carbs | 39g protein | 52.5g fat",
        link: "Preview recipe",
      },
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <section id="ketotaste">
        <div className="keto-container">
          <div className="keto-header">
            <h1>
              A day with <span className="greenColor">KetoFit</span>
            </h1>
            <p>Lose weight by eating the foods you love.</p>
            <div className="rectangle">
              <button
                className={selectedCategory === "breakfast" ? "active" : ""}
                onClick={() => handleCategoryClick("breakfast")}
              >
                Breakfast
              </button>
              <button
                className={selectedCategory === "lunch" ? "active" : ""}
                onClick={() => handleCategoryClick("lunch")}
              >
                Lunch
              </button>

              <button
                className={selectedCategory === "dinner" ? "active" : ""}
                onClick={() => handleCategoryClick("dinner")}
              >
                Dinner
              </button>

              <button
                className={selectedCategory === "snacks" ? "active" : ""}
                onClick={() => handleCategoryClick("snacks")}
              >
                Snacks
              </button>
            </div>
          </div>
          <div className="cards">
            {data[selectedCategory].map((item) => {
              return (
                <div key={item.id} className="card">
                  <img src={item.img} alt={item.title} />
                  <h2>{item.title}</h2>
                  <p>{item.des}</p>
                  <a>{item.link}</a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Ketotaste;
