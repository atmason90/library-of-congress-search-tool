var getSearchInput = function () {
    var queryString = document.location.search;
    var searchInputArray = queryString.split('&');
    var searchInput = searchInputArray[0].split("=").pop();
    var selectInput = searchInputArray[1].split("=").pop();

    getSearchResultsIssues(searchInput, selectInput); 
};

function getSearchResultsIssues(searchIn, selectIn) {
    var LOCURL = "https://www.loc.gov/" + selectIn + "/?q=" + searchIn + "&fo=json";

    fetch(LOCURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displaySearchResults(data);
            })
        } else {
            return;
        };
    });
};