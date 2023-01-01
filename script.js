
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const itemList = document.getElementById("item-list");



let itemsArray = ["Laptop","Mobile","Tablet","Watch","Bag","Perfume","TV","Smart Watch","Smart TV"];    // Initial Array


/*============ Mapping Function to render Items ================================*/

function mappingItems(arr){
    itemList.innerHTML = "";
    arr.forEach((item) => {
        itemList.innerHTML += `<li>${item}</li>`;
    })
};

mappingItems(itemsArray);




/*============ Searching Process on clicking Search Button ================================*/

searchButton.addEventListener("click", () => {
    let searchedArray = [];   // Array for searched item
    itemsArray.forEach((item) => {
        if (item.includes(searchInput.value)){
            searchedArray.push(item);
        }
    })
    mappingItems(searchedArray);
    searchInput.value = "";
})