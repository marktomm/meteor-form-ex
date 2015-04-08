Booking = new Mongo.Collection('booking');

Booking.attachSchema(new SimpleSchema({
  gender:{
    type:String,
    allowedValues: ["male", "female"],
  },
  visa_type: {
    type: String,
    allowedValues: [ "business", "tourist" ],
  },
  car_rent: {
    type: String,
    allowedValues: [ "mercedes", "lexus", "audi", "ferrari", "opel", "ford", "kia", "mazda" ],
  },
}));

Booking.allow({
  insert: function(){return true;}
});