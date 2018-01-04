angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $ionicPopup) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.myTitle = 'IONIC RATINGS DEMO';

  $scope.ratingsObject = {
    iconOn: 'ion-ios-star', //Optional
    iconOff: 'ion-ios-star-outline', //Optional
    iconOnColor: 'rgb(200, 200, 100)', //Optional
    iconOffColor: 'rgb(200, 100, 100)', //Optional
    rating: 4, //Optional
    minRating: 0, //Optional
    readOnly: false, //Optional
    callback: function(rating, index) { //Mandatory    
      $scope.ratingsCallback(rating, index);
    }
  };

  $scope.ratingsCallback = function(rating, index) {
    console.log('Selected rating is : ', rating, ' and index is ', index);
  };
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };



   // An alert dialog
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Gracias!',
       template: '<div style="text-align:center">Esperamos verlo pronto</div>'
     });
     alertPopup.then(function(res) {
       $state.go('app.browse');
     });
   };






  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];



  $scope.toggleSideMenu = function() {

    console.log('toggleSideMenu');
     console.log($ionicSideMenuDelegate.isOpen());
     

 if ($ionicSideMenuDelegate.isOpen()) {
    $ionicSideMenuDelegate.toggleLeft(false); // close
  } else {
    $ionicSideMenuDelegate.toggleLeft(); // open
  }
};



})


.directive('hideTabs', function($rootScope, $timeout, $ionicTabsDelegate) {
  return {
    restrict: 'A',
    link: function($scope, $el) {
      $scope.$on("$ionicView.beforeEnter", function () {
        $ionicTabsDelegate.showBar(false);
      });
      $scope.$on("$ionicView.beforeLeave", function () {
        $ionicTabsDelegate.showBar(true);
      });
    }
  };
})


.factory('Carrito', function($http, $q) {

var carrito=[];

  return {
    all: function() {
      return carrito;
    },


    vaciarCarrito: function(idProducto){
          carrito=[]; 
     return null;
    },


       getCantidadProducto: function(idProducto){


      for(var i=0;i<carrito.length; i++){

        if(carrito[i].item==idProducto){
          return carrito[i].cantidad;
        }

      }



    


     return 0;
    },




    enviarPedido: function(pedido){
      return  $http.post('http://bar2me.com/nuevoPedido.php',pedido)
                    .then(function(response) {
            
                     
                        if (typeof response.data === 'object') {
                          console.log(response);
                            return response.data;
                        } else {
                            // invalid response
                             console.log(response);
                            return response;
                        }

                    }, function(response) {
                        // something went wrong
                         console.log(response);
                        return response;
                    });

  },

    sacarProducto: function(idProducto){
              for(var i=0;i<carrito.length;i++){
        if(carrito[i].item==idProducto){
           carrito.splice(i, 1);
          return null;
        }
      }    
     return null;
    },


    getTotal: function(idProducto){

      var cuenta = 0; 
      for(var i=0;i<carrito.length;i++){
      cuenta += (carrito[i].cantidad * carrito[i].producto.precio);
      }
     return cuenta;


    },


    removeProducto: function(idProducto) {
            for(var i=0;i<carrito.length;i++){
        if(carrito[i].item==idProducto){
          carrito[i].cantidad=carrito[i].cantidad-1;

          if(carrito[i].cantidad < 1){
              carrito.splice(i, 1);
          }
         
        }
      }      
      return null;
    },
    /*
    /*
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },*/
    addProducto: function(categoriaId, prod) {
      for(var i=0;i<carrito.length;i++){
        console.log(carrito[i].item);
        if(carrito[i].item==categoriaId){
          if(carrito[i].cantidad == undefined){carrito[i].cantidad=1;}
          carrito[i].cantidad=carrito[i].cantidad+1;
          return null;
        }
      }
      carrito.push({item:categoriaId,cantidad:1,producto:prod});
      return null;
    },



    addProductoID: function(categoriaId) {
      for(var i=0;i<carrito.length;i++){
        console.log(carrito[i].item);
        if(carrito[i].item==categoriaId){
          if(carrito[i].cantidad == undefined){carrito[i].cantidad=1;}
          carrito[i].cantidad=carrito[i].cantidad+1;
          return null;
        }
      }
      return null;
    },



    getCarro: function(valor){
         
      return carrito;

              },


    getCarrito: function(valor){
         
    for(var i=0;i<categorias.length; i++){
            var obj = categorias[i];
        for(var key in obj){

            if(key=='items'){
               return obj[key][0]['idItem'];
            }
            var attrValue = obj[key];
        }
    }


              }
  };

})



