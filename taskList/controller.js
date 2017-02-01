'use strict';
angular.module('todoApp.controller', [])
.controller('todoController', ["$scope", function($scope){
	$scope.newTask = "";
	$scope.taskList = [
		{description: "Купить билеты на самолет", done:false},
		{description: "Забронировать место в гостинице", done:false},
		{description: "Отдохнуть!!!", done:false},
	];
	$scope.addTask = function(){
		if ($scope.newTask != ""){
			$scope.taskList.push({description: $scope.newTask, done : false});
			$scope.newTask = "";
		}
		return $scope.newTask = "";		
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
	};
	
}]);