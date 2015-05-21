// Angular App: Inject ngAnimate, ui-router, and ui.bootstrap (etc.)
// =========================================================================
angular.module('movieApp', ['ngAnimate', 'ui.router', 'ui.bootstrap'])

.factory('Data', function() {
    
    return { sortType: '', 
             selectedMovie: '',
             selectedGenre: '',
             selectedRating: '',
             found: '' };
})

// Configure Routes
// =========================================================================
.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('movieForm', {
            url: '/movieForm',
            templateUrl: 'view/movieForm.html',
            controller: 'formController'
        })
        
        .state('movieForm.step1', {
            url: '/step1',
            templateUrl: 'view/step1.html'
        })

        .state('movieForm.step2', {
            url: '/step2',
            templateUrl: 'view/step2.html'
        })

        .state('movieForm.step3', {
            url: '/step3',
            templateUrl: 'view/step3.html'
        })

         .state('movieForm.step4', {
            url: '/step4',
            templateUrl: 'view/step4.html'
        });

    $urlRouterProvider.otherwise('/movieForm/step1');
})

// Controllers for Form
// =========================================================================
.controller('formController', ['$scope', 'Data', function($scope, Data) {
    
    $scope.userData = {};

    $scope.Data = Data;

    $scope.processForm = function() {
        alert(
            'Thank you for choosing Movie Night! \n ' + '\n' +
            'You purchased ' + $scope.userData.ticket + ' tickets for \n' +
            Data.selectedMovie + ' playing at the \n ' + $scope.userData.theater + ' at ' +
            $scope.userData.time + ' p.m. \n' + '\n' +
            'Enjoy your Movie!');
    };

    // Array with data:
    $scope.movies = [
        {title:'Monkey Kingdom', genre: 'Adventure', rating: 'G'},
        {title:'Pitch Perfect 2', genre: 'Musical', rating: 'PG13'},
        {title:'Longest Ride', genre: 'Romance', rating: 'PG13'},
        {title:'Furious 7', genre: 'Action', rating: 'PG13'},
        {title:'Home', genre: 'Adventure', rating: 'PG'},
        {title:'Insurgent', genre: 'Action', rating: 'PG13'}
    ];

    // Hard coding for Genres and Ratings.
    $scope.genres = [
        {genre: 'Action'},
        {genre: 'Adventure'},
        {genre: 'Comedy'},
        {genre: 'Musical'},
        {genre: 'Romance'}
    ];

    $scope.ratings = [
        {rating: 'G'},
        {rating: 'PG'},
        {rating: 'PG13'},
        {rating: 'R'}
    ];

}]);
