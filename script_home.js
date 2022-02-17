
let app = angular.module('myApp', ['ngRoute']);

// angularJs for Single-page applications (SPAs) for home, gallery, about, contact, feedback page
        app.config(function ($routeProvider) {
            $routeProvider
                .when("/", { templateUrl: "home.html" })
                .when("/gallery", { templateUrl: "gallery.html" })
                .when("/about", { templateUrl: "about.html" })
                .when("/contact", { templateUrl: "contact.html" })
                .when("/feedback", { templateUrl: "feedback.html" })
        });

        //input data from file data.json for home page
        app.run(function ($rootScope, $http) {
            $http.get("data.json").then(function (response) {
                $rootScope.ds = response.data.project;
                console.log($rootScope.ds)
            });
        });
        app.controller('searchCTR', function ($scope) {
            // $scope.sort = '';
            // $scope.nation = '';
            $scope.reset = function () {
                $scope.sort = '';
                $scope.nation = '';
                $scope.searchName ='';
            }

           
        });
         // Modal
         app.controller('CTRL', function($scope){
            $scope.view = function(id){
                console.log(id);
                let bridge = $scope.ds.find(el => el.id == id);
                console.log(bridge);
                // alert(bridge);
                $scope.name = bridge.name;
                $scope.height = bridge.height;
                $scope.length = bridge.length;
                $scope.width = bridge.width;
                $scope.city = bridge.city;
                $scope.country = bridge.country;
                $scope.build = bridge.build;
                $scope.pic = bridge.pic1;
                $scope.infor1 = bridge.infor1; 
               
                $('#myModal').modal('show');
            }
        });

        