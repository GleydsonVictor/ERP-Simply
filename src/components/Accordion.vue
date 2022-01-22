<template>
    <div class="accordion-faq wow move-up">
        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-1 class="faq-title">Cada dia abre uma nova empresa no Brasil, e você já foi uma dessas!</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        Em 2020 mesmo com a dificuldade da pandemia o Brasil bateu o recorde de MEI registrados, foram mais de 11,3 milhões, mas muitos não esperavam que 65% delas estão endividados. Utilize nossa ferramenta e veja sua saúde financeira.
                        <ul class="list-inline meta">
                            <li class="list-inline-item">Pesquisa feita pelo <b>Sebrae</b></li>
                        </ul>
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-2 class="faq-title">Seja bom de mira</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        Acerte o alvo e direcione sua empresa ao rumo do sucesso. Nos te garantimos um lugar de destaque entre as melhores empresas do segmento!
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <!-- <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-3 class="faq-title">Excellent Custom Support</b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        AeroLand appears professional in design and responsive in performance. It proves to be highly customizable and efficient for landing site building. Engage yourself in the most effortless and well-appointed process with AeroLand.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card> -->

        <!-- <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-4 class="faq-title">On-demand Extra Services</b-button>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        AeroLand appears professional in design and responsive in performance. It proves to be highly customizable and efficient for landing site building. Engage yourself in the most effortless and well-appointed process with AeroLand.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card> -->
    </div>
</template>

<script>
    export default {
        name: 'Accordion',
    };
</script>