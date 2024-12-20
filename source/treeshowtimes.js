function addClicks(owner, treeid) {
    debugger
    try {
        var url = '/system/resource/code/news/click/treeshowtimes.jsp?wbtreeid=' + treeid + '&owner=' + owner;
        var xmlhttp = _dynClicks_ajax();
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    } catch (e) {
    }
}

function _dynClicks_ajax() {
    var xmlhttp = null;
    try {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp = new XMLHttpRequest();
            } catch (e) {
            }
        }
    }
    return xmlhttp;
}
