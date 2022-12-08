<script lang="ts">
export default {
    name: 'Navbar'
}
</script>


<template>
   <nav class="navbar bg-light">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">Wiki Medieval</router-link>
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <router-link to="/" class="nav-link">Home</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/Livros" class="nav-link">Livros</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/Filmes" class="nav-link">Filmes</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/Jogos" class="nav-link">Jogos</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/Comunidade" class="nav-link">Comunidade</router-link>
  </li>
</ul>

<ul class="nav justify-content-end">
  <li class="nav-item">
    <router-link to="/Login" class="nav-link">Login</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/Cadastro" class="nav-link">Cadastrar</router-link>
  </li>
  </ul>

    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-dark me-3" type="submit">Pesquisar</button>
      <router-link to="/Buscadetalhada" class="btn btn-dark me-3" tag="button">Pesquisa Detalhada</router-link>
    </form>
  </div>
</nav>
</template>


<style scoped>
</style>