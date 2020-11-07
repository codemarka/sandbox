<template>
  <div class="sandox-container">
    <div v-if="id && !isVerified" class="loader">
       <app-spinner></app-spinner>
       <div>verifying..</div>
    </div>
    <div v-else-if="id && isVerified">
      SANDBOX
    </div>

  </div>
</template>

<style scoped>
  div.sandox-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height : 100vh;
    width: 100%;
    background: #14171f;
  }

  .loader {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color:#fff
  }
</style>

<script>
import Spinner from '../components/UI/Partials/Spinner.vue';

export default {
  components:{
    appSpinner: Spinner,
  },
  data: function() {
    return {
      id: this.$route.params.sandbox_id,
      initiatedVerification: false,
      isVerified: false
    }
  },
  created() {
    console.log(this.$route.params.sandbox_id)
  },
}
</script>