/**
 * Created by Administrator on 2016/8/15.
 */
angular.module("Det",[])

.directive("det",function($state,$http,myFactory){
        return{
            restrict:"AE",
            scope:{},
            replace:true,
            templateUrl:"./detailes/det.html",
            link:function(scope,rootScope ,log,localStorage){
                console.log("det");
                scope.goods=[];
                scope.goods1=[];
                scope.goods2=[];
                scope.goods3=[];
                scope.goods4=[];
                scope.goods5=[];
                scope.state=[
                    "基于ui-router的页面跳转传参",
                    "基于factory的页面跳转传参",
                    "基于factory和$rootScope.$broadcast()的传参",
                    "基于localStorage或sessionStorage的页面跳转传参",
                    "基于localStorage/sessionStorage和Factory的页面传参"
                ];
             rootScope.id="";
            $http.post("test.json").success(function(data){

              if(scope.state[0]){
                    scope.goods1=data.goods.slice(0,3);
                }
              if(scope.state[1]){
                    scope.goods2=data.goods.slice(3,6);

                }

                if(scope.state[2]){
                    scope.goods3=data.goods.slice(6,9);

                }
               if(scope.state[3]){
                    scope.goods4=data.goods.slice(9,12);

                }
               if(scope.state[4]){
                    scope.goods5=data.goods.slice(12);
                }
            });
                angular.element(".goods");
                //console.log(  angular.element(".goods").length);

           for(var i=0 ;i< angular.element(".goods").length;i++){
                    scope.goods=angular.element(".goods")[i];
                    //console.log(scope.goods);
               ///////// 1. 基于ui-router的页面跳转传参(url传参)
                        if(i==0){
                         scope.getPage1=function(id){
                         $state.go("car",{id:id});
                         myFactory.setter({state:"1"})
                         }
                      }

                //////////2. 基于factory的页面跳转传参
                        if(i==1){

                        scope.getPage2=function(data){
                         myFactory.setter({id:data,state:"2"});
                            $state.go("car")
                         }
                                 }

               ///////////3.基于factory和$rootScope.$broadcast()的传参
                        if(i==2){
                        scope.getPage3=function(){
                       myFactory.setter({state:"3"});
                        //console.log(this.item.id);
                        id=this.item.id;
                        $state.go("car")
                         }
                                 }
               ///////////4.基于localStorage或sessionStorage的页面跳转传参
                        if(i==3){
                        scope.getPage4=function(){

                       scope.$storage = localStorage.$default({
                                counter: 0
                            });
                       myFactory.setter({state:"4"}).then(function(data){
                           scope.$storage.counter = data.counter;
                       });
                        $state.go("car")
                         }
                                 }
               ////////////5.基于localStorage/sessionStorage和Factory的页面传参
                        if(i==4){
                        scope.getPage5=function(){
                        console.log(this.item.id);
                        id=this.item.id;
                        $state.go("car")
                         }
                                 }
                }
            }
        }
    });

