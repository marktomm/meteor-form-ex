Meteor.startup(function() {
  TAPi18n.setLanguage("ee");
});

Template.langNav.events({
  "click #est": function() {
    translate("ee");
  },
  "click #eng": function() {
    translate("en");
  }
});

function translate(lang){
  TAPi18n.setLanguage(lang);
}