import React, { useState } from 'react';

interface SearchFilterProps {
  onFilter: (filters: Filters) => void;
}

export interface Filters {
  name: string;
  company: string;
  level: string;
  location: string;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onFilter }) => {
  const [filters, setFilters] = useState<Filters>({
    name: '',
    company: '',
    level: '',
    location: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleFilter = () => {
    onFilter(filters);
  };

  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Filter Jobs</h5>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={filters.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              name="company"
              value={filters.company}
              onChange={handleInputChange}
            >
              <option value="">Select Company</option>
              <option value="Company A">Company A</option>
              <option value="Company B">Company B</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              name="level"
              value={filters.level}
              onChange={handleInputChange}
            >
              <option value="">Select Level</option>
              <option value="Entry">Entry</option>
              <option value="Mid">Mid</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              name="location"
              value={filters.location}
              onChange={handleInputChange}
            >
              <option value="">Select Location</option>
              <option value="Auckland">Auckland</option>
              <option value="Wellington">Wellington</option>
              <option value="Christchurch">Christchurch</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button className="btn btn-primary" onClick={handleFilter}>
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
