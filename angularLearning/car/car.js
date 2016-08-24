/**
 * Created by Administrator on 2016/8/15.
 */
angular.module("Car",[])
    .directive("car",function($state,$http,$stateParams,myFactory){
        return{
            restrict:"AE",
            scope:{},
            replace:true,
            templateUrl:"./car/car.html",
            link:function(scope,localStorage){
                angular.element("#userLogin").css(
                    {
                        height:"500px",
                        width:"900px",
                        textAlign:"center",
                        lineHeight:"500px",
                        border:"1px solid gray",
                        marginTop:"20px",
                        display:"block",
                        fontSize:"35px",
                        fontWeight:"600"
                    }
                );

                var id="";
                var data=myFactory.getter();
                if(data.state==1){
                    id=$stateParams.id;
                }
                if(data.state==2){
                    id=data.id
                }
                if(data.state==3){
                    console.log(this.id);
                    id=this.id
                }
                if(data.state==4){
                    scope.counter = localStorage.counter;
                    scope.$watch('counter', function(newVal, oldVal) {
                        // 监听变化，并获取参数的最新值
                        $log.log('newVal: ', newVal);
                    });

                    //id=data.id
                }
                if(data.state==5){
                    //id=data.id
                }















                scope.id=id;
                scope.data=[];
                scope.goods=[];
                scope.page={
                    curPage:5,
                    count:0
                };
                  $http.post("test.json").success(function(data){
                    //console.log(data.user[0].name);
                    var store=data.user;
                    scope.data=store.slice(scope.count,5);
                    //console.log(scope.data)
                });
                     $http.post("test.json").success(function(data){
                         if(scope.id==undefined){
                             //console.log("123");
                           angular.element("#userLogin").css(
                               {
                                   height:"500px",
                                   width:"900px",
                                   textAlign:"center",
                                   lineHeight:"500px",
                                   border:"1px solid gray",
                                   marginTop:"20px",
                                   display:"block",
                                   fontSize:"35px",
                                   fontWeight:"600"
                               }
                           )
                         }else {
                             for(var i=0;i<data.goods.length;i++){
                                 if(data.goods[i].id==scope.id){
                                     scope.goods=data.goods[i];
                                     angular.element("#userLogin").css(
                                         {
                                             display:"none"
                                         }
                                     )
                                 }
                             }
                         }
                });


            }
        }
    });
