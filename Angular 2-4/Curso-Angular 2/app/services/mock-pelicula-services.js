System.register(["../model/pelicula"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pelicula_1;
    var PELICULAS;
    return {
        setters:[
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            }],
        execute: function() {
            exports_1("PELICULAS", PELICULAS = [
                new pelicula_1.Pelicula(1, "Braveheart", "Mel Gibson", "Mel Gibson", 1995),
                new pelicula_1.Pelicula(2, "El diario de Noah", "Nick Cassavetes", "Ryan Gosling", 2004),
                new pelicula_1.Pelicula(3, "Saw", "James Wan", "Tobin Bell", 2005),
                new pelicula_1.Pelicula(4, "Titanic", "James Cameroon", "Leonardo di Caprio", 1997),
                new pelicula_1.Pelicula(5, "A todo gas 8", "Mel Gibson", "Vin Diesel", 2017),
                new pelicula_1.Pelicula(6, "Malditos bastardos", "Quentin Tarantino", "Brad Pitt", 2009)
            ]);
        }
    }
});
//# sourceMappingURL=mock-pelicula-services.js.map