angular.module("todoApp")
.filter("sortDate", function () {
    return function (task) {
        if (angular.isArray(task)) {
            var now = new Date();
            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
            var tomorrow = new Date(today.valueOf() + 86400000);
                if (task.date < tomorrow){
                console.log(task.date);}
                    return task.date;
                    console.log(tomorrow);
                } else {
                return $scope.taskList;
            }
        }
    });
    //         var week = (new Date(today.valueOf() + 604800000))
