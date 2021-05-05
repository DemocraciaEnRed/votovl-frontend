<template>
  <div class="hero is-light is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-4-desktop is-8-tablet">
            <h1 class="title is-2 has-text-centered">
              PP VL - Votación
            </h1>
            <h1 class="subtitle is-4 has-text-centered">
              Resetear contraseña
            </h1>
            <div class="box">
              <form @submit.prevent="userRegister">
                <div class="field">
                  <label class="label">Contraseña</label>
                  <input v-model="register.password" type="text" required placeholder="Ingrese su email" class="input is-medium">
                </div>
                <div class="field">
                  <label class="label">Email</label>
                  <input v-model="register.rePassword" type="text" required placeholder="Ingrese su email" class="input is-medium">
                </div>
                <div class="buttons is-right">
                  <button type="submit" class="button is-primary">
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
            <NuxtLink to="/login" class="has-text-primary">
              <i class="fas fa-arrow-left" />&nbsp;Volver al login
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: 'guest',
  layout: 'simple',
  data () {
    return {
      register: {
        password: '',
        rePassword: ''
      }
    }
  },
  methods: {
    async userRegister () {
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.login
        })
        this.$buefy.toast.open(`Welcome ${response.data.user.name}`)
        this.$router.push({ path: '/' })
        // console.log(response)
      } catch (err) {
        this.$buefy.toast.open(err.response.data.message)
        // console.log(err)
      }
    }
  }
}
</script>
