



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
   
    $scope.reset = function () {
        $scope.sort = '';
        $scope.nation = '';
        $scope.searchName = '';
    }


});
// Modal
app.controller('CTRL', function ($scope,$rootScope) {
    $scope.view = function (id) {
        console.log(id);
        let bridge = $scope.ds.find(el => el.id == id);
        console.log(bridge);
        
        $scope.name = bridge.name;
        $scope.infor1 = bridge.infor1;
        $('#myModal').modal('show');
    }
    

// checkbox filter
    $scope.choose = function () {
        let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        let cats = [];
        for (var checkbox of markedCheckbox) {
            cats.push(checkbox.value);
        }

        let data = $rootScope.ds;

        console.log(data);  

        $scope.ds = (cats.length == 0) ? data : data.filter(item => cats.indexOf(item.type) >= 0);
    }

});
// 






