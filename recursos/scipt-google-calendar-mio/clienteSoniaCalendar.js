//Crear la cita

const process= require('process');
const { google } = require('googleapis')

// Require oAuth2 from our google instance.
const { OAuth2 } = google.auth

// Create a new instance of oAuth and set our Client ID & Client Secret.
const oAuth2Client = new OAuth2(
  '809617935008-2e6p8h9o4br43k60nomvse6o6fqp4tcm.apps.googleusercontent.com',
  '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'
)

// Call the setCredentials method on our oAuth2Client instance and set our refresh token.
oAuth2Client.setCredentials({
  refresh_token: '1//04ad5E_Wnb5ssCgYIARAAGAQSNwF-L9IrU3OskO45rlT4kfUvHD-fVU1HQdkycWhm5br8ElkUfYQa5-Ij0gxeK38yRSYxFv9NBdU',
})

// Create a new calender instance.
const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

// Create a new event start date instance for temp uses in our calendar.

const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDay()+2) //Evento para mañana

// Create a new event end date instance for temp uses in our calendar.
const eventEndTime = new Date()
eventEndTime.setDate(eventEndTime.getDay()+2)

eventEndTime.setMinutes(eventEndTime.getMinutes() + 50)

// Create a dummy event for temp uses in our calendar

const nombreCliente="Paco"
const servicio="Psico"
const event = {
  summary: `Cita con: `+nombreCliente,
  description: nombreCliente+ ` ha reservado una cita de ` + servicio ,
  colorId: 1,
  start: {
    dateTime: eventStartTime,
    timeZone: 'Europe/Madrid',
  },
  end: {
    dateTime: eventEndTime,
    timeZone: 'Europe/Madrid',
  },
}

// Check if we a busy and have an event on our calendar for the same time.
calendar.freebusy.query(
  {
    resource: {
      timeMin: eventStartTime,
      timeMax: eventEndTime,
      timeZone: 'Europe/Madrid',
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