var createClapprIframe = function(params, queryString) {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", 0);
    iframe.setAttribute("allowfullscreen", true);
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute('width', params.width || 640);
    iframe.setAttribute('height', params.height || 360);
    iframe.setAttribute('src', "http://localhost:8000/player.html" + queryString);
    iframe.attachTo = function(el) {
      el.appendChild(this);
    };
    return iframe;
};

var buildQueryString = function(params) {
  var result = "";
  for (var param in params) {
    result += !!result? "&" : "?";
    result += encodeURIComponent(param) + "=" + encodeURIComponent(params[param]);
  }
  return result;
};

clapprLoad = function(elementId, params) {
  var queryString = buildQueryString(params);
  var iframe = createClapprIframe(params, queryString);
  var el = document.getElementById(elementId);
  el.appendChild(iframe);
};


