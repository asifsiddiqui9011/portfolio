import React, { useState, useEffect, useRef } from 'react';
import './Dropdown.css'; // Include custom CSS here
import img1 from "../../assets/Theme/theme1.png"
import img2 from "../../assets/Theme/theme2.png"
import img3 from "../../assets/Theme/theme3.png"
import img4 from "../../assets/Theme/theme4.png"
import img5 from "../../assets/Theme/theme5.png"
import img6 from "../../assets/Theme/theme6.png"


const Dropdown = ({ options, selectedValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState( options.find((option) => option.value === selectedValue) || options[4]);
  const dropdownRef = useRef(null);

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Handle dropdown item selection
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onChange(option.value); // Trigger parent component change
  };

  return (
    <div className="custom-select" ref={dropdownRef}>
      <div className="select-selected" onClick={() => setIsOpen(!isOpen)}>
        {selected ? (
          <>
            <img src={selected.img} alt={selected.label} style={{height:"50px" , width:"50px", size:"auto" ,borderRadius:"50%"}}/>
            {selected.label}
          </>
        ) : (
          "Select theme"
        )}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="select-items">
          {options.map((option) => (
            <div key={option.value} onClick={() => handleSelect(option)}>
              <img src={option.img} alt={option.label} style={{height:"50px" , width:"50px", size:"auto" ,borderRadius:"50%", alignItem:"center"}}/>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
