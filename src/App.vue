<template>
  <header><img :src="Logo" class="logo" /> Workbox Service Worker</header>
  <ul>
    <li v-for="i in 3" :key="i">
      <router-link :to="`/users/${i}`"> /users/{{ i }} </router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script>
import Logo from "@/assets/logo.png";

export default {
  name: "App",
  data() {
    return {
      Logo,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 5%;
}

header {
  height: 50px;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.logo {
  height: 50%;
  display: block;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  gap: 0.5rem;
  margin: 0 0 1rem 0;
}

a {
  color: rgb(0, 0, 0);
  padding: 0.5rem;
  display: inline-block;
}

.router-link-active {
  background: #2c3e50;
  color: white;
}

.router-link-exact-active {
  background: #2c3e50;
  color: white;
}

pre {
  font-size: 1.1rem;
}
</style>
