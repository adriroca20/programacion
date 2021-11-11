
//Obtener datos del cliente
var deMañanas = true;

const picker = document.getElementById("fecha");
var today = new Date().toISOString().split('T')[0];
document.getElementsByName("somedate")[0].setAttribute('min', today);

picker.addEventListener('input', function (e) {
  var day = new Date(this.value).getUTCDay();
  if ([6, 0, 3, 4].includes(day)) {
    e.preventDefault();
    this.value = '';
    alert('Atendemos Lunes, Martes y Viernes. \nPor favor, elija un dia permitido. \n Muchas gracias.');
  }
  else if ([5].includes(day)) {
    deMañanas = false;
  }
  else { deMañanas = true; }
});

//Selector de horas

var x = document.getElementById("servicio");
var items;

var NoventaMins="PNIE primeras visitas 90 min - $VALOR";

x.addEventListener('click', function (e) {
  if (x.value == "PNIE primeras visitas 90 min - $VALOR") {
    //4:45 PM
    if (deMañanas) {
      items = ["9:00 AM", "10:30 AM", "12:00 PM"];
    }
    else {
      items = ["9:00", "10:30", "12:00", "16:00", "17:30"];
    }

  }
  else if (x.value == "PNIE revisiones 45 min - $VALOR") {
    //4:45 PM
    if (deMañanas) {
      items = ["9:00 AM", "9:45 AM", "10:30 AM", "11:15 AM", "12:00 PM", "12:45 PM"];
    }
    else {
      items = ["9:00", "9:45", "10:30", "11:15", "12:00", "12:45 ", "16:00 ", "16:45", "17:30"];
    }

  }
  else if (x.value === "Consultas express 30 min - $VALOR") {
    //4:45 PM
    if (deMañanas) {
      items = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "13:00 PM"];
    }
    else {
      items = ["9:00", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "16:00", "16:30", "17:00", "17:30"];
    }

  }
  else if (x.value === "Psicoterapia 50 min - $VALOR") {
    //4:45 PM
    if (deMañanas) {
      items = ["9:00 AM", "9:50 AM", "10:40 AM", "11:30 AM", "12:20 PM", "13:10 PM"];
    }
    else {
      items = ["9:00", "9:50", "10:40", "11:30", "12:20", "13:10", "16:00", "16:50", "17:40"];
    }

  }
  else {
    items = [""]
  }
  var str = ""
  for (var item of items) {
    str += "<option>" + item + "</option>"
  }
  document.getElementById("time").innerHTML = str;
});



//Crear la cita
const { google } = require('googleapis')

// Require oAuth2 from our google instance.
const { OAuth2 } = google.auth

// Create a new instance of oAuth and set our Client ID & Client Secret.
const oAuth2Client = new OAuth2(
  '809617935008-74f0msbfucdc5e9p41oc71jsrgb073hc.apps.googleusercontent.com',
  'eyD_GgyKUf8tUEM-CCRkcVl0'
)

// Call the setCredentials method on our oAuth2Client instance and set our refresh token.
oAuth2Client.setCredentials({
  refresh_token: '1//04gQRchM1JLptCgYIARAAGAQSNwF-L9Ir7kNy69qVc6o94egVD-AJHaAic4s3TdmpKf_x4wGE8l7ppbtebTv_cbl3uNgo3hfBXTU',
})

// Create a new calender instance.
const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

// Create a new event start date instance for temp uses in our calendar.
const eventStartTime = new Date()
eventStartTime.setDate(day)

// Create a new event end date instance for temp uses in our calendar.
const eventEndTime = new Date()
eventEndTime.setDate(day)

if(){}
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)

// Create a dummy event for temp uses in our calendar
const event = {
  summary: `Meeting with David`,
  location: `3595 California St, San Francisco, CA 94118`,
  description: `Meet with David to talk about the new client project and how to integrate the calendar for booking.`,
  colorId: 1,
  start: {
    dateTime: eventStartTime,
    timeZone: 'America/Denver',
  },
  end: {
    dateTime: eventEndTime,
    timeZone: 'America/Denver',
  },
}

// Check if we a busy and have an event on our calendar for the same time.
calendar.freebusy.query(
  {
    resource: {
      timeMin: eventStartTime,
      timeMax: eventEndTime,
      timeZone: 'America/Denver',
      items: [{ id: 'primary' }],
    },
  },
  (err, res) => {
    // Check for errors in our query and log them if they exist.
    if (err) return console.error('Free Busy Query Error: ', err)

    // Create an array of all events on our calendar during that time.
    const eventArr = res.data.calendars.primary.busy

    // Check if event array is empty which means we are not busy
    if (eventArr.length === 0)
      // If we are not busy create a new calendar event.
      return calendar.events.insert(
        { calendarId: 'primary', resource: event },
        err => {
          // Check for errors and log them if they exist.
          if (err) return console.error('Error Creating Calender Event:', err)
          // Else log that the event was created.
          return console.log('Calendar event successfully created.')
        }
      )

    // If event array is not empty log that we are busy.
    return console.log(`Sorry I'm busy...`)
  }
)