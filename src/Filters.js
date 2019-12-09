import React from 'react';
import './Filters.css';

const Filters = ({ filterOptions, setCategoryId }) => {
  return (
    <div className="Filters-row">
      <select onChange={(event) => setCategoryId(event.target.value)}>
        {filterOptions.map(filter => <option value={filter.id} key={filter.id}>{filter.name}</option>
        )}
      </select>
    </div>
  );
}

export default Filters;
