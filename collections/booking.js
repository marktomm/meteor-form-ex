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
  car_rent: {
    type: String,
    allowedValues: [ "mercedes", "lexus", "audi", "ferrari", "opel", "ford", "kia", "mazda" ],
  },
}));

Booking.allow({
  insert: function(){return true;}
});