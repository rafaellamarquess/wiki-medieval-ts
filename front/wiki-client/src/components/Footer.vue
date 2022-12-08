<script lang="ts">
export default {
    name: 'Footer'
}
</script>

<template>

<!-- Footer -->
<footer class="text-center text-lg-start bg-light text-muted">
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>

  <!-- Section: Links  -->
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Wiki Medieval
          </h6>
          <p>
            Este é um projeto que reune os principais temas sobre a chamada Idade Média e da cultura pop relacionada.
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">Menu</h6>
          <p>
            <a href="#!" class="text-reset">Explorar</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Livros</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Filmes</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Jogos</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">Outros</h6>
          <p>
            <router-link to="/About" class="text-reset">Sobre</router-link>
          </p>
          <p>
            <router-link to="/Equipe" class="text-reset">Equipe</router-link>
          </p>
          <p>
            <a href="#!" class="text-reset">Grupo de Estudos</a>
          </p>
          <p>
            <router-link to="/Mapa" class="text-reset">Mapa</router-link>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">Contato</h6>
          <p><i class="fas fa-home me-3"></i>Pernambuco, Brasil</p>
          <p><i class="fas fa-envelope me-3"></i>email@example.com</p>
          <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2022 Copyright:
    <a class="text-dark" href="https://github.com/rafaellamarquess">Rafaella Marques</a>
  </div>
  <!-- Copyright -->
</footer>
</template>