.controller('favCtrl', function($scope, $stateParams) {



})
.controller('inicioCtssrl', function($scope, $stateParams, $ionicSideMenuDelegate) {
console.log('asddsad');

$ionicSideMenuDelegate.canDragContent(false);

})


.controller('perfilCtrl', [
    '$scope',
    '$q',
    '$stateParams',
    '$window',
    '$ionicPopup',
    '$ionicModal',
    '$ionicLoading',
    '$state',
    'api',
    function ($scope, $q, $stateParams, $window, $ionicPopup, $ionicModal, $ionicLoading,$state, api) {
  

/*        api.getUsuar().then(function(data) {

       // $ionicLoading.hide();
        console.log(data.data.categorias);
        $scope.categorias = data.data.categorias || [];

      });


*/



  }
  ])



.controller('inicioCtrl', [
    '$scope',
    '$q',
    '$stateParams',
    '$window',
    '$ionicPopup',
    '$ionicModal',
    '$ionicLoading',
    '$state',
    'api',
    function ($scope, $q, $stateParams, $window, $ionicPopup, $ionicModal, $ionicLoading,$state, api) {

      $scope.loading = true;

  /*    eventService.getOne($stateParams.id).then(function (event) {
        $scope.event = event;
      }).finally(function () {
        $scope.loading = false;
      });

*/



  // This method is to get the user profile info from the facebook api
  var getFacebookProfileInfo = function (authResponse) {
    var info = $q.defer();

    facebookConnectPlugin.api('/me?fields=email,name&access_token=' + authResponse.accessToken, null,
      function (response) {
        console.log(response);
        info.resolve(response);
      },
      function (response) {
        console.log(response);
        info.reject(response);
      }
    );
    return info.promise;
  };


  // This is the success callback from the login method
  var fbLoginSuccess = function(response) {
    if (!response.authResponse){
      fbLoginError("Cannot find the authResponse");
      return;
    }

    var authResponse = response.authResponse;

    getFacebookProfileInfo(authResponse)
    .then(function(profileInfo) {
      // For the purpose of this example I will store user data on local storage
      var usuario = {
        authResponse: authResponse,
        userID: profileInfo.id,
        name: profileInfo.name,
        email: profileInfo.email,
        picture : "http://graph.facebook.com/" + authResponse.userID + "/picture?type=large"
      };


               api.addUserFb(usuario).then(function (events) {

                    if(events.data.insertId > 0){
                    window.localStorage.setItem( 'userInfoUD', events.data.insertId);            
                    //$state.go('listaMascotas'); 
                    $ionicLoading.hide();
                              
                $state.go('listaMascotas');
                    }

                    else{

                      mensajeAlerta(1, 'Ha ocurrido un error');
                      $ionicLoading.hide();
                    }

              }).finally(function () {

             
               });





     // $ionicLoading.hide();
    //$state.go('app.listaMascotas');


    }, function(fail){
      // Fail get profile info
      console.log('profile info fail', fail);
    });
  };

  // This is the fail callback from the login method
  var fbLoginError = function(error){
    console.log('fbLoginError', error);
    mensajeAlerta(1, 'Ha ocurrido un error');
    $ionicLoading.hide();
  };



  //This method is executed when the user press the "Login with facebook" button
  $scope.facebookSignIn = function() {


    facebookConnectPlugin.getLoginStatus(function(success){


      if(success.status === 'connected'){
        $ionicLoading.show();
        // The user is logged in and has authenticated your app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed request, and the time the access token
        // and signed request each expire
        console.log('getLoginStatus', success.status);
        console.log('getLoginStatus', success);

        // Check if we have our user saved

        api.verificarFBLog(success.authResponse.userID).then(function (events) { 
        if(events.data.idUsuario > 0){
            window.localStorage.setItem( 'userInfoUD', events.data.idUsuario);            
            $state.go('listaMascotas');
        }
        else{

          getFacebookProfileInfo(success.authResponse).then(function(profileInfo) {
            // For the purpose of this example I will store user data on local storage
            var usuario = {
              authResponse: success.authResponse,
              userID: profileInfo.id,
              name: profileInfo.name,
              email: profileInfo.email,
              picture : "http://graph.facebook.com/" + success.authResponse.userID + "/picture?type=large"
            };

               api.addUserFb(usuario).then(function (events) {

                    if(events.data.insertId > 0){
                    window.localStorage.setItem( 'userInfoUD', events.data.insertId);            
                    $state.go('listaMascotas');
                    }

                    else{

                      mensajeAlerta(1, 'Usuario ya registrado');
                    }

              }).finally(function () {

              //$ionicLoading.hide();
              //$state.go('app.listaMascotas');
               });




            
          }, function(fail){
            // Fail get profile info
            console.log('profile info fail', fail);
            mensajeAlerta(1, 'Ha ocurrido un error');
          });
         //   mensajeAlerta(1, 'Credenciales incorrectas');



        }}).finally(function () {$ionicLoading.hide();});

/*

        if(!user.userID){


          getFacebookProfileInfo(success.authResponse)
          .then(function(profileInfo) {
            // For the purpose of this example I will store user data on local storage
            UserService.setUser({
              authResponse: success.authResponse,
              userID: profileInfo.id,
              name: profileInfo.name,
              email: profileInfo.email,
              picture : "http://graph.facebook.com/" + success.authResponse.userID + "/picture?type=large"
            });

            $state.go('app.home');
          }, function(fail){
            // Fail get profile info
            console.log('profile info fail', fail);
          });


        }else{
          $state.go('app.home');
        }*/
      } else {
        // If (success.status === 'not_authorized') the user is logged in to Facebook,
        // but has not authenticated your app
        // Else the person is not logged into Facebook,
        // so we're not sure if they are logged into this app or not.

        console.log('getLoginStatus', success.status);

        $ionicLoading.show({
          template: 'Ingresando...'
        });

        // Ask the permissions you need. You can learn more about
        // FB permissions here: https://developers.facebook.com/docs/facebook-login/permissions/v2.4
        facebookConnectPlugin.login(['email', 'public_profile'], fbLoginSuccess, fbLoginError);
      }
    });
  };


  $scope.urlImg = 'url';
        $scope.grid_view = function() {
    if($scope.layout == 'grid'){
      $scope.layout = "list";
    } else {
      $scope.layout = "grid";
    }
  };


  function mensajeAlerta(tipo, mensaje){
    console.log(tipo);
    var ima ='exclam.png';
if(tipo==1){

     var customTemplate =
        '<div style="text-align:center;"><img style="margin-top:10px" src="img/exclam.png"> <p style="    font-size: 18px;color:white; margin-top:25px">'+mensaje+'</p> </div>';


}
  if(tipo == 2){

     var customTemplate =
        '<div style="text-align:center;"><img style="margin-top:10px" src="img/confirma.png"> <p style="    font-size: 18px;color:white; margin-top:25px">'+mensaje+'</p> </div>';

}

      $ionicPopup.show({
        template: customTemplate,
        title: '',
        subTitle: '',
        buttons: [{
          text: 'Cerrar',
          type: 'button-blueCustom',
          onTap: function(e) {

    console.log('ok');
          }
           // if(borrar){ $scope.user.pin='';}
           
          
        }]
      });

}



    $scope.doLogin = function(user){

           console.log(user);
            $ionicLoading.show();
//usuario.email = usuario.email.toLowerCase();
          api.loginUser(user).then(function (events) {
            if(events.data.data){
              console.log(events.data)
              window.localStorage.setItem( 'userInfoLC', events.data.data);            
                $state.go('demo');

                console.log('logueado');

            /*  if(events.data.user.verificado == 1){

                window.localStorage.setItem( 'userInfoSM', JSON.stringify(events.data.user));            
                $state.go('listaMascotas');

                console.log('logueado');

              }
              else{
                mensajeAlerta(1, 'Debes verificar tu cuenta');
                console.log('no verificado');
              }
            */


            }
            else{

            mensajeAlerta(1, 'Credenciales incorrectas');

            }
            }).finally(function () {

            $ionicLoading.hide();
      });





    }




    $scope.openModalRegistro = function(){

            $scope.openModal("nuevoUsuario.html", "slide-in-up");
    }
$scope.registrarUsuario = function(usuario){
  if(usuario.pass !== usuario.pass2){
    mensajeAlerta(1, 'La contraseña no coincide');
    return false;
  }


  $ionicLoading.show();

console.log(usuario);

api.registrarUsuario(usuario).then(function (events) {
console.log(events);
          //$scope.events = events;
          //$scope.events = events.data.evento;


          if(events.data.data){

            mensajeAlerta(2, 'Cuenta creada, ya puedes hacer login!');
              $scope.closeModal();  


          }
          else{
             mensajeAlerta(1, 'Ha ocurrido un error, la cuenta no ha podido ser creada');

          }



         // $scope.chats = events.data.publicaciones;
         // $scope.$broadcast('scroll.infiniteScrollComplete');
        }).finally(function () {

  $ionicLoading.hide();
          
           // $scope.loading = false;
           
          

        });


          
    }

      $scope.openModal = function(templateName,animation) {
    $ionicModal.fromTemplateUrl(templateName, {
      scope: $scope,
      animation: animation
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });


    }
  ])




.controller('platoDiaCtrl', function($scope, $state,  $rootScope, api, $stateParams, $ionicModal,Carrito, $stateParams, $ionicSideMenuDelegate, $ionicSlideBoxDelegate) {
console.log('platoDia');
$scope.active = 0;
$scope.cantidad = 0;



  api.getProductos($stateParams.idCategoria).then(function(data) {

       // $ionicLoading.hide();
        console.log(data);
        $scope.productos = data.data.productos || [];
$ionicSlideBoxDelegate.update();
      });




  $scope.agregarProducto=function(idProducto,producto){
   //$state.go('app.carrito');
  Carrito.addProducto(idProducto, producto);

  }


  $scope.getProductoCantidad = function(idPoducto) {

    

    var re = Carrito.getCantidadProducto(idPoducto);
    re = re || '';
    return re;

  };





  $scope.removeProducto=function(idProducto){
   //$state.go('app.carrito');
  Carrito.removeProducto(idProducto);

  }





  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $rootScope.$broadcast('actualizarCarro');
    $scope.modal.show();
  };







  $scope.goCarrito=function(){
   //$state.go('app.carrito');
  $scope.login();
  }


  $scope.goIzq=function(){
    $ionicSlideBoxDelegate.previous();
  }
$scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };

  $scope.gotoSlide = function(ind)
{
$ionicSlideBoxDelegate.slide(ind);
}


$scope.slideChanged = function(index) {
$scope.active = index;
};






})





