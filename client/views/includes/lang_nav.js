Meteor.startup(function() {
  Translator.setDefaultLanguage(['ee']);
  translate("ee");
});

function reRenderFormTranslations(){
  Booking.simpleSchema().messages({
    required: FrontLang.get('form.error.required')
  });
  Booking.simpleSchema().labels({
    gender: FrontLang.get('form.gender.label'),
    visa_type: FrontLang.get('form.visa_type.label'),
  });
}

function translate(lang){
  Translator.setLanguage([lang]);
}


Tracker.autorun(reRenderFormTranslations);


Template.langNav.helpers({
  trans: FrontLang.createHelper()
});

Template.langNav.events({
  "click #est": function() {
    translate("ee");
  },
  "click #eng": function() {
    translate("en");
  }
});
