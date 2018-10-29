<template>
  <v-container>
    <v-layout row wrap class="mb-3" v-for="item in meetups" :key="item.id">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2 >
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-img
                  :src="item.imageUrl"
                  height="130px"></v-img>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h2 class="white--text mb-0">{{item.title}}</h2>
                    <div>{{item.date | date}}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat light :to="'/meetup/' + item.id">
                    <v-icon left>arrow_forward</v-icon>
                    View Meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "Meetups",
    data() {
      return {}
    },
    computed: {
      meetups() {
        return this.$store.getters.loadedMeetups;
      }
    },
  }
</script>

<style scoped>

</style>
