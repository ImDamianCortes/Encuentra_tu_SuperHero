$(document).ready(function () {

    $("form").submit(function (evento1) {
        //Previniendo accion por defecto
        evento1.preventDefault();
        //obteniendo valor de inputSuperHero
        let inputSuperHero = $("#inputSuperHero").val();
        /*Test inputSuperHero
        alert(inputSuperHero);
        */

        //Ficha
        $.ajax({
            url: `https://superheroapi.com/api.php/5475210815827654/${inputSuperHero}`,
            success: function (ficha) {

                //Obtencion
                let alias = ficha.name;
                let id = ficha.id;
                let imagen = ficha.image.url

                //insercion
                $("#id").text(id)
                $("#alias").text(alias)
                $("#nombre").text(nombre)
                $("#cardImg").attr("src", `${imagen}`)

                /*Test modificacion atibuto
                alert($("#cardImg").attr("src",`${imagen}`))
                *
                /* Test obtencion data
                alert(imagen);
                */
            }
        })
        $.ajax({
            url: `https://superheroapi.com/api.php/5475210815827654/${inputSuperHero}/powerstats`,
            success: function (stats) {

                let int = stats.intelligence;
                let str = stats.strength;
                let spe = stats.speed;
                let dur = stats.durability;
                let pow = stats.power;
                let com = stats.combat;

                alert(com)

                var chart = new CanvasJS.Chart("estadisticas",
                    {
                        title: {
                            text: "Estadisticas"
                        },
                        legend: {
                            maxWidth: 350,
                            itemWidth: 120
                        },
                        data: [
                            {
                                type: "pie",
                                showInLegend: true,
                                legendText: "{indexLabel}",
                                dataPoints: [
                                    { y: `${int}`, indexLabel: "intelligence" },
                                    { y: `${str}`, indexLabel: "strength" },
                                    { y: `${spe}`, indexLabel: "speed" },
                                    { y: `${dur}`, indexLabel: "durabilily" },
                                    { y: `${pow}`, indexLabel: "power" },
                                    { y: `${com}`, indexLabel: "combat" },
                                ]
                            }
                        ]
                    });
                chart.render();

            }
        })

    }
    )
});