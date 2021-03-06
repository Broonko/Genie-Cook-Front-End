<template>
  <div>
{{userProfile.name}}
  </div>
</template>

<script>
import profileService from "@/services/profileService";

export default {
    name: 'Profile',
    data () {
      return {
        userProfile: ''
      }
    },
    mounted() {
    profileService
      .getUser()
      .then((response) => {
        this.userProfile = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  }
</script>

<style lang="scss" scoped>

</style>