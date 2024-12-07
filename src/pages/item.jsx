import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Item({ id }) {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (id) {
            const item = JSON.parse(localStorage.getItem(id));
            setTitle(item.title);
            setSubTitle(item.subTitle);
            setDescription(item.description);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            const item = { title, subTitle, description, id };
            localStorage.setItem(id, JSON.stringify(item));
        } else {
            const newItemId = Date.now().toString();
            const newItem = { title, subTitle, description, id: newItemId };
            localStorage.setItem(newItemId, JSON.stringify(newItem));
        }
        router.back("/");
    };

    return (
        <div className="edit-container">
            <div className="edit-top-section">
                <Link href="/">
                    <div className="back-button">BACK</div>
                </Link>
                {id ? (
                    <button className="change-button" onClick={handleSubmit}>SAVE CHANGES</button>
                ) : (
                    <button className="change-button" onClick={handleSubmit}>ADD</button>
                )}
            </div>
            <div className="text-container">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <input
                    type="text"
                    value={subTitle}
                    onChange={(e) => setSubTitle(e.target.value)}
                    placeholder="Sub-Title"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
            </div>
        </div>
    );
}