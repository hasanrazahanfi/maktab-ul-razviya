function searchBooks() {
    let searchText = document.getElementById("searchBar").value.toLowerCase();
    if (!searchText) {
        alert("Please enter a search term.");
        return;
    }
    alert("Searching for: " + searchText);
}

}