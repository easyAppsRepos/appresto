angular.module('starter.services', [])

.factory('api', function($http, $q, $window) {

    return {

        getCategorias:function(numDocumento, email){  

            return  $http.get('http://lacartamozo.com.ar/api/v1/index.php/categorias')
            .then(function(response) {
            console.log(response);
            return response;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data.error;
            });
        },
        getParametros:function(){  

            return  $http.post(serverConfig.url+ '/VIAPRO/v1/index.php/getParametrosApp')
            .then(function(response) {
            console.log(response);
            return response;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response;
            });
        },
        getPublicidadUsuario:function(idUsuario){  

            return  $http.post(serverConfig.url+ '/VIAPRO/v1/index.php/getPublicidadUsuario',{idUsuario:idUsuario})
            .then(function(response) {
            console.log(response);
            return response;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response;
            });
        },


       registrarUsuario:function(usuario){  

            return  $http.post('http://lacartamozo.com.ar/api/v1/index.php/registrarUsuario',usuario)
            .then(function(response) {
            console.log(response);
            return response;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data;
            });
        },


       loginUser:function(usuario){  

            return  $http.post('http://lacartamozo.com.ar/api/v1/index.php/loginUser',usuario)
            .then(function(response) {
            console.log(response);
            return response;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data;
            });
        },

        


        getProductos:function(idCategoria){  

            return  $http.post('http://lacartamozo.com.ar/api/v1/index.php/getProductos',{idCategoria:idCategoria})
            .then(function(response) {
            console.log(response);
            return response;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data;
            });
        },

        editarTelefono:function(idUsuario, tel){  

            return  $http.post(serverConfig.url+ '/VIAPRO/v1/index.php/editarTelefono',{idUsuario:idUsuario, tel:tel})
            .then(function(response) {
            console.log(response);
            return response.data;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data;
            });
        },

        loginAlumno:function(user, pass){  

            return  $http.post(serverConfig.url+ '/VIAPRO/v1/index.php/loginAlumno',{user:user, pass:pass})
            .then(function(response) {
            console.log(response);
            return response.data;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data;
            });
        },

            getHomeData:function(userID){  

            return  $http.post(serverConfig.url+ '/VIAPRO/v1/index.php/getHomeData',{numDocumento:userID})
            .then(function(response) {
            console.log(response);
            return response.data;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data;
            });
        },

            getDiplomadosMaestria:function(idMaestria, idUsuario){  

            return  $http.post(serverConfig.url+ '/VIAPRO/v1/index.php/getDiplomadosMaestria',{idMaestria:idMaestria, idUsuario:idUsuario })
            .then(function(response) {
            console.log(response);
            return response.data;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data;
            });
        },


           getModulosDiplomado:function(idDiplomado, idUsuario, idMaestria){  

            return  $http.post(serverConfig.url+ '/VIAPRO/v1/index.php/getModulosDiplomado',{idDiplomado:idDiplomado, idUsuario:idUsuario, idMaestria:idMaestria })
            .then(function(response) {
            console.log(response);
            return response.data;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data;
            });
        },

                   verificarEncuesta:function( idUsuario){  

            return  $http.post(serverConfig.url+ '/VIAPRO/v1/index.php/verificarEncuesta',{idUsuario:idUsuario })
            .then(function(response) {
            console.log(response);
            return response.data;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data;
            });
        },


                   getEncuesta:function( idModulo, idDiplomado){  

            return  $http.post(serverConfig.url+ '/VIAPRO/v1/index.php/getEncuesta',{idModulo:idModulo, idDiplomado:idDiplomado })
            .then(function(response) {
            console.log(response);
            return response.data;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data;
            });
        },

            enviarEncuesta:function( idModulo, idDiplomado, idUsuario, idEncuesta, secciones,comentario){  

            return  $http.post(serverConfig.url+ '/VIAPRO/v1/index.php/enviarEncuesta',{idModulo:idModulo,
                                                                                     idDiplomado:idDiplomado,
                                                                                     idUsuario:idUsuario,
                                                                                     idEncuesta:idEncuesta,
                                                                                     secciones: secciones,
                                                                                     comentario:comentario})
            .then(function(response) {
            console.log(response);
            return response.data;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data;
            });
        },


            getDiplomados:function(idMaestria){  

            return  $http.post(serverConfig.url+ '/VIAPRO/v1/index.php/getDiplomados',{idMaestria:idMaestria })
            .then(function(response) {
            console.log(response);
            return response.data;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data;
            });
        },
                    getModulos:function(idDiplomado){  

            return  $http.post(serverConfig.url+ '/VIAPRO/v1/index.php/getModulos',{idDiplomado:idDiplomado })
            .then(function(response) {
            console.log(response);
            return response.data;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data;
            });
        },

                            getMaestriaDiplomado:function(idDiplomado, idMaestria){  

            return  $http.post(serverConfig.url+ '/VIAPRO/v1/index.php/getMaestriaDiplomado',{idDiplomado:idDiplomado,idMaestria:idMaestria })
            .then(function(response) {
            console.log(response);
            return response.data;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data;
            });
        },

          getNotaTesis:function(idUsuario, idMaestria){  

            return  $http.post(serverConfig.url+ '/VIAPRO/v1/index.php/getNotaTesis',{idUsuario:idUsuario, idMaestria:idMaestria })
            .then(function(response) {
            console.log(response);
            return response.data;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data;
            });
        },

           getNotificaciones:function(idUsuario){  

            return  $http.post(serverConfig.url+ '/VIAPRO/v1/index.php/getNotificaciones',{idUsuario:idUsuario})
            .then(function(response) {
            console.log(response);
            return response.data;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data;
            });
        },

                   getNotificacionesCount:function(idUsuario){  

            return  $http.post(serverConfig.url+ '/VIAPRO/v1/index.php/getNotificacionesCount',{idUsuario:idUsuario})
            .then(function(response) {
            console.log(response);
            return response.data;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data;
            });
        },

        

                  actualizarNoti:function(idNoti){  

            return  $http.post(serverConfig.url+ '/VIAPRO/v1/index.php/actualizarNoti',{idNoti:idNoti})
            .then(function(response) {
            console.log(response);
            return response.data;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data;
            });
        },



            getModuloInfo:function(idModulo,idUsuario, idDiplomado){  

            return  $http.post(serverConfig.url+ '/VIAPRO/v1/index.php/getModuloInfo',{idModulo:idModulo, idUsuario:idUsuario, idDiplomado:idDiplomado })
            .then(function(response) {
            console.log(response);
            return response.data;
            }, function(response) {
            // something went wrong
            console.log('error');
            return response.data;
            });
        }
        




    }

    })


