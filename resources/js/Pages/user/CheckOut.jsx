export default function CheckOut() {
    const storedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};

    return(
        <>
        {Object.entries(storedItems).map(([id, quantity]) => (
            <>
            </>
        ))}
        </>
    )
}