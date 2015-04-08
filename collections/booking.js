Booking = new Mongo.Collection("booking");

Booking.attachSchema(new SimpleSchema({
  visa_type: {
    type: String,
    label: schemaTranslate("test_form.visa_type.schema.label", "Visa type" ),
    allowedValues: [ "business", "tourist" ],
    autoform: {
      options: [
        { label: "Business", value: "business" },
        { label: "Tourist", value: "tourist" }
      ],
      firstOption: schemaTranslate("common.spacefill", "-" ),
    }
  },
  car_rent: {
    label: schemaTranslate("test_form.car.schema.label", "Car type" ),
    type: String,
    allowedValues: [ "mercedes", "lexus", "audi", "ferrari", "opel", "ford", "kia", "mazda" ],
    autoform:{
      firstOption: schemaTranslate("common.spacefill", "-" ),
    }
  },
}));
 
Booking.allow({
  insert: function(){return true;}
});

function schemaTranslate(t_str, e_str)
{
  return function() {
    if(Meteor.isClient)
      return (TAPi18n.__(t_str));
    else
      return e_str;
  } 
}