import React, { useEffect, useState } from 'react'
import "../Styles/TagQueryDropDown.css"
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { getTags } from '../../api';

function TagQueryDropDown({setTag, Tag}) {

  const [tags, setTags] = useState([])

  useEffect(() => {
    getTags()
    .then((tags) => {
      setTags(tags);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

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
          {tags.map(tag => {
          return <MenuItem key={tag.tag_id} value={tag.tag_name}>{tag.tag_name}</MenuItem>
        })}
        </Select>
      </FormControl>
      );
}

export default TagQueryDropDown