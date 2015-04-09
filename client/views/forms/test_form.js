Template.testForm.helpers({
  isVisaTypeInvalid: function() {
    var visaTypeValue = AutoForm.getFieldValue('visa_type');
    
    if(visaTypeValue === undefined) 
      return true;
    else
      return false;
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