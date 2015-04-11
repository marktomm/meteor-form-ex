SchemaHelpers = {};

SchemaHelpers.schemaTranslate = function(t_str, e_str)
{
  return function() {
    if(Meteor.isClient)
      return (TAPi18n.__(t_str));
    else
      return e_str;
  } 
}
SchemaHelpers.Schemas = {};