//.controller('carritoCtrl', function($scope,$rootScope, $ionicLoading, $cordovaGeolocation,$state, $timeout, $stateParams, $ionicPopup,Categorias, Carrito) {
.controller('carritoCtrl', function($scope,$rootScope, $ionicLoading,$state, $timeout, $stateParams, $ionicPopup, Carrito) {

   $scope.result2 = '';
       $scope.options2 = {
      country: 'pe',
      types: 'geocode'
    };
    
$scope.$on('latlong', function(event, args) {
    $scope.lat = args.lat;
    $scope.long = args.long;
});


$scope.item={};

$scope.item.posvisa=false;

$scope.GoBack = function(){
$state.go('tab.confirmar');
}



  $scope.addProducto=function(idProducto){
   //$state.go('app.carrito');
  Carrito.addProductoID(idProducto);
    $scope.totalCompra = Carrito.getTotal();

  }


  $scope.removeProducto=function(idProducto){
   //$state.go('app.carrito');
  Carrito.removeProducto(idProducto);
    $scope.totalCompra = Carrito.getTotal();


  }




$scope.confirmarCompra = function(){
console.log($scope.item.efectivo);
$scope.pedido={};

   console.log($scope.pedido);

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
    cssClass: 'confirmarPedido',
     template: '<div class="ttp"><div style="margin-top:15px">TOTAL PEDIDO<div><br>  <div><img style="vertical-align: middle; height: 24px; margin-right: 13px; " src="img/iconos/coin.png" class="icon">S/.'+(parseInt($scope.getTotal())+8.9)+'</div ><br><div style="color:rgb(255, 142, 8) ! important; margin-top:27px">CON CUANTO CANCELA?</div></div><input type="number" style="text-align: center;margin-top: 26px;font-size: 24px;" placeholder="S./0" ng-model="item.montoCancela">',
     title: '<div class="texD">RESUMEN PEDIDO</div>',
   //  subTitle: '<div class="ss"> RESUMEN PEDIDO</div><div>Total del pedido:<br>  <h2>S/.'+(parseInt($scope.getTotal())+8.9)+'</h2><br><h3>Con cuanto cancelas?</h3></div>',
     scope: $scope,
     buttons: [
       { text: 'CANCELAR',
          type:'fgg' },
       {
         text: '<b>ACEPTAR</b>',
         type: 'button-positive',
         onTap: function(e) {

 

          if($scope.item.montoCancela){

            if($scope.item.montoCancela<(parseInt($scope.getTotal())+8.9)){

              $ionicPopup.alert({
              title: 'Atencion',
              template: '<h4 style="text-align:center">Debes especificar un monto mayor</h4>'
              }).then(function(res) {
              return true;
              });
              e.preventDefault();
              return true;

            }

              $ionicLoading.show({
      template: 'Cargando...'
    });

                    $scope.pedido.montoCancela=$scope.item.montoCancela;
                    console.log($scope.pedido);


      Carrito.enviarPedido($scope.pedido).then(function(data){
        console.log(data);
        $ionicLoading.hide();
            $ionicPopup.alert({
     title: 'Atencion',
     template: '<h4 style="text-align:center">Tu compra esta en camino</h4>'
   }).then(function(res) {
    return true;
   });
        Carrito.vaciarCarrito();
        $scope.itemsCarro=[];
        $rootScope.$broadcast('countBadgeT');
        $rootScope.$broadcast('removeCarritoT');
        $state.go('tab.carrito');

      });

                  }
          else{

                $ionicPopup.alert({
     title: 'Atencion',
     template: '<h4 style="text-align:center">Debes especificar un monto</h4>'
   }).then(function(res) {
    return true;
   });
            e.preventDefault();
          }        
     
         }
       },
     ]
   });

   /*
   $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
   }, 3000);
   */
  };





