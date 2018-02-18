<template>
  <div id="project-form">
    <div class="container">
      <div class="row">
        <label for="project-name">Description</label>
        <input type="text" id="project-name" name="project-name" v-model="project.description">
      </div>

      <div class="row">
        <label for="project-owner">Owner</label>
        <input type="text" id="project-owner" name="project-owner" v-model="project.owner">
      </div>

      <div class="row">
        <label for="project-worker">Worker</label>
        <input type="text" id="project-worker" name="worker" v-model="project.worker">
      </div>

      <div class="row">
        <label for="project-revenue">Revenue</label>
        <input type="text" id="project-revenue" name="project-revenue" v-model="project.revenue">
      </div>

      <div class="row">
        <label for="project-costs">Costs</label>
        <input type="text" id="project-costs" name="project-costs" v-model="project.costs">
      </div>


      <div class="row">
        <label for="project-status">Status</label>
        <input type="text" id="project-status" name="project-status" v-model="project.status">
      </div>

      <div class="row">
        <input type="button" value="Submit" style="color: black" @click="submitProfileToTheBlockchain">
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'project',
    props: 'project',
    methods: {
      ...mapActions([
        ACTION_TYPES.PROJECT
      ]),
      submitProfileToTheBlockchain (evt) {
        evt.target.disabled = true
        const projectData = {
          description: this.project.description,
          owner: this.project.owner,
          worker: this.project.worker,
          revenue: this.project.revenue,
          costs: this.project.costs,
          status: this.project.status
        }
        // this.$store.state.push(projectData)
        console.log(projectData)
        this.$router.push('/')
      }
    }
  }

  import { mapActions } from 'vuex'
  import { ACTION_TYPES } from '../util/constants'

</script>

<style scoped>
  #profile-form {
    width: 100%;
    height: 420px;
    position: relative;
    top: 100px;
  }

  h3 {
    width: 100px;
    margin: auto;
    margin-bottom: 20px;
  }

  .row {
    margin-top: 20px;
    font-size: 14px;
    width: 300px;
    height: 40px;
    display: block;
    margin: auto;
  }

  label {
    height: 100%;
    line-height: 40px;
    width: 100px;
    display: inline-block;
  }

  input[type=text] {
    height: 30px;
    line-height: 30px;
    width: 200px;
    display: inline-block;
    color: #4d4c49;
    outline: none;
  }

  input {
    height: 30px;
    line-height: 30px;
    width: 100px;
    float: right;
  }
</style>
