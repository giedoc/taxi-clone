const Booking = require('./booking')

class Passenger {
  constructor(name,location) {
    this.name = name
    this.bookings = []
    this.location = location
  }

  book(driver, origin, destination){
    const booking = new Booking(driver, this, origin, destination)
    this.bookings.push(booking)

    return booking
  }
  printBookingHistory() {
    console.log(this.bookings.forEach(printBooking))
  }

  static create({name, location, bookings}) {
    return new Passenger(name,location, bookings)
  }
}

