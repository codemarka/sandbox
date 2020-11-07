<template>
      <div class="App">
        
        <div class="navigation_home">
            <div class="nav_logo">
              <img src='../assets/images/logo.png' class="App-logo" alt="logo" />
              Sandbox
            </div>

            <div class="user_data" @click="redirectToCodemarkaLogin">
              <i class="far fa-user" id="user_data"></i>
              <small v-if="isAuthenticated">
                Hi, {{ user.displayName }}!
              </small>
              <small v-else>Guest</small>
            </div>
        </div>

      <header class="App-header">
        <h2>Learn. Build. Share</h2>
        <small class="app-description">A lightweight version for codemarka classrooms also in realtime, built with ''💗''.</small>
        <div class="app-action-buttons">
           <button
          class="App-link"
          @click="createSandbox"
          >
          <app-spinner v-if="isCreatingSandbox"></app-spinner>
          <span v-else>Start Coding</span>

          </button>
          <a type="button" class="github_button" target="_blank" href="https://github.com/codemarka/sandbox">
          Github <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 32 32" data-custom-icon="true" focusable="false" aria-hidden="true" class="css-1pmpdjw" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M16 5.343c-6.196 0-11.219 5.023-11.219 11.219 0 4.957 3.214 9.162 7.673 10.645 0.561 0.103 0.766-0.244 0.766-0.54 0-0.267-0.010-1.152-0.016-2.088-3.12 0.678-3.779-1.323-3.779-1.323-0.511-1.296-1.246-1.641-1.246-1.641-1.020-0.696 0.077-0.682 0.077-0.682 1.126 0.078 1.72 1.156 1.72 1.156 1.001 1.715 2.627 1.219 3.265 0.931 0.102-0.723 0.392-1.219 0.712-1.498-2.49-0.283-5.11-1.246-5.11-5.545 0-1.226 0.438-2.225 1.154-3.011-0.114-0.285-0.501-1.426 0.111-2.97 0 0 0.941-0.301 3.085 1.15 0.894-0.25 1.854-0.373 2.807-0.377 0.953 0.004 1.913 0.129 2.809 0.379 2.14-1.453 3.083-1.15 3.083-1.15 0.613 1.545 0.227 2.685 0.112 2.969 0.719 0.785 1.153 1.785 1.153 3.011 0 4.31-2.624 5.259-5.123 5.537 0.404 0.348 0.761 1.030 0.761 2.076 0 1.5-0.015 2.709-0.015 3.079 0 0.299 0.204 0.648 0.772 0.538 4.455-1.486 7.666-5.69 7.666-10.645 0-6.195-5.023-11.219-11.219-11.219z"></path></svg>
          </a>
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
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');
.app-action-buttons {
  display: flex;
}
.github_button {
  height: 8vmin;
    display: flex;
    color: #fff;
    text-decoration: none;
    background: grey;
    padding: .1rem;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    width:10rem;
    border-radius: 0.25rem;
    font-weight: 600;
    margin-left:.5rem;
    font-size: 0.8em;
}
.navigation_home {
  min-height: 5rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: #fff;
    position: relative;
    align-items: center;
}

.nav_logo {
      display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 14px;
    top:9px;
    font-family: 'Barlow Condensed';
}

.nav_logo img.App-logo {
  width:30px;
}
.navigation_home div.user_data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-right: 10px;
    cursor: pointer;
    align-items: center;
    position: absolute;
    right: 11px;
    top:11px; 
}

.navigation_home img {
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
  height: 99vh;
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
    padding: .1rem;
    cursor: pointer;
    font-size: smaller;
    background: #ed217c;
    width:10rem;
    border-radius: 0.25rem;
    font-weight: 600;
    font-size: 0.8em;
}

#user_data {
  background-color: #1a1c21;
  border-radius: 40px;
  color: #ed217c;
  padding: 1em;
  font-size: 0.9em;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media only screen and (min-width: 768px){
  .github_button {
    height: 8vmin;
    display: flex;
    color: #fff;
    text-decoration: none;
    background: grey;
    padding: .1rem;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    width:10rem;
    border-radius: 0.25rem;
    font-weight: 600;
    margin-left:.5rem;
    font-size: 0.8em;
  }
  .App-link {
    color: #fff;
    border: 2px solid #ed217c;
    padding: .1rem;
    cursor: pointer;
    font-size: smaller;
    background: #ed217c;
    width:10rem;
    border-radius: 0.25rem;
    font-weight: 600;
    font-size: 0.8em;
  }
}

@media only screen and (min-width: 1024px){
  .github_button {
    height: 8vmin;
    display: flex;
    color: #fff;
    text-decoration: none;
    background: grey;
    padding: .0.4rem;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    width:6rem;
    border-radius: 0.25rem;
    font-weight: 600;
    font-size: 0.9rem;
    margin-left:.5rem;
  }
  .App-link {
    color: #fff;
    border: 2px solid #ed217c;
    padding: .0.4rem;
    cursor: pointer;
    font-size: smaller;
    background: #ed217c;
    width:8rem;
    border-radius: 0.25rem;
    font-weight: 600;
    font-size: 0.9rem;
  }
}

</style>