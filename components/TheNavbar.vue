<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        Documentation
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <NuxtLink v-if="!$auth.loggedIn" to="/login" class="button is-primary">
            <strong>Entrar</strong>
          </NuxtLink>
          <a v-else class="button is-light" @click="logout">
            Log out
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    async logout () {
      try {
        // const response = await this.$auth.logout({
        //   data: {
        //     refreshToken: this.$auth.refreshToken
        //   }
        // })
        const response = await this.$auth.logout()
        this.$buefy.toast.open('Bye bye!')
        this.$router.push({ path: '/login' })
        console.log(response)
      } catch (err) {
        this.$buefy.toast.open('Something happened')
        console.log(err)
      }
    }
  }
}
</script>

<style>

</style>
