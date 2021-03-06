(function () {
	'use strict';

	angular
		.module('app')
		.config(routeConfig)
		.run(run);

	function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				controller: 'HomeController',
				templateUrl: 'templates/home.html'
			})
			.state('books', {
				url: '/books/:type',
				controller: 'BooksController',
				templateUrl: 'templates/books/books.html'
			})
			.state('books.new', {
				url: '/new',
				views: {
					child: {
						controller: 'BookController',
						templateUrl: 'templates/books/book.html'
					}
				}
			})
			.state('books.edit', {
				url: '/edit/:id',
				views: {
					child: {
						controller: 'BookController',
						templateUrl: 'templates/books/book.html'
					}
				}
			})
			.state('book-detail', {
				url: '/books/detail/:id',
				controller: 'BookDetailController',
				templateUrl: 'templates/books/book-detail.html'
			})
			.state('patrons', {
				url: '/patrons',
				controller: 'PatronsController',
				templateUrl: 'templates/patrons/patrons.html'
			})
			.state('patrons.new', {
				url: '/new',
				views: {
					child: {
						controller: 'PatronController',
						templateUrl: 'templates/patrons/patron.html'
					}
				}
			})
			.state('patrons.edit', {
				url: '/edit/:id',
				views: {
					child: {
						controller: 'PatronController',
						templateUrl: 'templates/patrons/patron.html'
					}
				}
			})
			.state('patron-detail', {
				url: '/patrons/detail/:id',
				controller: 'PatronDetailController',
				templateUrl: 'templates/patrons/patron-detail.html'
			})
			.state('loans', {
				url: '/loans/:type',
				controller: 'LoansController',
				templateUrl: 'templates/loans/loans.html'
			})
			.state('loans.new', {
				url: '/new',
				views: {
					child: {
						controller: 'LoanController',
						templateUrl: 'templates/loans/loan.html'
					}
				}
			})
			.state('loans.return', {
				url: '/return/:id',
				views: {
					child: {
						controller: 'LoanController',
						templateUrl: 'templates/loans/loan.html'
					}
				}
			});

		$urlRouterProvider
			.otherwise('/');

		$locationProvider.html5Mode(true);
	}

	function run($rootScope) {
		// eslint-disable-next-line max-params
		$rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
			$rootScope.fromState = {
				fromState,
				fromParams
			};
		});
	}
})();
