import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate'
import es from 'vee-validate/dist/locale/es'
import {
  required, min, max, email
} from 'vee-validate/dist/rules'
// Add a rule.
// extend('secret', {
//   validate: value => value === 'example',
//   message: 'This is not the magic word'
// })

// Register it globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', { ...required })
extend('min', { ...min })
extend('max', { ...max })
extend('email', { ...email })

// if any option you want to change common
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  },
  // Whether failed validations should exit or all rules are run to completion.
  bails: true,
  // Optional fields with empty values will be excluded from validation.
  skipOptional: true,
  // Sets the interaction mode to one of the predefined modes.
  mode: 'aggressive',
  useConstraintAttrs: true
  // The fallback message for rules without messages.
})

// continue to add the necessary rule
// extend('required', { ...required })
// extend('min', { ...min })
// extend('max', { ...max })
// extend('email', { ...email })

// can extend the rules in batch
// import * as rules from 'vee-validate/dist/rules';
// for (let rule in rules) {
//  extend(rule, rules[rule]);
// }

localize('es', es)