$scope.$on('puntoEntrega', function(event, args) {
    $scope.direccion = args.direccion;
});




$scope.$on('actualizarCarro', function(event, args) {
  //  $scope.direccion = args.direccion;

        $scope.productosCarro = Carrito.getCarro();
        $scope.totalCompra = Carrito.getTotal();
    console.log(  $scope.productosCarro );





});







$scope.confirmarDireccion = function(){

  if($scope.getTotal()<=0){

    $ionicPopup.alert({
     title: 'Atencion',
     template: '<h4 style="text-align:center">No tienes productos agregados</h4>'
   }).then(function(res) {
    return true;
   });

 return true;
  }

  $state.go('tab.confirmar');


}

  $scope.productosCarro=[];
  $scope.total=0.00;

if($scope.badgeCounter == undefined){$scope.badgeCounter = 0;}

$scope.$on('countBadge', function(event, args) {
 if(args.suma){
 $scope.badgeCounter++;}
 else{$scope.badgeCounter--}

});

$scope.$on('countBadgeT', function(event, args) {
 $scope.badgeCounter=0;

});

//getCatInfo


//console.log($scope.itemsCarro);

  $scope.getTotalT=function(){
    return (getTotal()+8.90);
  }
  $scope.getTotal=function(f){
    var total=0;

    for(var i=0;i<$scope.itemsCarro.length;i++){
        var product=$scope.itemsCarro[i];
        total += (product.precioFloat * product.cantidad);

         $scope.total=$scope.total+parseFloat(res[res.length-1].trim());

       }
if(f){total=total+8.90; return total.toFixed(2)}       
return total.toFixed(2);
  }

  $scope.plusBtn=function(id,index){

     $rootScope.$broadcast('agregaCarrito', {idItem : id});

    console.log(id);

    $scope.itemsCarro[index].cantidad= $scope.itemsCarro[index].cantidad+1;

    }

  $scope.minusBtn=function(id,index){

    if($scope.itemsCarro[index].cantidad>=1){
      Carrito.removeProducto(id);
      $rootScope.$broadcast('countBadge',{suma:false});
      $rootScope.$broadcast('removeCarrito',{idItem:id});
      $scope.itemsCarro[index].cantidad= $scope.itemsCarro[index].cantidad-1;
      if( $scope.itemsCarro[index].cantidad==0){
        Carrito.sacarProducto(id);
          $scope.itemsCarro.splice(index, 1);
      }
    }
    else{
      Carrito.sacarProducto(id);
          $scope.itemsCarro.splice(index, 1);
  
    //  $scope.$apply();
    }
/*
  Carrito.addProducto(idItem);
  $rootScope.$broadcast('countBadge');

/*
  var v = $scope.cantidad[idItem];
  if(v==undefined){v=0;}
  $scope.cantidad[idItem]=v+1;
*/

  }



})




