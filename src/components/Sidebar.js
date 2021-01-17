import React from "react";
import { Range } from "rc-slider";

const Sidebar = ({
  handleSlider,
  sliderMarks,
  handleSliderYear,
  sliderYearMarks,
  handleChangeSort,
}) => {
  return (
    <>
      <h3 className="slider-title">Ratings</h3>
      <Range
        max={10}
        step={0.01}
        marks={{ 0: sliderMarks[0], 10: sliderMarks[1] }}
        onChange={handleSlider}
        railStyle={{ backgroundColor: "red" }}
        defaultValue={[5, 10]}
        tabIndex={[0, 10]}
        handleStyle={{
          backgroundColor: "red",
        }}
      />
      <h3 className="slider-title">Year</h3>
      <Range
        min={1900}
        max={2021}
        railStyle={{ backgroundColor: "red" }}
        step={1}
        defaultValue={[1960, 2021]}
        marks={{ 1900: sliderYearMarks[0], 2021: sliderYearMarks[1] }}
        onChange={handleSliderYear}
        tabIndex={[1900, 2021]}
      />
      <div className="sidebar-sort">
        <label htmlFor="lala">Sort by:</label>
        <select name="sort" id="sort" onChange={handleChangeSort}>
          <option value="ratingsAsc">Ratings ASC</option>
          <option value="ratingsDesc">Ratings DESC</option>
          <option value="popularityAsc">Popularity ASC</option>
          <option value="popularityDesc">Popularity DESC</option>
        </select>
      </div>
    </>
  );
};

export default Sidebar;
