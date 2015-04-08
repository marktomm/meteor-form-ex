if(Meteor.isClient)
{
  Tracker.autorun(function() {
      SimpleSchema.messages({
          required: TAPi18n.__("common.form_error.required")
      });

  });
}