.controller('cartaSeccionCtrl', function($scope, api, Carrito,$state, $stateParams,$rootScope, $ionicModal, $stateParams, $ionicSideMenuDelegate) {
console.log('platoDia');


//console.log($stateParams.idCategoria);


  api.getProductos($stateParams.idCategoria).then(function(data) {

       // $ionicLoading.hide();
        console.log(data);
        $scope.productos = data.data.productos || [];

      });





  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
$rootScope.$broadcast('actualizarCarro');
    $scope.modal.show();


  };

  $scope.getProductoCantidad = function(idPoducto) {

    

    var re = Carrito.getCantidadProducto(idPoducto);
    re = re || '';
    return re;

  };






  $scope.goCarrito=function(){
   //$state.go('app.carrito');
  $scope.login();
  }

  $scope.agregarProducto=function(idProducto,producto){
   //$state.go('app.carrito');
  Carrito.addProducto(idProducto, producto);

  }


  $scope.removeProducto=function(idProducto){
   //$state.go('app.carrito');
  Carrito.removeProducto(idProducto);

  }



})
.controller('cartaCtrl', function($scope, $state, api, $stateParams, $ionicSideMenuDelegate) {
console.log('platoDia');

        api.getCategorias().then(function(data) {

       // $ionicLoading.hide();
        console.log(data.data.categorias);
        $scope.categorias = data.data.categorias || [];

      });




$scope.mover = function(tipo,idCategoria){
  if (tipo == 1) {
 $state.go('app.platoDia',{"idCategoria":idCategoria});

  }

    else if (tipo == 2) {

   // $state.go('app.cartaSeccion');
    $state.go('app.cartaSeccion',{"idCategoria":idCategoria});
  }



}

})



