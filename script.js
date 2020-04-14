const url = "https://covid19.mathdro.id/api";
const url1 = "https://covid19.mathdro.id/api/countries/";
let app = angular.module("MyApp", []);
app.controller("MyCtrl", ($scope, $http) => {
    $scope.title = "Stay Home Stay Save";
    console.log("App  loaded");
    $http.get(url).then((response) => {
        console.log(response.data);
        $scope.All_Data = response.data;
    }, (error) => {
        console.log(error.data);

    });

    $scope.get_c_data = () => {

        let country = $scope.c;
        
        console.log(country);
     
        if(country=='') {
         $scope.country_data=undefined;
            return;
        }
        
        $http.get(url1 + country).then((response) => {
            console.log(response.data);
            $scope.country_data = response.data;
           
     },
            (error) => {
                console.log(error);
            });
        
    }

});