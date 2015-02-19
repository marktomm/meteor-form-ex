FrontLang = new Translator();
FrontLang.use("translations/public");

if(Meteor.isClient) {
  Meteor.startup(function() {
    Translator.setDefaultLanguage(['ee']);
    translate("ee");
  });
  
  Template.langNav.events({
    "click #est": function() {
      translate("ee");
    },
    "click #eng": function() {
      translate("en");
    }
  });
  
  Template.body.helpers({
    trans: FrontLang.createHelper()
  });
  
  Template.testForm.helpers({
    trans: FrontLang.createHelper()
  });
  
  Template.langNav.helpers({
    trans: FrontLang.createHelper()
  });
};

function translate(lang){
  Translator.setLanguage([lang]);
  reRenderFormTranslations();
}

function reRenderFormTranslations(){
  Booking.simpleSchema().messages({
    required: FrontLang.get('form.error.required')
  });
  Booking.simpleSchema().labels({
    gender: FrontLang.get('form.gender.label'),
    visa_type: FrontLang.get('form.visa_type.label'),
  });
}
  
FrontLang.ready(reRenderFormTranslations);