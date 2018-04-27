export const getCookie = (name) => {

  const replaceFromName = /([.$?*|{}()[\]\\/+^])/;
  const reCookie = new RegExp(`(?:^|; )${name.replace(replaceFromName, '\\$1')}=([^;]*)`);
  const matches = document.cookie.match(reCookie);
  console.log('matches', matches);
  return matches ? decodeURIComponent(matches[1]) : undefined;
};


export const setCookie = (name, value, options) => {
  options = options || {};

  var expires = options.expires;

  if (typeof expires === 'number' && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + '=' + value;

  for ( var propName in options ) {
    updatedCookie += '; ' + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }

  document.cookie = updatedCookie;
};
