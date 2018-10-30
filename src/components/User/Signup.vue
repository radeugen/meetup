<template>
  <v-container>
      <v-layout row v-if="error">
          <v-flex xs12 sm6 offset-sm3>
            <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
          </v-flex>
        </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignup">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Email"
                      id="email"
                      v-model="email"
                      type="email"
                      prepend-icon="alternate_email"
                      :rules="[rules.required, rules.email]"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      prepend-icon="lock_open"
                      :rules="[rules.required, rules.min]"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="confirmPassword"
                      label="Confirm assword"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      type="password"
                      prepend-icon="lock"
                      :rules="[rules.required, rules.passMatch]"></v-text-field>

                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit" class="primary" :loading="loading">Sign up</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "Signup",
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 6 || 'Min 6 characters',
          passMatch: v => v === this.password || ('The password you entered don\'t match'),
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
        }
      }
    },
    computed: {
      user() {
        return this.$store.getters.user;
      },
      error() {
        return this.$store.getters.error;
      },
      loading() {
        return this.$store.getters.loading;
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/');
        }
      }
    },
    methods: {
      onSignup() {
        this.$store.dispatch('signUserUp',{email: this.email, password: this.password});
      },
      onDismissed() {
        console.log('Dismissed Alert!');
        this.$store.dispatch('clearError');
      }
    },
  }
</script>

<style scoped>

</style>
