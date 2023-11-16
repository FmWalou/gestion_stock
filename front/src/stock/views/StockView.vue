<script lang="ts" setup>
import { ref } from 'vue';
import { type Article} from "../interfaces/Article";
import vue from "@vitejs/plugin-vue";

const articles = ref<Article[]>([
  {id: 1, name: "tondeuse à gazon", price: 145, quantity: 4},
  {id: 2, name: "tournevis", price: 2.90, quantity: 24},
  {id: 3, name: "vis", price: 0.90, quantity: 200},
  {id: 4, name: "clou", price: 0.40, quantity: 189},
])
</script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button title="Refresh">
          <font-awesome-icon icon="fa-solid fa-rotate-right" />
        </button>
        <RouterLink class="button" to="/stock/add" title="Ajouter">
          <font-awesome-icon icon="fa-solid fa-plus" />
        </RouterLink>
        <button title="Supprimer">
          <font-awesome-icon icon="fa-solid fa-trash-can" />
        </button>
      </nav>
      <div class="error"></div>
      <table>
        <thead>
        <tr>
          <th class="name">Nom</th>
          <th class="price">Prix</th>
          <th class="qty">Quantité</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="article in articles" v-bind:key="article.id">
          <td class="name">{{ article.name }}</td>
          <td class="price">{{ article.price }} €</td>
          <td class="qty"> {{article.quantity }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  gap: 0.3em;
}

div.error {
  height: 3em;
}

table {
  border: 0.1em solid #bbb;
  border-radius: 0.3em;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;

  thead {
    background: #bbb;
  }

  th,
  td {
    padding: 0.5em 1em;
  }

  tbody {
    tr:nth-child(even) {
      background: #eee;
    }
  }
}
</style>
