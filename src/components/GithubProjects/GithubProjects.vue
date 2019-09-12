<template>
  <div>
    <h1>Github Projects</h1>
    <p>Here are some of my Github Projects which also have a separate Github Pages website.</p>
    <p>Note some of them might be incomplete or just really simple projects.</p>

    <h2>Repos</h2>
    <div v-for="repo in input" :key="repo.id" class="repo-container">
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
    input: Array
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

.repo-container{
  display: flex;
  flex-direction: column;
}

</style>
