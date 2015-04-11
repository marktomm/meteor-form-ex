var genderOptions = [
          { label: SchemaHelpers.schemaTranslate('test_form.gender.male', 'male'), value: "male" },
          { label: SchemaHelpers.schemaTranslate('test_form.gender.female', 'female'), value: "female" }
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
    label: SchemaHelpers.schemaTranslate("test_form.gender.schema.label", "Visa type" ),
    allowedValues: ["male", "female"],
    autoform: {
      firstOption: SchemaHelpers.schemaTranslate("common.spacefill", "-" ),
      options: genderOptions
    }
  },
  
  
  visa_type: {
    type: String,
    label: SchemaHelpers.schemaTranslate("test_form.visa_type.schema.label", "Visa type" ),
    allowedValues: [ "business", "tourist" ],
    autoform: {
      firstOption: SchemaHelpers.schemaTranslate("common.spacefill", "-" ),
      options: [
        { label: "Business", value: "business" },
        { label: "Tourist", value: "tourist" }
      ],
    }
  },
  
  
  car: {
    type: Boolean,
    label: SchemaHelpers.schemaTranslate("test_form.car.label"),
    autoform: {
      type: function() {
        if(AutoForm.getFieldValue('visa_type') === undefined)
          return "hidden";
        
        return "";
      }
    }
  },
  car_rent: {
    label: SchemaHelpers.schemaTranslate("test_form.car_rent.schema.label", "Car type" ),
    type: String,
    allowedValues: [ "mercedes", "lexus", "audi", "ferrari", "opel", "ford", "kia", "mazda"],
    optional: function() {
      if(Meteor.isClient) 
        return !AutoForm.getFieldValue('car');
      else
        return true;
    },
    autoform:{
      firstOption: SchemaHelpers.schemaTranslate("common.spacefill", "-" ),
      options: function () {
        switch(AutoForm.getFieldValue('visa_type')) {
          case "business": return luxCarOptions;
          case "tourist": return regularCarOptions;
          default: return null;
        }
      },
      type: function() {
        if(!Session.get('formCarOption'))
          return "hidden";
          
        return "";
      }
    }
  },
}));

Booking.allow({
  insert: function(){return true;}
});