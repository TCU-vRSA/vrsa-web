<template>
  <div v-html="$md.render(text)" />
</template>

<script>
export default {
  props: [
    'text',
  ]

}
</script>

<style>
h2 {
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 2rem;
  padding: 0.4em 0.5em;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid #DDDDDD; 
  border-left: 5px solid #2196F3;
}
h3 {
  font-weight: 600;
  font-size: 1.25rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  padding: 0.4em ;
  border-left: 2px solid #2196F3;
}
p {
  margin: 0.5rem 0;
  max-width: 100%;
}
img {
  width: 100%;
  margin: 1rem auto;
}
ul {
  margin-left: 1rem;
  padding-left: 1rem;
}
</style>