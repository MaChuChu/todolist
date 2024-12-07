import Item from "../item";

export default function ItemPage({ id }) {
    return <Item id={id} />;
}

export function getServerSideProps(context) {
    return {
        props: { id: context.params.id },
    };
}