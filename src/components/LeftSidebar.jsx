import React, { useEffect, useState } from "react";
import "./styles/LeftSidebar.css";
import { fetchFilters } from "../services/GameData";

const LeftSidebar = ({ onApplyFilters, onResetFilters, isOpen, onClose }) => {
  const [filters, setFilters] = useState({
    categories: "",
    tags: "",
    year: "",
    ordered: "",
  });

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const gameData = await fetchFilters("genres");
        setCategories(gameData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const gameData = await fetchFilters("tags");
        setTags(gameData);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };
    fetchTags();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters); 
    onClose();
  };

  const handleResetFilters = () => {
    const reset = { categories: "", tags: "", year: "", ordered: "" };
    setFilters(reset);
    onResetFilters(reset); // pass the reset state
  };

  return (
    <div className={`sidebar-overlay ${isOpen ? "open" : ""}`}>
      <div className="p-3">
        <div className="d-flex cross-btn justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Filters</h5>
          <button className="btn btn-sm btn-close-red" onClick={onClose}>
            ×
          </button>
        </div>

        <select
          className="form-select mb-2"
          name="categories"
          value={filters.categories}
          onChange={handleFilterChange}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>

        <div className="mb-2">
          <label htmlFor="year" className="form-label">
            Release Year
          </label>
          <input
            type="number"
            name="year"
            id="year"
            className="form-control"
            placeholder="Enter year (e.g., 2020)"
            value={filters.year}
            onChange={handleFilterChange}
            min="1980"
            max={new Date().getFullYear()}
          />
        </div>

        <select
          className="form-select mb-2"
          name="tags"
          value={filters.tags}
          onChange={handleFilterChange}
        >
          <option value="">All Tags</option>
          {tags.map((tag) => (
            <option key={tag.id} value={tag.slug}>
              {tag.name}
            </option>
          ))}
        </select>

        <select
          className="form-select mb-3"
          name="ordered"
          value={filters.ordered}
          onChange={handleFilterChange}
        >
          <option value="">Any Popularity</option>
          <option value="-rating">Highly Rated</option>
          <option value="-metacritic">Best Reviews</option>
          <option value="-added">Most Added</option>
        </select>

        <button className="btn btn-primary w-100 mb-2" onClick={handleApplyFilters}>
          Apply Filters
        </button>
        <button className="btn btn-secondary w-100" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
