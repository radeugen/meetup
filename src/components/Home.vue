<template>
    <v-container>
      <v-layout row wrap class="mb-2">
        <v-flex xs12 sm6 class="text-xs-center text-sm-right">
          <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-left">
          <v-btn large router to="/meetup/new" class="info">Organize Meetup</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-2">
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="item in meetups"
              @click="onLoadMeetup(item.id)"
              :key="item.id"
              :src="item.imageUrl"
              style="cursor:pointer;">
              <div class="title">{{item.title}}</div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-2">
        <v-flex xs12 class="text-xs-center">
          <p>Join us to meetup!</p>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Home",
      data() {
          return {
          }
      },
      computed: {
        meetups() {
          return this.$store.getters.featuredMeetups;
        }
      },
      methods: {
        onLoadMeetup(id) {
          this.$router.push('/meetup/'+id);
        }
      },
    }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    color: #fff;
    background-color: rgba(0,0,0,0.5);
    text-align: center;
    width: 100%;
    padding: 20px;
  }

</style>