.controller('demoCtrl', function($scope, $state, $stateParams,$ionicNavBarDelegate, $ionicSideMenuDelegate, $ionicSlideBoxDelegate) {
console.log('asddsad');
$ionicNavBarDelegate.showBackButton(false);
$ionicSideMenuDelegate.canDragContent(false);

$scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };


  $scope.startApp = function(){
    $state.go('app.search');
  }



})

.controller('principalCtrl', function($scope, $stateParams,$ionicNavBarDelegate, $ionicSideMenuDelegate, $ionicSlideBoxDelegate) {
console.log('principal');
$ionicNavBarDelegate.showBackButton(false);
$ionicSideMenuDelegate.canDragContent(false);



})


.controller('PlaylistCtrl', function($scope, $stateParams) {
})


    .directive('ionicRatings', ionicRatings);

  function ionicRatings() {
    return {
      restrict: 'AE',
      replace: true,
      template: '<div class="text-center ionic_ratings">' +
        '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(1)" ng-if="rating < 1" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(1)" ng-if="rating > 0" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(2)" ng-if="rating < 2" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(2)" ng-if="rating > 1" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(3)" ng-if="rating < 3" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(3)" ng-if="rating > 2" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(4)" ng-if="rating < 4" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(4)" ng-if="rating > 3" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(5)" ng-if="rating < 5" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(5)" ng-if="rating > 4" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '</div>',
      scope: {
        ratingsObj: '=ratingsobj',
        index: '=index'
      },
      link: function(scope, element, attrs) {

        //Setting the default values, if they are not passed
        scope.iconOn = scope.ratingsObj.iconOn || 'ion-ios-star';
        scope.iconOff = scope.ratingsObj.iconOff || 'ion-ios-star-outline';
        scope.iconOnColor = scope.ratingsObj.iconOnColor || 'rgb(200, 200, 100)';
        scope.iconOffColor = scope.ratingsObj.iconOffColor || 'rgb(200, 100, 100)';
        scope.rating = scope.ratingsObj.rating || 0;
        scope.minRating = scope.ratingsObj.minRating || 0;
        scope.readOnly = scope.ratingsObj.readOnly || false;
        scope.index = scope.index || 0;

        //Setting the color for the icon, when it is active
        scope.iconOnColor = {
          color: scope.iconOnColor
        };

        //Setting the color for the icon, when it is not active
        scope.iconOffColor = {
          color: scope.iconOffColor
        };

        //Setting the rating
        scope.rating = (scope.rating > scope.minRating) ? scope.rating : scope.minRating;

        //Setting the previously selected rating
        scope.prevRating = 0;

        scope.$watch('ratingsObj.rating', function(newValue, oldValue) {
          setRating(newValue);
        });

        function setRating(val, uiEvent) {
          if (scope.minRating !== 0 && val < scope.minRating) {
            scope.rating = scope.minRating;
          } else {
            scope.rating = val;
          }
          scope.prevRating = val;
          if (uiEvent) scope.ratingsObj.callback(scope.rating, scope.index);
        }

        //Called when he user clicks on the rating
        scope.ratingsClicked = function(val) {
          setRating(val, true);
        };
        
        //Called when he user un clicks on the rating
        scope.ratingsUnClicked = function(val) {
          if (scope.minRating !== 0 && val < scope.minRating) {
            scope.rating = scope.minRating;
          } else {
            scope.rating = val;
          }
          if (scope.prevRating == val) {
            if (scope.minRating !== 0) {
              scope.rating = scope.minRating;
            } else {
              scope.rating = 0;
            }
          }
          scope.prevRating = val;
          scope.ratingsObj.callback(scope.rating, scope.index);
        };
      }
    };
  }

