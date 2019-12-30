'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.addColumn('Leads', 'name', {
          allowNull: false,
          type: Sequelize.STRING
     }),
     queryInterface.addColumn('Leads', 'Contact_number', {
          allowNull: true,
          type: Sequelize.STRING
     })
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.removeColumn('Leads', 'name'),
     queryInterface.removeColumn('Leads', 'Contact_number')
  }
};
