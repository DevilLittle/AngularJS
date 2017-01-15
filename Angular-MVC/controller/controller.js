function CommonController($scope){
    $scope.commonFn=function(){
        alert("This is a common button!");
    }
}

function Controller1($scope){
    $scope.greeting={
        text:"Hello1"
    };
    $scope.test1=function(){
        alert("This is the button for Controller1");
    }

}

function Controller2($scope){
    $scope.greeting={
        text:"Hello2"
    };
    $scope.test2=function(){
        alert("This is the button for Controller2");
    }

}