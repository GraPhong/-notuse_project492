import {FaSearch} from "react-icons/fa"
import Image from "next/image"

const SearchBar = () => {
  return (
    <div className='input-wrapper'>
      <input placeholder="search..."/>
      <FaSearch id='search-icon'/>
    </div>
  )
}

export default SearchBar