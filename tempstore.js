function extractDomain(url) {
    var domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];

    return domain;
}



function finish(data){
  xmlDoc = $.parseXML( xmlString ),
  $xml = $( xmlDoc ),
  Id = $xml.find( 'id' );
  size = $xml.find('title');
    productNumber = new Array();
    productSize = new Array();

   for ( i=1; i<Id.length;i++){
   productNumber[i-1] = Id[i].innerHTML;
  } 

    for (j=1; j<size.length;j++){
   productSize[j-1] = size[j].textContent;
  } 
  oldUrl = extractDomain(window.location.href);
  newUrl = oldUrl + "/cart/" + productNumber[0] + ":1";
  window.location.assign("http://"+newUrl);
}






var xmlString;
$.ajax({
    type: "GET",
    url: window.location.href,
    dataType: "xml",
    success: function(data){
    xmlString = (new XMLSerializer()).serializeToString(data)
    finish(xmlString);
    } //should restore xml page in var xmlString as a string
    });