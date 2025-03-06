'use client'

import { useState } from "react"

const SearchBar = () => {
  const [products, setProducts]=useState('')
  const [search, setSearch]=useState('')
  const handleSearch=()=>{
      
  }
  return (
 <>
<div className='container mx-auto flex items-center justify-center mt-4'>
<form className="w-full" onSubmit={handleSearch}>
<label className="input w-full">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
  <input type="search" className="grow" placeholder="Search" />
  <kbd className="kbd kbd-sm">⌘</kbd>
  <kbd className="kbd kbd-sm">K</kbd>
</label>
</form>
</div>
 </>
  )
}

export default SearchBar