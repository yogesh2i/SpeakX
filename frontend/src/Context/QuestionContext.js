import React, { createContext, useEffect, useState } from 'react';
import { apiUrl } from '../lib/urls';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");

  //debouncing fetching --can be modified as hook for more flexible use 
  useEffect(() => {
    const searchData = setTimeout(() => {
      fetch(`${apiUrl}/questions?limit=${limit}&page=${page}&query=${query}&filter=${filter}`)
        .then((res) => {
          return res.json();
        }).then((result) => {
          setData(result);
        }).catch((err) => {
          console.log(err)
        })
    }, 700)
    return (() => clearTimeout(searchData));
  }, [query, filter, page, limit])

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        page,
        setPage,
        limit,
        setLimit,
        data,
        setData,
        filter,
        setFilter
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
