import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((currentIndex) => {
      let newIndex = (currentIndex + 1) % people.length;
      return newIndex;
    });
  };
  const PrevPerson = () => {
    setIndex((currentIndex) => {
      let newIndex = (currentIndex - 1) % people.length;
      return newIndex
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    const newIndex = randomNumber % people.length
    console.log(newIndex);
    setIndex(newIndex)
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={PrevPerson}>
            <FaChevronLeft />{" "}
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />{" "}
          </button>
        </div>
        <div className="btn btn-hipster" onClick={randomPerson}>
          🤷‍♂️
        </div>
      </article>
    </main>
  );
};
export default App;
