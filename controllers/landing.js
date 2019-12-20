var models = require('../models');

exports.getLanding = function(req, res, next) {
  res.render('landing', { title: 'Express' });
}

exports.submitLead = function(req, res, next) {
  return models.Lead.create({
     email: req.body.leadEmail
  }).then(lead => {
    res.redirect('/leads');
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
    email : req.body.leadEmail 
  },{
    where : {
         id : req.params.lead_id
    }
  }).then(result => {
       res.redirect('/leads/' + req.params.lead_id);
  });
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