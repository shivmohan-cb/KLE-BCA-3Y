import { useState } from "react";

const SearchBar = ({ updateSearch }) => {
    //Getting the search value and calling the updateSearch to update the search state
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //on enter update app seach value
        updateSearch(search);
    }

    return <header>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="search"
                value={search}
                onChange={handleSearch}
                placeholder="Search Cityname..."
            />
        </form>
    </header>
}

export default SearchBar;