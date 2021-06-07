<template>
  <amplify-authenticator>
    <div><span>authenticated!</span></div>
    <amplify-sign-out></amplify-sign-out>
  </amplify-authenticator>
</template>

<script lang="ts">
import TestService from "@/services/TestService"
import {defineComponent} from "vue";


export default defineComponent({
  name: "sample-app",
  data() {
    return {};
  },
  mounted() {
    // 403 on initial load
    // login to the application and reload page -> you should get 200
    TestService.get()
  }
});
</script>