<script lang="ts">
export default {
    name: 'Navbar'
}
</script>


<template>
   <nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Wiki Medieval</a>
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Menu</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Livros</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Filmes</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Jogos</a>
  </li>
</ul>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-dark me-3" type="submit">Pesquisar</button>
      <button class="btn btn-dark me-2" type="submit">Pesquisa Detalhada</button>
    </form>
  </div>
</nav>


</template>


<style scoped>
</style>