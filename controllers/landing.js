var models = require('../models');
let createError = require('http-errors');

exports.getLanding = function(req, res, next) {
      res.render('landing', { title: 'Express' });
}

exports.submitLead = function(req, res, next) {
  return models.Lead.create({
     name: req.body.leadName,
     email: req.body.leadEmail,
     Contact_number: req.body.leadContact
  }).then(lead => {
      res.redirect('/leads');
  }).catch(error => {
      res.send("Enter valid entry");
  })
}

exports.showLeads = function(req, res, next) {
    return models.Lead.findAll().then(leads => {
      res.render('landing', { title: 'Express', leads: leads });
    })  
}

exports.showLead = function(req, res, next) {
  return models.Lead.findOne({
    where : {
         id : req.params.lead_id
    }
  }).then(lead => {
       res.render('lead', { lead: lead });
  });  
}

exports.showEditLead = function(req, res, next) {
  return models.Lead.findOne({
    where : {
         id : req.params.lead_id
    }
  }).then(lead => {
       res.render('lead/edit_lead', { lead: lead });
  });
}
 
exports.editLead = function(req, res, next) {
  return models.Lead.update({
    email : req.body.leadEmail,
    name : req.body.leadName,
    Contact_number : req.body.leadContact
  },{
    where : {
         id : req.params.lead_id
    }
  }).then(result => {
       res.redirect('/leads/' + req.params.lead_id);
  }).catch(error => {
       res.send("Enter valid entry");
  })
}

exports.deleteLead = function(req, res, next) {
   return models.Lead.destroy({
     where : {
       id : req.params.lead_id
     }
   }).then(result => {
     res.redirect('/leads');
   }) 
}

exports.deleteLeadJson = function(req, res, next) {
  return models.Lead.destroy({
    where : {
      id : req.params.lead_id
    }
  }).then(result => {
     res.send({ msg : "Success" });
  }) 
}