// eslint-disable-next-line
/* eslint-disable */
<template>
    <div class="container">
        <h1 class="text-center">Atas de reunião</h1>
        <table class="table table-striped">
            <thead>
                <th>Nome do Workshop</th>
                <th>Data de realização</th>
                <th>Descrição</th>
                <th>Colaboradores participantes</th>
            </thead>
            <tbody>
                <tr v-for="ata in atas" v-bind:key="ata.id">
                    <td>{{ ata.workshop.nome }}</td>
                    <td>{{ ata.workshop.dataRealizacao }}</td>
                    <td>{{ ata.workshop.descricao }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import AtaService from '../services/AtaService'

export default {
    name: 'AtaComponent',
    data() {
        return {
            atas: []
        }
    },
    methods: {
        getAtas() {
            AtaService.getAtas().then((response) => {
                this.atas = response.data;
            })
        }
    },
    created() {
        this.getAtas();
    }
}
</script>