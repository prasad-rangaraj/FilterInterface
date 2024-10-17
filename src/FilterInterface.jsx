import React from "react";
import {
  TextField, Checkbox, FormControl, InputLabel, MenuItem, Select,
  FormControlLabel, Switch, InputAdornment, Box,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import './FilterInterface.css';

function FilterInterface() {
  const [filters, setFilters] = React.useState({
    time: "Today",
    type: "To Me",
    status: "Open",
    starred: true,
    deepFilters: false,
    view: "Card View",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="full-box">
      <div className="filter-container">
      
        <TextField
          placeholder="Search by Number/Title"
          variant="standard"
          size="small"
          className="filter-item"
          sx={{
            backgroundColor: 'rgb(242, 244, 246)',
            fontStyle: 'italic',
            paddingRight: '10%',
            borderWidth:'1px',
            borderStyle:'solid',
            borderColor:'rgb(186, 188, 189)',
            borderRadius:'8px',
            height:'38px',
            justifyContent:'center'
          }}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment>
                <Search
                  sx={{
                    paddingRight: '5px',
                    paddingLeft:'5px',
                    color: 'black',
                  }}
                />
              </InputAdornment>
            ),
          }}
        />

        <FormControl variant="outlined" size="small" className="filter-item">
          <InputLabel>Time</InputLabel>
          <Select
            name="time"
            value={filters.time}
            onChange={handleChange}
            label="Time"
          >
            <MenuItem value="Today">Today</MenuItem>
            <MenuItem value="This Week">This Week</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" size="small" className="filter-item">
          <InputLabel>Type</InputLabel>
          <Select
            name="type"
            value={filters.type}
            onChange={handleChange}
            label="Type"
          >
            <MenuItem value="To Me">To Me</MenuItem>
            <MenuItem value="From Me">From Me</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" size="small" className="filter-item">
          <InputLabel>Status</InputLabel>
          <Select
            name="status"
            value={filters.status}
            onChange={handleChange}
            label="Status"
          >
            <MenuItem value="Open">Open</MenuItem>
            <MenuItem value="Closed">Closed</MenuItem>
          </Select>
        </FormControl>

        {/* Boxed "Starred" Checkbox */}
        <Box 
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            border: '1px solid rgb(186, 188, 189)',
            borderRadius: '8px',
            padding: '4px 8px',
            backgroundColor: 'white'
          }}
          className="filter-itemstarred"
        >
          <Checkbox
            checked={filters.starred}
            onChange={(e) => setFilters({ ...filters, starred: e.target.checked })}
            sx={{ padding: '0px 4px' }}
          />
          {/* No need to set font explicitly, Roboto is default */}
          <span style={{ fontSize: '14px', padding:'7px' }}>Starred</span>
        </Box>

        <FormControlLabel
          className="filter-item2"
          control={
            <Switch
              checked={filters.deepFilters}
              onChange={handleChange}
              name="deepFilters"
              sx={{
                transform: 'scale(0.8)', 
              }}
            />
          }
          label={<span style={{ fontSize: '12px', fontWeight: 'lighter' }}>DEEP FILTERS</span>}
        />
      </div>

      <div className="last-item">
        <FormControl variant="outlined" size="small" className="filter-item">
          <InputLabel>Views</InputLabel>
          <Select
            name="view"
            value={filters.view}
            onChange={handleChange}
            label="Views"
          >
            <MenuItem value="Card View">Card View</MenuItem>
            <MenuItem value="List View">List View</MenuItem>
          </Select>
        </FormControl>

        <FilterAltIcon className="filter-lastitem"/>
      </div>
    </div>
  );
}

export default FilterInterface;
