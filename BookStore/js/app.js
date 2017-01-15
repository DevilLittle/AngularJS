var bookStoreApp=angular.module('bookStoreApp',
    ['ngRoute','ngAnimate','bookStoreCtrls',
    'bookStoreFilters','bookStoreServices',
    'bookStoreDirectives']);

bookStoreApp.config(function($routeProvider){

    $routeProvider.when('./hello',{
        templateUrl:'tpls/hello.html',
        controller:'Helloctrl'
    }).when('./list',{
        templateUrl:'tpls/bookList.html',
        controller:'BookListCtrl'
    }).otherwise({
        redirectTo:'/hello'
    })
});