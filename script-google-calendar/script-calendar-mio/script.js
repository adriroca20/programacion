var clientId = '809617935008-2e6p8h9o4br43k60nomvse6o6fqp4tcm.apps.googleusercontent.com';
var apiKey = 'AIzaSyDLtWKoeiJrHpeupnRdCArNFRs2r7LZccc';
var scopes = 'https://www.googleapis.com/auth/calendar';

function handleClientLoad() {
    gapi.client.setApiKey(apiKey);
    window.setTimeout(checkAuth,1);
    checkAuth();
  }
  
  function checkAuth() {
    gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true},
        handleAuthResult);
  }
  
  function handleAuthResult(authResult) {
    var authorizeButton = document.getElementById('boton-reserva');
    if (authResult) {
      authorizeButton.style.visibility = 'hidden';
      makeApiCall();
    } else {
      authorizeButton.style.visibility = '';
      authorizeButton.onclick = handleAuthClick;
     }
  }
  
  function handleAuthClick(event) {
    gapi.auth.authorize(
        {client_id: clientId, scope: scopes, immediate: false},
        handleAuthResult);
    return false;
  }

  var resource = {
    "summary": "Appointment",
    "location": "Somewhere",
    "start": {
      "dateTime": "2021-12-02T10:00:00.000-07:00"
    },
    "end": {
      "dateTime": "2011-12-02T10:25:00.000-07:00"
    }
  };

  function makeApiCall() {
    gapi.client.load('calendar', 'v3', function() {
      var request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': resource
      });     
      request.execute(function(resp) {
        console.log(resp);
      });
    });
  }