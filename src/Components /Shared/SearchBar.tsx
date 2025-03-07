'use client'

import { useState, ChangeEvent } from "react"

interface SearchBarProps {
  onSearch: (query: string) => void; // Callback to handle the search logic
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [search, setSearch] = useState('')

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value) // Update search query as user types
    onSearch(e.target.value) // Pass the search query to the parent component
  }

  return (
    <>
      <div className='container mx-auto flex items-center justify-center mt-4'>
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <label className="input w-full">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              value={search}
              onChange={handleSearch} // Listen for changes in input field
              className="grow"
              placeholder="Search"
            />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </label>
        </form>
      </div>
    </>
  )
}

export default SearchBar
