<template>
  <div>
    <h1>Github Projects</h1>
    <p>Here are some of my Github Projects which also have a separate Github Pages website.</p>
    <p>Note some of them might be incomplete or just really simple projects.</p>

    <!-- <h2>cloudera-github</h2>
    <h5>Repo</h5>
    <a href="https://github.com/gkevinb/cloudera-github">https://github.com/gkevinb/cloudera-github</a>
    <h5>Website</h5>
    <a
      href="https://gkevinb.github.io/cloudera-github/cloudera-github/"
    >https://gkevinb.github.io/cloudera-github/cloudera-github/</a>

    <h2>vue-app</h2>
    <h5>Repo</h5>
    <a href="https://github.com/gkevinb/vue-app">https://github.com/gkevinb/vue-app</a>
    <h5>Website</h5>
    <a href="https://gkevinb.github.io/vue-app/">https://gkevinb.github.io/vue-app/</a> -->

    <h2>Repos</h2>
    <div v-for="repo in repos" :key="repo.id" class="repo-container">
      <h4>{{ repo.name }}</h4>
      <h6>Repo</h6>
      <a :href="repo.html_url">{{ repo.html_url }}</a>
      <br>
      <h6 v-if="repo.homepage">Website</h6>
      <a :href="repo.homepage">{{ repo.homepage }}</a>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "github-projects-tab",
  props: {
    repos: Array
  },
  data() {
    return {
      // repos: null
    };
  },
  created() {},
  mounted() {}
};
</script>

<style lang="scss">
</style>
