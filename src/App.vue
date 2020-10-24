<template>
                    <transition name="slide" mode="out-in">
                         <router-view></router-view>
                    </transition>
</template>

<script>
    export default {
        created(){
            this.$store.dispatch('verifyUser')
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
    body {
        margin: 0;
        padding: 0;
    }

    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;

    }

    @keyframes slide-in  {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }

        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    

    @keyframes slide-out  {
        from {
            transform: translateY(0px);
            opacity: 1;
        }

        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
