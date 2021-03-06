(function () {
	'use strict';

	angular.module('app')
		.service('DataService', function ($location, $http) {
			const baseUrl = `http://${$location.host()}:${$location.port()}`;

			/*
				Books
			 */
			this.getBooks = function () {
				return new Promise((resolve, reject) => {
					$http.get(`${baseUrl}/api/books`)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			this.getAvailableBooks = function () {
				return new Promise((resolve, reject) => {
					$http.get(`${baseUrl}/api/books/available`)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			this.getOverdueBooks = function () {
				return new Promise((resolve, reject) => {
					$http.get(`${baseUrl}/api/books/overdue`)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			this.getCheckedOutBooks = function () {
				return new Promise((resolve, reject) => {
					$http.get(`${baseUrl}/api/books/checked_out`)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			this.getBook = function (bookId) {
				return new Promise((resolve, reject) => {
					$http.get(`${baseUrl}/api/books/${bookId}`)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			this.addBook = function (bookData) {
				return new Promise((resolve, reject) => {
					$http.post(`${baseUrl}/api/books`, bookData)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			this.updateBook = function (bookId, bookData) {
				return new Promise((resolve, reject) => {
					$http.put(`${baseUrl}/api/books/${bookId}`, bookData)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			this.removeBook = function (bookId) {
				return new Promise((resolve, reject) => {
					$http.delete(`${baseUrl}/api/books/${bookId}`)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			/*
				Loans
			 */
			this.getLoans = function () {
				return new Promise((resolve, reject) => {
					$http.get(`${baseUrl}/api/loans`)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			this.getLoansForBook = function (bookId) {
				return new Promise((resolve, reject) => {
					$http.get(`${baseUrl}/api/books/${bookId}/loans`)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			this.getLoansForPatron = function (patronId) {
				return new Promise((resolve, reject) => {
					$http.get(`${baseUrl}/api/patrons/${patronId}/loans`)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			this.getOverdueLoans = function () {
				return new Promise((resolve, reject) => {
					$http.get(`${baseUrl}/api/loans/overdue`)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			this.getCheckedOutLoans = function () {
				return new Promise((resolve, reject) => {
					$http.get(`${baseUrl}/api/loans/checked_out`)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			this.getLoan = function (loanId) {
				return new Promise((resolve, reject) => {
					$http.get(`${baseUrl}/api/loans/${loanId}`)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			this.addLoan = function (loanData) {
				return new Promise((resolve, reject) => {
					$http.post(`${baseUrl}/api/loans`, loanData)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			this.updateLoan = function (loanId, loanData) {
				return new Promise((resolve, reject) => {
					$http.put(`${baseUrl}/api/loans/${loanId}`, loanData)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			this.removeLoan = function (loanId) {
				return new Promise((resolve, reject) => {
					$http.delete(`${baseUrl}/api/loans/${loanId}`)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			/*
				Patrons
			 */
			this.getPatrons = function () {
				return new Promise((resolve, reject) => {
					$http.get(`${baseUrl}/api/patrons`)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			this.getPatron = function (patronId) {
				return new Promise((resolve, reject) => {
					$http.get(`${baseUrl}/api/patrons/${patronId}`)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			this.addPatron = function (patronData) {
				return new Promise((resolve, reject) => {
					$http.post(`${baseUrl}/api/patrons`, patronData)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			this.updatePatron = function (patronId, patronData) {
				return new Promise((resolve, reject) => {
					$http.put(`${baseUrl}/api/patrons/${patronId}`, patronData)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};

			this.removePatron = function (patronId) {
				return new Promise((resolve, reject) => {
					$http.delete(`${baseUrl}/api/patrons/${patronId}`)
						.then(successResponse => {
							resolve(successResponse.data);
						}, errorResponse => {
							reject(errorResponse);
						});
				});
			};
		});
})();
