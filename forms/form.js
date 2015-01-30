Booking = new Mongo.Collection("booking");
Booking.attachSchema(new SimpleSchema({
  visa_type: {
    type: String,
    label: "Visa type",
    allowedValues: [ "business", "tourist" ],
    autoform: {
      options: [
        { label: "Business", value: "business" },
        { label: "Tourist", value: "tourist" }
      ]
    }
  },
  lux_car_rent: {
    type: String,
    label: "Luxury Vehicle Options",
    allowedValues: [ "mercedes", "lexus", "audi", "ferrari" ],
    autoform: {
      options: [
        { label: "Mercedes", value: "merecedes"  },
        { label: "Lexus", value: "lexus" },
        { label: "Audi", value: "audi" },
        { label: "Ferrari", value: "ferrari" }
      ]
    }
  },
  regular_car_rent: {
    type: String,
    label: "Vehicle Options",
    allowedValues: [ "opel", "ford", "kia", "mazda" ],
    autoform: {
      options: [
        { label: "Opel", value: "opel"  },
        { label: "Ford", value: "ford" },
        { label: "Kia", value: "kia" },
        { label: "Mazda", value: "mazda" }
      ]
    }
  }
  
//  author: {
//    type: String,
//    label: "Author"
//  },
//  copies: {
//    type: Number,
//    label: "Number of copies",
//    min: 0
//  },
//  lastCheckedOut: {
//    type: Date,
//    label: "Last date this book was checked out",
//    optional: true
//  },
//  summary: {
//    type: String,
//    label: "Brief summary",
//    optional: true,
//    max: 1000
//  },
//  cost: {
//    type: Number,
//    label: 'Cost',
//    optional: true,
//    max: 1000
//  }
}));
