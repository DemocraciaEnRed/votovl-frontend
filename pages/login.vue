<template>
  <div class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-6">
            <div class="box">
              <form @submit.prevent="userLogin">
                <div class="field">
                  <label class="label">Email</label>
                  <input v-model="login.email" type="text" class="input">
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <input v-model="login.password" type="password" min="6" class="input">
                </div>
                <div>
                  <button type="submit" class="button is-primary">
                    Submit
                  </button>
                </div>
              </form>
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
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
