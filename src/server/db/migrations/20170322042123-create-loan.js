'use strict';

module.exports = {
	up(queryInterface, Sequelize) {
		return queryInterface.createTable('Loans', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			// eslint-disable-next-line camelcase
			book_id: {
				type: Sequelize.INTEGER
			},
			// eslint-disable-next-line camelcase
			patron_id: {
				type: Sequelize.INTEGER
			},
			// eslint-disable-next-line camelcase
			loaned_on: {
				type: Sequelize.DATE
			},
			// eslint-disable-next-line camelcase
			return_by: {
				type: Sequelize.DATE
			},
			// eslint-disable-next-line camelcase
			returned_on: {
				type: Sequelize.DATE
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down(queryInterface /* , Sequelize */) {
		return queryInterface.dropTable('Loans');
	}
};
