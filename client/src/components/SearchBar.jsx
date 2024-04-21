import { useRef } from "react"

export default function SearchBar(props) {
    const query = useRef()

    const handleSearch = (e) => {
        e.preventDefault()
        const queryVal = query.current.value
        props.fetchBooks(queryVal.trim)
    }

    return (
        <form onSubmit={handleSearch} className="search-bar">
            <input type="text" placeholder='Title' name="title" />
        </form>
    )
}