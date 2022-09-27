<script>

export default {
    // name: CategoryCard,
    components:{

    },
};
</script>

<template>
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
            <div class="card">
                <img src="../../public/pefume2.jpeg" class="card-img-top size-img-card" alt="...">
                <div class="card-body">
                    <h5 class="card-title color-tittle-card">Fragancias Florales</h5>
                    <p class="card-text color-font-card ">Son calmantes, relajantes y muy femeninos.
                        Ideales para personas románticas y soñadoras. Su aroma está asociado al amor y a la seducción.
                        Contienen aromas clásicos como las rosas, jazmín, neroli, pero también pueden ser olores
                        más atrevidos como la violeta, magnolia o mimosa.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="../../public/perfume-hombre1.jpeg" class="card-img-top size-img-card" alt="...">
                <div class="card-body">
                    <h5 class="card-title color-tittle-card">Fragancias Amaderadas</h5>
                    <p class="card-text color-font-card ">Son recomendados para personas con un toque varonil marcado, 
                        sensuales y con carácter inquietante, el olor a madera es elegante y sofisticado 
                        y muy elegido por hombres seductores. 
                        Es un aroma que perdura mucho ya que son perfumes profundos e intensos.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="../../public/perfume-hombre2.jpg" class="card-img-top size-img-card" alt="...">
                <div class="card-body">
                    <h5 class="card-title color-tittle-card">Fragancias Frescas </h5>
                    <p class="card-text color-font-card ">Estos perfumes son perfumes perfumados para personas deportistas 
                        con un sentido del humor estrafalario, que viven la vida al máximo. 
                        Si eso suena como tú, entonces te encantará una 
                        fragancia ligera y fresca que es tan fría como tú.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="../../public/perfume3.jpeg" class="card-img-top size-img-card" alt="...">
                <div class="card-body">
                    <h5 class="card-title color-tittle-card">Fragancias Dulces</h5>
                    <p class="card-text color-font-card ">Los aromas Dulces son, definitivamente, 
                        para los amantes de los dulces y los postres más deliciosos. 
                        Esta familia de fragancias contiene acordes de Vainilla, Chocolate, 
                        Caramelo o notas de Café.</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
.size-img-card {
    max-width: auto;
    height: 500px;
    object-fit:cover;
}
.color-tittle-card{
    color: rgb(27, 147, 139);
}

.color-font-card{
    color: gray;
}
</style>>
