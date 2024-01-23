<template>
    <div>
        <h1>Exemplo de Requisição</h1>
        <button @click="fetchData">Buscar Dados</button>
        <div>{{ responseData }}</div>
    </div>
</template>
  
<script>
import axios from '@/plugins/axios';

export default {
    data() {
        return {
            responseData: null,
        };
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get('/api/colaboradores');
                console.log('Resposta da API:', response);
                this.responseData = response.data;
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        },
    },
};
</script>