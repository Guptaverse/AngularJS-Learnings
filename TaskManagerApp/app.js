angular.module('TaskManagerApp', [])
    .controller('TaskManagerController', function($scope) {
        $scope.tasks = [];

        $scope.addTask = function() {
            if ($scope.newTask) {
                $scope.tasks.push($scope.newTask);
                $scope.newTask = '';
            }
        };

        $scope.deleteTask = function(index) {
            $scope.tasks.splice(index, 1);
        };
    });
