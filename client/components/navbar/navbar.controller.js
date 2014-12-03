'use strict';

angular.module('newyappeApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/',
      'class': 'glyphicon glyphicon-home'
    }, {
      'title': 'Settings',
      'link': '/settings',
      'class': 'glyphicon glyphicon-cog'
    }
    , {
      'title': 'Profile',
      'link': '/profile',
      'class': 'glyphicon glyphicon-tree-deciduous'
    }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });