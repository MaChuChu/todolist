import Link from "next/link";

export default function ListItem({ title, subTitle, id, handleRemove, href }) {
    return (
        <div className="listItem-container">
            <Link href={href} className="text">
                <h1>{title}</h1>
                <h2>{subTitle}</h2>
            </Link>
            <button className="remove-button" onClick={handleRemove}>-</button>
        </div>
    );
}