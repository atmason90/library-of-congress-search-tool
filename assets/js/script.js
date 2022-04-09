$("#search-form").on("submit", function(event) {
    event.preventDefault();
    var searchInputVal = $("#search-input").val();
    var selectInputVal = $("#select-input").val();
    if (!searchInputVal) {
        alert("You must include a search input.");
        return;
    };
    var queryString = "./searchresults.html?q=" + searchInputVal + "&format=" + selectInputVal; 
    location.assign(queryString);
})