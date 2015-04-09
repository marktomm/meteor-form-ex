var genderOptions = [
          { label: schemaTranslate('test_form.gender.male', 'male'), value: "male" },
          { label: schemaTranslate('test_form.gender.female', 'female'), value: "female" }
         ];

var luxCarOptions = [
            { label: "Mercedes", value: "mercedes"  },
            { label: "Lexus", value: "lexus" },
            { label: "Audi", value: "audi" },
            { label: "Ferrari", value: "ferrari" }
          ];

var regularCarOptions = [
            { label: "Opel", value: "opel"  },
            { label: "Ford", value: "ford" },
            { label: "Kia", value: "kia" },
            { label: "Mazda", value: "mazda" }
          ];

Booking = new Mongo.Collection("booking");

Booking.attachSchema(new SimpleSchema({
  gender:{
    type: String,
    label: schemaTranslate("test_form.gender.schema.label", "Visa type" ),
    allowedValues: ["male", "female"],
    autoform: {
      firstOption: schemaTranslate("common.spacefill", "-" ),
      options: genderOptions 
    }
  },
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
      options: function () {
        var docId = AutoForm.getFieldValue('visa_type');
        
        if(docId == "business")
          return luxCarOptions;
        else if(docId == "tourist")
          return regularCarOptions;
        else
          return null;
      }
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