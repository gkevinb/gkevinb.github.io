<template>
  <div>
    <h1>Github Projects</h1>
    <p>Here are some of my Github Projects which also have a separate Github Pages website.</p>
    <p>Note some of them might be incomplete or just really simple projects.</p>

    <h2>Repos</h2>
    <div id="repos-container">
      <div v-for="repo in input" :key="repo.id" class="repo-container">
        <h4>{{ repo.name }}</h4>
        <p>{{ repo.description }}</p>
        <h6>Repo</h6>
        <a :href="repo.html_url"><i class="fas fa-database"></i></a>
        <h6 v-if="repo.homepage">Website</h6>
        <a :href="repo.homepage"><i v-if="repo.homepage" class="fas fa-globe"></i></a>
        <i class="fas fa-code-branch"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-exclamation-circle"></i>
      </div>
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
#repos-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  i{
    font-size: 40px;
  }
}

.repo-container {
  display: flex;
  flex-direction: column;

  width: 320px;
  border: 1px solid red;
}
</style>
