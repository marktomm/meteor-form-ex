Template.testForm.helpers({
    luxCarOptions: function(){
      return  [
                { label: "Mercedes", value: "mercedes"  },
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