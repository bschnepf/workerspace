<template v-if="isLoggedIn">
  <div id="profile">
    <div class="container">
      <div class="content">
        <div class="message">
          <div>
            Welcome to your Profile Page {{ user.firstName }}
            <div class="row">
              <div class="col-md-1">
                </div>
              <div class="col-md-5">
                <input type="button" class="btn-lg btn-primary" value="Complete a Project" @click="storeProject">
                <p style="color: black">Businesses, find Talent!</p>
              </div>
              <div class="col-md-1">
              </div>
              <div class="col-md-6">
                <input type="button" class="btn-lg btn-info" value="Join the Team" @click="">
                <p style="color: black">Talented, we want you!</p>
              </div>
            </div>
            <div class="row" ><br>
              <div class="col-md-12 head">
                &nbsp Shared Work Supply Chain &nbsp
              </div><br>
            </div>
            <div class="row">
              <div class="col-md-4" style="color: black">
                <img src="../../../static/images/SupplyChain.png" style="width:100%">
                : W O R K E R : <br>
              </div>
              <div class="col-md-4" style="color: black">
                <img src="../../../static/images/Workers.png" style="width:100%">
                : S U P P L Y  C H A I N : <br>
              </div>
              <div class="col-md-4" style="color: black">
                <img src="../../../static/images/Workspaces.png" style="width:100%">
                : W O R K S P A C E S : <br>
              </div>
            </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'profile',
    props: ['user'],
    methods: {
      storeProject () {
        this.$router.push('/project')
      }
    }
  }

</script>

<style scoped>
#profile {
  width: 100%;
  height: 620px;
  background: none;
}

.head {
  align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 24px;
  color: black;
}

.blockchain-message {
  float: left;
  margin-top: 20px;
  font-size: 14px;
  border: 1px solid #dcdede;
  color: #4d4c49;
  width: auto;
  padding: 10px;
}

.content {
  height: 100%;
  text-align: center;
  max-width: 920px;
  margin: auto;
}

.message {
  background: white;
  background-size: contain;
}
</style>
