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


if (Meteor.isClient) {
  
  Template.testForm.helpers({
    luxCarOptions: function(){
      return  [
                { label: "Mercedes", value: "merecedes"  },
                { label: "Lexus", value: "lexus" },
                { label: "Audi", value: "audi" },
                { label: "Ferrari", value: "ferrari" }
              ];
    },
    regularCarOptions: function(){
      return  [
                { label: "Opel", value: "opel"  },
                { label: "Ford", value: "ford" },
                { label: "Kia", value: "kia" },
                { label: "Mazda", value: "mazda" }
              ];
    }
  });
  
  AutoForm.hooks({
    insertBookingForm: {
      before: {
        insert: function(doc, template) {
          console.log("before");
          console.log(doc);
          // send email f.ex.
          return doc;
        }
      },
      after: {
        insert: function(error, result, template) {
          console.log("after");
          if(error){
            console.log("Insert Error:", error);
          }
          else
          {
            console.log("Insert Result:", result);
          }
          //after db upd
        }
      },
    }
  });
};

Booking.allow({
  insert: function(){return true;}
});
