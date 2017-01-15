var bookStoreCtrls=angular.module('bookStoreCtrls',[]);

bookStoreCtrls.controller('HelloCtrl',['$scope',function($scope){
    $scope.greeting={
        text:"hello"
    };
}]);

bookStoreCtrls.controller('BookListCtrl',['$scope',function($scope){
    $scope.books=[
    {title:'计算机网络'，author:'谢希仁'},
    {title:'诛仙',author:'萧鼎'},
    {title:'鬼吹灯',author:'天下霸唱'}
    ];
}])