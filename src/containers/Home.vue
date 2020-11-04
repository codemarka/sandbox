<template>
      <div class="App">
        <div class="user">
          <div class="user_data" @click="redirectToCodemarkaLogin">
          <img src='../assets/images/user.png'/>
           <small v-if="isAuthenticated">
            Hi, {{ user.displayName }}!
          </small>
            <small v-else>Guest</small>
          </div>
         
        </div>
      <header class="App-header">
        <img src='../assets/images/logo.png' class="App-logo" alt="logo" />
        <p>
         Codemarka Sandbox
        </p>
        <small class="app-description">A lightweight version for codemarka classrooms also in realtime, built with ''💗''.</small>
        <div
          class="App-link"
          @click="createSandbox"
        >
        <app-spinner v-if="isCreatingSandbox"></app-spinner>
        <span v-else>Start Coding</span>
        </div>
      </header>
    </div>
</template>


<script>
import modal from '../components/UI/Partials/Modal.vue';
import Spinner from '../components/UI/Partials/Spinner.vue';

export default {
  components:{
    authModal:modal,
    appSpinner: Spinner,
  },
  created() {
        const params = new URLSearchParams(window.location.search)
        if(params.has('token')){
          localStorage.setItem('token',params.get('token'))
        }
        if(params.has('user')){
          localStorage.setItem('user',params.get('user'))
        }
        window.history.pushState(null , "Home - Sandbox", "/")
  },
  data() {
    return {
      isModalVisible: false,
      url: process.env.VUE_APP_ENV
    }
  },
  computed: {
    user(){
      return this.$store.getters['auth/getUserData'];
    },
    isCreatingSandbox(){
      return this.$store.getters['sandbox/isCreatingSandbox']
    },
    isAuthenticated(){
      return this.$store.getters['auth/authenticated']
    }
  },
  methods: {
   
    redirectToCodemarkaLogin(){
      if(!this.isAuthenticated)   window.location.href = `https://codemarka.dev/auth/signin?redir=${window.location.origin}`
    },
    closeModal(){
      this.isModalVisible = false;
    },
    createSandbox(){
       this.$store.dispatch('sandbox/creatingSandboxInit')

     this.$http.post('https://api.secure.codemarka.dev/api/v1/auth/user/token/verify')
  .then(data => data.json())
  .then(user => {
           this.$store.dispatch('sandbox/creatingSandboxDone',{created:true})

  }).catch(err => {
           this.$store.dispatch('sandbox/creatingSandboxDone',{created:false})

  })
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
    cursor: pointer;
  align-items:center;

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