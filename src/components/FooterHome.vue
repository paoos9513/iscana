<script>
export default {
  name: "Footer",
  components: {},
};
</script>
<template>
  <div class="separador">
    <hr class="hr-text" />
  </div>
  <footer class="footer-48201">
    <div class="container">
      <div class="row">
        <div class="col-md-12"></div>
        <div class="col-md">
          <ul class="list-unstyled nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="col-md">
          <ul class="list-unstyled nav-links">
            <li><a href="#">Clients</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <div class="copyright mt-5 pt-5">
            <p><small>&copy; Paola Andrea Osorio Holguin - 2022</small></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


<style lang="scss">
a {
  transition: 0.3s all ease;
  &,
  &:hover {
    text-decoration: none !important;
  }
}

.content {
  height: 70vh;
}

.footer-48201 {
  padding: 5rem 0;
  background-image: url(../../public/found.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  color: black;

  .nav-links {
    li {
      margin-bottom: 8px;
      a {
        color: black;
        &:hover {
          color: rgb(27, 147, 139);
        }
      }
    }
  }

  .btn {
    &.btn-tertiary {
      background-color: rgb(27, 147, 139);
      color: white;
      border-radius: 30px;
      border: none;
      padding: 10px 20px;
    }
  }

  .social {
    li {
      display: inline-block;
      a {
        color: darken(white, 50%);
        padding: 7px;
        &:hover {
          color: white;
        }
      }
    }
  }

  .copyright {
    border-top: 2px solid gray;
  }
}

.separador {
  max-width: 50%;
  margin: 20px auto;
  text-align: center;

  .hr-text {
    position: relative;
    border: 0;
    height: 1.5em;
  }
}
</style>