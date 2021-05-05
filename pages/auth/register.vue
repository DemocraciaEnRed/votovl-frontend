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
              Registro
            </h1>
            <div class="box">
              <div class="content">
                <p>Para registrarse, ingrese su email, le enviaremos un correo electronico para continuar el proceso de registro</p>
                <p class="is-size-5">
                  <b>Tiene 24 horas para completar su registro</b>
                </p>
                <p>Si no lo completa su registro, puede volver a solicitarlo nuevamente</p>
              </div>
              <ValidationObserver v-slot="{ invalid, handleSubmit }">
                <form @submit.prevent="handleSubmit(userRegister)">
                  <div class="field">
                    <label class="label">Email</label>
                    <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">
                      <input v-model="register.email" type="text" required placeholder="Ingrese su email" class="input is-medium">
                      <span v-if="errors.length" class="help has-text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <p class="is-size-7 my-3">
                    Al registrarse, usted declara tomar conocimiento y aplica a los <a href="#">Terminos y condiciones</a> de la plataforma
                  </p>
                  <div class="buttons is-left">
                    <button type="submit" :disabled="invalid" class="button is-primary">
                      Registrarse
                    </button>
                  </div>
                </form>
              </ValidationObserver>
            </div>
            <NuxtLink to="/auth/login" class="has-text-primary">
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
        email: ''
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
