<script lang="ts">
export default {
    name: 'Navbar'
}
</script>


<template>
   <nav class="navbar bg-dark">
  <div class="container-fluid">
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Wiki Medieval</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Content List</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p><router-link to="/Contentlist" class="nav-link">Content List</router-link></p>
  </div>
</div>
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