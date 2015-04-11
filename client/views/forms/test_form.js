Template.testForm.events({
  
  // Awful hack to get by autoform bug #861
  "click #car": function() {
    Session.set('formCarOption', AutoForm.getFieldValue('car', 'insertBookingForm'));
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