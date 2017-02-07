'use strict';
angular.module('todoApp', [])
.controller('todoController', ["$scope", function($scope){
   
	$scope.setDate= new Date ();
	$scope.taskList = [];
        console.log($scope.taskList);
        if (localStorage.object){
            $scope.taskList = JSON.parse(localStorage.getItem("object"));
            }
	$scope.addTask = function(){
		$scope.taskList.push({description: $scope.newTask, date: $scope.setDate, done : false})
		return $scope.newTask ="", $scope.setDate = new Date ();
	};	
	$scope.remain = function () {
        var count = $scope.taskList.length;
        angular.forEach($scope.taskList, function(task) {
            var sObj = JSON.stringify($scope.taskList);
            localStorage.setItem("object", sObj);
            count -= task.done;
        });
        return count;
    };
    $scope.clearTask = function(task){
        return $scope.newTask ="", $scope.setDate = new Date ();
    }
	$scope.deleteTask = function(index){
		$scope.taskList.splice(this.$index, 1);
        console.log($scope.taskList);   
	};
	$scope.editTask = function(task) {
		$scope.activeTask = task;
	}; 
	$scope.updateTask = function(task) { 
        $scope.activeTask = task.description; 
	};
}]);
