<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="primary--text">Create a New Meetup</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                v-model="title"
                name="title"
                label="Title"
                id="title"
                required
                :rules="requiredRule"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                v-model="location"
                name="location"
                label="Location"
                id="location"
                required
                :rules="requiredRule"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                v-model="imageUrl"
                name="imageUrl"
                label="Image URL"
                id="image-url"
                required
                :rules="requiredRule"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-img :src="imageUrl"></v-img>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-textarea
                v-model="description"
                name="description"
                label="Description"
                id="description"
                required
                :rules="requiredRule"
              >
              </v-textarea>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <h3>Choose Date&Time</h3>
            </v-flex>
          </v-layout>
          <v-layout row class="mb-2">
            <v-flex xs12 sm6 offset-sm3>
              <v-date-picker v-model="date"></v-date-picker>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-time-picker v-model="time"></v-time-picker>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn type="submit" class="primary" :disabled="!isValidForm">Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "CreateMeetup",
    data() {
      return {
        title: '',
        location: '',
        imageUrl: '',
        description: '',
        date: '',
        time: '',
        requiredRule: [
          v => !!v || 'This field is required',
        ]
      }
    },
    computed: {
      isValidForm() {
        return this.title !== ''
          && this.location !== ''
          && this.imageUrl !== ''
          && this.description !== ''
          && this.date !== ''
          && this.time !== '';
      }
    },
    methods: {
      onCreateMeetup() {
        if (!this.isValidForm) {
          return;
        }
        const meetup = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: this.date + ' ' + this.time
        };
        this.$store.dispatch('createMeetup', meetup);
        this.$router.push('/meetups')
      }
    },
  }
</script>

<style scoped>

</style>
