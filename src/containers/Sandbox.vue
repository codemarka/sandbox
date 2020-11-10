<template>
  <div class="sandox-container">
    <div v-if="id && !isVerified" class="loader">
       <app-spinner></app-spinner>
       <div>verifying..</div>
    </div>
    <div v-else-if="id && isVerified" class="sandox-container-main">
          <app-navigation></app-navigation>
           <div class="editor-container">
            <div class="workspace-preview">Preview Here</div>

            <div class="workspace-editors">
            <ace-editor :value="editors[2].content" @changed="editorInputChanged" @init="editorInit" height="100%" theme="dracula" width="100%" lang="javascript"></ace-editor>  
            </div>           
           </div>
    </div>

  </div>
</template>

<style scoped>
div.workspace-preview {
  display:none;
  height: 100%;
  width:70%;
}

div.workspace-editors {
  width:100%;
  height: 100%;
}
div.editor-container {
  min-height: 90%;
  display: flex;
  width:100%;
}
div.sandox-container-main {
  display: flex;
  max-height: 100vh;
  height: 100vh;
  width: 100%;
  flex-direction: column;
}
  div.sandox-container {
    height : 100vh;
    width: 100%;
    background: #14171f;
  }

  .loader {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<script>
import Spinner from '../components/UI/Partials/Spinner.vue';
import Navigation from '../components/UI/Partials/Navigation.vue'

export default {
  components:{
    appSpinner: Spinner,
    appNavigation: Navigation
  },
    metaInfo(){
      return {
        title: `Check my Sandbox  - ${this.id}`
      }
    },
  data: function() {
    return {
      id: this.$route.params.sandbox_id,
      initiatedVerification: false,
      isVerified: false,
      editorOptions:{
        showGutter: false,
        theme: 'dracula'
      },
      editors: [
        {
          name:'html',
          content:'',
          title:'HTML',
          options:{
            ...this.editorOptions
          }
        },
        {
          name:'css',
          content:'',
          title:'CSS',
          options:{
            ...this.editorOptions
          }
        },
        {
          name:'javascript',
          content:'var codemarka = "sandbox"',
          title:'JAVASCRIPT',
          options:{
            ...this.editorOptions
          }
        }
      ]
    }
  },
  created() {
    setTimeout(() => {
      this.isVerified = true;
    }, 1500);
  },
  methods: {
     editorInit (editor) {
      require('ace-builds/src-min-noconflict/ext-language_tools');
      require('ace-builds/src-min-noconflict/ext-beautify');
      require('ace-builds/src-min-noconflict/ext-code_lens')
			editor.session.setMode("ace/mode/javascript");
			editor.commands.addCommand({
				name: "save",
				exec: this.save,
				bindKey: {mac: "cmd-s", win: "ctrl-s"}
			});
			editor.setOptions(this.editorOptions);
    },
    editorInputChanged(value){
      console.log(value)
    }
  }
}
</script>