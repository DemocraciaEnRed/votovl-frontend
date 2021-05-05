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
              Ingresar
            </h1>
            <div class="box">
              <ValidationObserver v-slot="{ invalid, handleSubmit }">
                <form @submit.prevent="handleSubmit(userLogin)">
                  <div class="field">
                    <label class="label">Email</label>
                    <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">
                      <input v-model="login.email" type="text" required placeholder="Ingrese su email" class="input is-medium">
                      <span v-if="errors.length" class="help has-text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="field">
                    <label class="label">Password</label>
                    <ValidationProvider v-slot="{ errors }" name="Contraseña" rules="required|min:6">
                      <input
                        v-model="login.password"
                        type="password"
                        min="6"
                        required
                        placeholder="Ingrese su contraseña"
                        class="input is-medium"
                      >
                      <span v-if="errors.length" class="help has-text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <span class="help"><NuxtLink to="/auth/recover-password" class="has-text-primary">¿Olvidó su contraseña? Haga clic aquí</NuxtLink></span>
                  </div>
                  <div class="buttons is-right">
                    <button type="submit" :disabled="invalid" class="button is-primary is-outlined">
                      Entrar
                    </button>
                  </div>
                </form>
              </ValidationObserver>
            </div>
            <div class="box">
              <h1 class="title is-5 has-text-centered">
                ¿Aun no tenes cuenta?
              </h1>
              <div class="buttons is-centered">
                <NuxtLink to="/auth/register" class="button is-primary">
                  Registrarse
                </NuxtLink>
              </div>
            </div>
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
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin () {
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
