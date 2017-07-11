System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Pelicula;
    return {
        setters:[],
        execute: function() {
            // Modelado de Pelicula
            Pelicula = (function () {
                function Pelicula(id, titulo, director, actor, anio) {
                    this.id = id;
                    this.titulo = titulo;
                    this.director = director;
                    this.actor = actor;
                    this.anio = anio;
                }
                return Pelicula;
            }());
            exports_1("Pelicula", Pelicula);
        }
    }
});
//# sourceMappingURL=pelicula.js.map