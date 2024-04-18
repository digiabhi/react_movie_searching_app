import { useRef, useState } from "react";
import "./Navbar.css";
function Navbar() {
  const resultListRef = useRef(null); // Using useRef for autocomplete input Bar
  const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false);
  return (
    <div className="navbar-wrapper">
      <div>Movie Base</div>
      <div className="search-bar">
        <input
          id="movie-search-input"
          type="text"
          placeholder="What movie you want to search for ...."
          // onFocus={() => {
          //   resultListRef.current.style.display = "block";
          // }}
          // onBlur={() => {
          //   resultListRef.current.style.display = "none";
          // }}
          onFocus={() => {
            setIsAutoCompleteVisible(true);
          }}
          onBlur={() => {
            setIsAutoCompleteVisible(false);
          }}
        />
        {/* <div id="result-list" ref={resultListRef}> */}
        <div
          id="result-list"
          style={{ display: isAutoCompleteVisible ? "block" : "none" }}
        >
          <div className="autocomplete-result">Result 1</div>
          <div className="autocomplete-result">Result 2</div>
          <div className="autocomplete-result">Result 3</div>
        </div>
      </div>
      <div>Theme</div>
    </div>
  );
}

export default Navbar;
