<template>
    <div class="saas-feature section-space--ptb_90 bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title text-center section-space--mb_60">
                        <h2 class="font-weight--light mb-15 wow move-up">O que podemos fazer?</h2>
                        <span class="section-text wow move-up">Tudo e mais do que você imagina!</span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="item in items" :key="item.id" class="col-lg-4 col-md-6 wow move-up">
                    <div class="service-grid">
                        <div class="ht-service-box--one style-03">
                            <router-link :to="''">
                                <div class="image__media">
                                    <img :src="item.icon" class="img-fluid" alt="aeroland-app-showcase-box-icon-image-01">
                                </div>
                                <div class="content">
                                    <h6 class="heading">{{ item.heading }}</h6>
                                    <div class="service_text">{{ item.text }}</div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SassFeature',
        data (){
            return {
                items: [
                    {
                        icon: require('../assets/img/icons/aeroland-box-image-01.png'), 
                        heading: 'Dashboard', 
                        text: 'Acompanhe o andamento da sua empresa em tempo real.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-box-image-02.png'), 
                        heading: 'Financeiro', 
                        text: 'Todo seu financeiro em um único lugar de maneira simplificada.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-box-image-03.png'), 
                        heading: 'Relatorios', 
                        text: 'Receba relatórios mensais em seu e-mail e veja como está a situação da sua empresa.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-box-image-04.png'), 
                        heading: 'Produtos', 
                        text: 'Gerencie seus produtos de forma fácil e digital.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-box-image-05.png'), 
                        heading: 'Estoque', 
                        text: 'Esqueceu de abastecer seu estoque? Nos te avisaremos antes que você perceba.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-box-image-06.png'), 
                        heading: 'Vendas', 
                        text: 'Acompanhe as vendas da sua empresa ou crie uma venda.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-box-image-06.png'), 
                        heading: 'Funcionários', 
                        text: 'Já pensou um setor de Departamento Pessoal online? Nos te proporcionamos.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-box-image-06.png'), 
                        heading: 'Usabilidade', 
                        text: 'Feito por quem entende de tecnologia e finanças, combinação perfeita para deixar o sistema de fácil usabilidade.'
                    },
                ]
            }
        }
    }
</script>
