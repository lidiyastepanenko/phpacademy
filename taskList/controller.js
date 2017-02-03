'use strict';
angular.module('todoApp.controller', [])
.controller('todoController', ["$scope", function($scope){
	$scope.setDate= new Date ();
	$scope.taskList = [];
        console.log($scope.taskList);
        if (localStorage.object){
                $scope.taskList = JSON.parse(localStorage.getItem("object"));
                console.log($scope.taskList);
                console.log(new Date ());
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
                    console.log(sObj);
                });
            return count;
        };
	$scope.deleteTask = function(index){
		$scope.taskList.splice(this.$index, 1);
	};
	$scope.editTask = function(task) {
		$scope.activeTask = task;
    	console.log($scope.activeTask);
	}; 
	$scope.updateTask = function(task) { 
    	$scope.activeTask = task.description; 
    	console.log(task.description)
	};
	
}]);