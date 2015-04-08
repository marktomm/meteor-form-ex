Template.testForm.helpers({
  genderOptions: function(){
  return [
          { label: TAPi18n.__('test_form.gender.male'), value: "male" },
          { label: TAPi18n.__('test_form.gender.female'), value: "female" }
         ];
  },
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
        // runs on client side
        console.log("before");
        console.log(doc);
        
        doc = _.extend(doc, {
          lang: TAPi18n.getLanguage()
        })
        
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