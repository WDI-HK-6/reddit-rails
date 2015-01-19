// var app = angular.module('app_name', arr_of_module_name);
// arr_of_module_name = ['ngRoute', 'ng-polymer-elements']

// Successfully initialize Angular with no extra modules. So, we left the array to be blank
var app = angular.module('kitty', ['ngRoute']);

// Define a controller inside Angular. Please don't get this controller confused with Rails Controllers. They are different

// This is a template for initializing an Angular controller
// app.controller('name_of_controller', function('refer to the modules if you have any'){

// })

// Let's define the routing configurations for Angular
// We are moving all the ruby views to Angular views

// Templates for configuring routes
// app.config(function($routeProvider){
//   $routeProvider.when('/path you specify', {
//     templateUrl: 'the path for the view',
//     controller: 'controller name'
//   })
// })

app.config(function($routeProvider) {
  // $routeProvider.when('',{}).when('',{}).when('',{})

  $routeProvider.when('/posts', {
    templateUrl: '../assets/posts-list.html',
    controller: 'PostListCtrl' // the name of this controller should match with the actual name of the actual controller
  }).
  when('/posts/:id', {
    templateUrl: '',
    controller: ''
  });
})


app.controller('PostListCtrl', function($scope, $http, $routeParams){
  var array = ["hello", "kitty", "world"];
  $scope.words = array;

  $routeParams.id

  // What's 'get' in HTTP verbs? It reads / collects information

  // This is a template for AJAX Get request
  // $http.get('url').success(function(data){
  //   console.log(data);
  // });

  $http.get('/posts.json').success(function(data, status, xhr){
    // console.log(data);
    // console.log(status);
    // console.log(xhr);
    $scope.posts = data.posts;
    console.log($scope.posts)
  })
})

// Naming convertion for controller -> "NameCtrl"
app.controller('PostCtrl', function($scope){
  // this $ is NOT jQuery
  var myBrand = "Coca-cola";

  $scope.brand = myBrand;
  $scope.prices = [7.90, 10, 8.50, 1, 2, 3, 4, 5];
  $scope.totalPrice = function(arr){
    var total = 0;
    arr.forEach(function(item){
      total += item;
    })
    return total;
  }

  // Print out $scope so that I can see it
  console.log($scope);

  $scope.addPrice = function(){
    if ($scope.priceForm.$valid && $scope.newPrice != null){
      $scope.prices.push(Number($scope.newPrice));
      $scope.newPrice = "";
 
    } else {
      alert("form is invalid");
    }
  };
});

app.controller('CompanyCtrl', function($scope){
  $scope.companies = ["Apple", "Microsoft", "Google"];
})