<template>
      <div class="App">
        <auth-modal  v-show="isModalVisible"
      @close="closeModal">
       <template v-slot:header>
    <h1>Login </h1>
  </template>
      </auth-modal>
        <div class="user">
          <div class="user_data" @click="showPopupWindowForLogin">
          <img src='../media/images/user.png'/>
            <small v-show="!isAuthenticated">Guest</small>
          </div>
        </div>
      <header class="App-header">
        <img src='../media/images/logo.png' class="App-logo" alt="logo" />
        <p>
         Welcome to codemarka Sandbox
        </p>
        <small class="app-description">A lightweight version for codemarka classrooms also in realtime</small>
        <div
          class="App-link"
        >
          Start Coding
        </div>
      </header>
    </div>
</template>


<script>
import modal from './Modal.vue';
export default {
  components:{
    authModal:modal
  },
  data() {
    return {
      isAuthenticated: this.$store.getters['auth/authenticated'],
      isModalVisible: false
    }
  },
  computed: {
    user(){
      console.log(this)
      return this.$store.getters['auth/getUserData'];
    }
  },
  methods: {
    showPopupWindowForLogin(){
      console.log('ready')
      this.isModalVisible = true;

    },
    closeModal(){
      this.isModalVisible = false;
    }
  },
}
</script>

<style scoped>
.user {
  min-height: 10vh;
  display: flex;
  width:100%;
  justify-content:flex-end;
  color:#fff;
  align-items:center;
}

.user div.user_data {
      display: flex;
    flex-direction: column;
    justify-content:center;
    text-align:center;
    padding-right: 10px;
    cursor: 1;
}

.user img {
      height: 2.4rem;
    width: 2.4rem;
}
.app-description {
  color: darkgrey;
    margin: 0 0px 30px 0;
}
.App {
  display:flex;
  width:100%;
  flex-direction:column;
  height: 100vh;
  max-height: 100vh;
  background-color: #282c34;
}

.App-link:hover {
  font-weight: bold
}

.App-logo {
  height: 20vmin;
  pointer-events: none;
}

.App-header {
  text-align: center;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
     color: #fff;
    border: 2px solid #ed217c;
    border-radius: 4px;
    padding: .5rem;
    cursor: pointer;
    font-size: smaller;
    background: #ed217c
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>