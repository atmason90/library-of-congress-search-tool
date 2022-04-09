var getSearchInput = function () {
    var queryString = document.location.search;
    var searchInputArray = queryString.split('&');
    var searchInput = searchInputArray[0].split("=").pop();
    var selectInput = searchInputArray[1].split("=").pop();

    getSearchResultsIssues(searchInput, selectInput); 
};

function getSearchResultsIssues(searchInput, selectInput) {
    var LOCURL = 'https://www.loc.gov/search/?fo=json';

    if(selectInput) {
        LOCURL = 'https://www.loc.gov/' + selectInput + '/?fo=json';
    }
    
    LOCURL = LOCURL + '&q=' + searchInput;

    fetch(LOCURL)
    .then(function (response) {
        if (response.ok) {
            response.json()
            .then(function (data) {
                displaySearchResults(data);
            })
        } else {
            throw response.json();
        };
    });
};