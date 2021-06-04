const Passenger = require('./passenger')
const Driver = require('./driver')
const passengerDatabase = require('./passenger-database')
const driverDatabase = require('./driver-database')


function printBooking(booking) {
  console.log(booking.passenger.name, 'wants to travel from', booking.origin, 'to', booking.destination)
}

const armagan = new Passenger('Armagan', 'kreuzberg')
const stefan = new Driver('Stefan', 'treptower park')
const mert = new Passenger('mert', 'mitte')

function printBooking(booking) {
  console.log(booking.passenger.name, 'booked', booking.driver.name)
}

function printBookingHistory(passenger) {
  passenger.bookings.forEach(printBooking)
}

armagan.book(stefan, 'kreuzberg', 'neukoln')
armagan.book(stefan, 'berlin', 'paris')
armagan.book(stefan, 'paris', 'stocholm')
armagan.book(stefan, 'mitte', 'munich')


//const booking1 = armagan.book(stefan,'Kreuzberg','Neukolln')
//const booking2 = armagan.book(stefan,'neukoln', 'mitte' )
//const booking3 = armagan.book(stefan, 'Mitte', 'Kreuzberg')


//db.save('drivers', [stefan])




//db.remove('passengers',2)
//const passengers = db.load('passengers')
const armagan = passengerDatabase.findByname('Armagan')

armagan.book(stefan, 'SXF', 'TXL')
await passengerDatabase.save([armagan, mert])

//const armagan = db.findByName('passengers', 'armagan')
printBookingHistory(armagan)
//armagan.book(stefan,'sxf', 'txl')
//passengers.forEach(p => console.log(p.name))
//passengers.forEach(printBookingHistory)
//printBookingHistory(armagan)

