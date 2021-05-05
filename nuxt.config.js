export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Presupuesto Participativo de Vicente Lopez - Votacion',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vee-validate.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://dev.auth.nuxtjs.org
    '@nuxtjs/auth-next'
    // https://github.com/lewyuburi/nuxt-validate
    // 'nuxt-validate'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:4000', // Used as fallback if no runtime config is provided
    credentials: true
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  buefy: {
    css: false,
    materialDesignIcons: false
  },

  // nuxtValidate: {
  //   lang: 'es',
  //   rules: ['required', 'email', 'min', 'email'],
  //   classes: {
  //     invalid: 'is-danger'
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // auth strategies
  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'tokens.access.token',
          required: true,
          name: 'Authorization',
          type: 'Bearer',
          maxAge: 1800
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        refreshToken: {
          property: 'tokens.refresh.token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30,
          required: true,
          tokenRequired: false
        },
        autoLogout: true,
        endpoints: {
          login: { url: '/v1/auth/login', method: 'post' },
          refresh: { url: '/api/auth/refresh', method: 'post' },
          // logout: { url: '/v1/auth/logout', method: 'post' },
          logout: false, // Just delete the tokens in localstorage
          user: { url: '/v1/auth/user', method: 'get' }
        }
      }
    },
    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      callback: '/auth/login',
      home: '/'
    },
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/', // path where the cookie is visible. Default is '/'.
        secure: false // sets whether the cookie requires a secure protocol (https). Default is false, should be set to true if possible.
      }
    }
  },
  router: {
    middleware: ['auth']
  }
}
