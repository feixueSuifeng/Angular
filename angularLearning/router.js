console.log("router");


angular.module("App",["ui.router","Home","Car","Det"])
        .controller("nav",function($scope,$state){
            $("#home").on("click",function(){
                $state.go("home");
            });
             $("#goods").on("click",function(){
                $state.go("det")
            });
            $("#order").click(function(){
                $state.go("car")
            });
        })
        .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state("home",{
            url:"/home",
            template:"<home></home>"
        })
               .state("car",{
            url:"/car/:id",
            template:"<car></car>"
        })
               .state("det",{
            url:"/det",
            template:"<det></det>"
        })
    })
  .factory("myFactory",function($rootScope){
    //定义参数对象

    var myObject={};

    //定义传递数据的setter函数

     function setter(data){

        myObject=data
    }
    //定义一个获取数据getter函数

        function getter(){
        return myObject
    }
    //public APIs
    //在controller中通过调用getter()来获取参数。通过setter（）来提交参数。
    return {
        setter:setter,
        getter:getter
    }
});




