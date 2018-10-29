<template>
<v-container>
  <v-layout row wrap>
    <v-flex xs12>
        <v-card>
          <v-card-title>
            <h2 class="primary--text">My Meetup</h2>
          </v-card-title>
          <v-card-media
            src="https://cdn.pixabay.com/photo/2015/12/15/06/32/new-york-1093744_960_720.jpg"
            height="400px"></v-card-media>
          <v-card-text>
            <div class="info--text">18th Dec 2018</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolorem est iusto natus sit tempore. Autem corporis eligendi et explicabo incidunt libero pariatur repellat, veniam voluptas? Amet aut autem, expedita explicabo minima natus odio placeat praesentium quasi suscipit tenetur vero.</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>

    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
    export default {
        name: "Meetup"
    }
</script>

<style scoped>

</style>
