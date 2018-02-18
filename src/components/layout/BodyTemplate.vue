<template>
  <component class="body-template"
             :is="currentView"
             :user="user"
  >
  </component>
</template>

<script>
  export default {
    name: 'body-template',
    props: ['currentView', 'user']
  }
</script>

<style scoped>
  .body-template {
    width: 100%;
    font-size: large;
    color: white;
    height: 36px;
    background-size: contain;
    margin: 100px 0px;
    text-decoration: none;
    background: url('/static/images/iStock-912996726-introbgimage-smaller-resized.jpg') no-repeat;
    background-size: contain;
  }
</style>
