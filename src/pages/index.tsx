import Link from "next/link";
import ListItem from "../components/ListItem";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedItems = Object.keys(localStorage).map((key) => JSON.parse(localStorage.getItem(key)));
        setItems(storedItems);
    }, []);

    const handleRemove = (id) => {
        localStorage.removeItem(id);
        setItems(items.filter((item) => item.id !== id));
        router.push("/"); // Redirect to index page
    };

    return (
        <div className="container">
            <h1>TO DO LIST</h1>
            <div className="top-section">
                <input placeholder="Search" className="search-container" />
                <Link className="add-container" href="/item">+</Link>
            </div>
            <div className="list-container">
                {items.map((item) => (
                    <ListItem
                        key={item.id}
                        title={item.title}
                        subTitle={item.subTitle}
                        id={item.id}
                        handleRemove={() => handleRemove(item.id)}
                        href={`/item/${item.id}`}
                    />
                ))}
            </div>
        </div>
    );
}