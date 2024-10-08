// Handle Flat Search
document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let location = document.getElementById('location').value;
    let price = document.getElementById('price').value;

    // Search logic (this could be dynamic using APIs or database integration)
    document.getElementById('searchResults').innerHTML = `Searching flats in ${location} under ₹${price}...`;
});

// Handle Adding New Flat
document.getElementById('addFlatForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let location = document.getElementById('location').value;
    let price = document.getElementById('price').value;
    let size = document.getElementById('size').value;
    let rooms = document.getElementById('rooms').value;

    // Add flat logic (this could be dynamic using backend)
    alert(`Flat Added:\nLocation: ${location}\nPrice: ₹${price}\nSize: ${size} sq ft\nRooms: ${rooms}`);
});

// Displaying a List of Flats (Mock data for now)
document.addEventListener('DOMContentLoaded', function () {
    let flatList = [
        { location: "Mumbai", price: "5000000", size: "1200", rooms: "3" },
        { location: "Delhi", price: "4000000", size: "1000", rooms: "2" },
        { location: "Bangalore", price: "6000000", size: "1500", rooms: "4" }
    ];

    let flatContainer = document.getElementById('flatList');
    flatList.forEach(flat => {
        flatContainer.innerHTML += `<div>
            <h3>Flat in ${flat.location}</h3>
            <p>Price: ₹${flat.price}</p>
            <p>Size: ${flat.size} sq ft</p>
            <p>Rooms: ${flat.rooms}</p>
        </div>`;
    });
});
