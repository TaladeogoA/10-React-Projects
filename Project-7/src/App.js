import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  // Set the data to the state
  const [people, setPeople] = useState(data);
  // Set the index for the data
  const [index, setIndex] = useState(0);

  // Set the index to the next person
  useEffect(() => {
    const lastIndex = people.length - 1;

    // If the index is less than 0, set the index to the last person
    if (index < 0) {
      setIndex(lastIndex);
    }

    // If the index is greater than the last person, set the index to 0
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // Set the index to the next person after 3 seconds
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>

      <div className="section-center">
        {/* Loop through the data and render an article for each person */}
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          // Set the nextSlide class to all the articles
          let position = "nextSlide";
          // Set the activeSlide class to the article with the index
          if (personIndex === index) {
            position = "activeSlide";
          }
          // Set the lastSlide class to the article before the index
          if (
            // If the index is 0 and the personIndex is the last person or if the personIndex is the index - 1
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
