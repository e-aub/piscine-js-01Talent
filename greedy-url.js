const getURL = function (dataSet) {
    const urlRegex = /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?(?:[-a-zA-Z0-9()\[\],@:%_\+.~#?&\/=]*)/g;
    return dataSet.match(urlRegex) || []; // Return an empty array if no matches
}

const greedyQuery = function(dataSet) {
    const urls = getURL(dataSet);
    return urls.filter(url => 
        /\?([-a-zA-Z0-9\[\],()@]*=[-a-zA-Z0-9\[\],()@]*&){2,255}([-a-zA-Z0-9\[\],()@]*=[-a-zA-Z0-9\[\],()@]*)/.test(url)
    );
}

const notSoGreedy = function(dataSet) {
    const urls = getURL(dataSet);
    return urls.filter(url => 
        /\?([-a-zA-Z0-9\[\],()@%]*=[-a-zA-Z0-9\[\],()@%]*&){1,2}([-a-zA-Z0-9\[\],()@%]*=[-a-zA-Z0-9\[\],()@%]*)$/.test(url)
    );
}
