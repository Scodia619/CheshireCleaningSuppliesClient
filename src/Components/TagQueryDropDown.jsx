import React from 'react'
import "../Styles/TagQueryDropDown.css"
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function TagQueryDropDown({setTag, Tag}) {

    const handleTag = (e) => {
        setTag(e.target.value)
    }

    return (
        <FormControl className="tag-drop-down">
        <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Tag}
          label="Options"
          onChange={handleTag}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Janitor">Janitor</MenuItem>
          <MenuItem value="Cleaning">Cleaning</MenuItem>
          <MenuItem value="Car">Car</MenuItem>
        </Select>
      </FormControl>
      );
}

export default TagQueryDropDown