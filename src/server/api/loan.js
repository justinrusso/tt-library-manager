'use strict';

const express = require('express');

const Loan = require('../db/models').Loan;
const Book = require('../db/models').Book;
const Patron = require('../db/models').Patron;

function routes() {
	const router = new express.Router();
	router.route('/')
		.post((req, res) => { // eslint-disable-line
			// Add new loan
		})
		.get((req, res) => {
			// Get all loans
			Loan.findAll({
				where: {active: true},
				include: [
					{model: Book},
					{model: Patron}
				]
			})
				.then(loans => {
					res.json(loans);
				})
				.catch(error => {
					res.status(500).json(error);
				});
		});

	/**
	 * Middleware for single loan
	 * Used for get, put, and remove
	 * Retrieves 1 loan and attatches to req object
	 */
	router.use('/:loanId', (req, res, next) => {
		Loan.findById(req.params.loanId)
			.then(loan => {
				if (loan) {
					req.loan = loan;
					return next();
				}
				return res.status(404).send('No loan found.');
			})
			.catch(error => {
				res.status(500).json(error);
			});
	});

	router.route('/:loanId')
		.get((req, res) => {
			res.json(req.loan);
		})
		.put((req, res) => {
			req.loan.update(req.body)
				.then(loan => {
					res.json(loan);
				})
				.catch(error => {
					res.status(500).json(error);
				});
		})
		.delete((req, res) => {
			req.loan.update({active: false})
				.then(() => {
					res.status(204).send('Loan removed');
				})
				.catch(error => {
					res.status(500).json(error);
				});
		});

	return router;
}

module.exports = routes();
