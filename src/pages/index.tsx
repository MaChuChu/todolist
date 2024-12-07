

export default function Home() {

    return (
        <div className="container">
            <h1>TO DO LIST</h1>
            {/* 
            - Search
            - Add Button
            - Edit (CRUD) , (Local Storage / Database)
            - Export as CSV ?
            - Draggable
            */}
            <div className="top-section">
                <div className="search-container">Search</div>
                <div className="add-container">+</div>
            </div>
        </div>
    );
}
