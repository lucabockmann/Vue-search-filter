<template>
    <div class="hello">
    
        <h1>{{ msg }}</h1>
        
        <input class="custum-input" type="text" v-model="search" placeholder="Search title.."/>
        
        <h2>Searched in all Movies: {{ search }}</h2>

        <div class="wrapper">
            
            <div class="overlay-container" v-for="movie in filteredList">
                <img :src="movie.pic" width="250" height="350" alt="">
                <div class="overlay overlayFade">
                    <div class="text">
                        <h3>{{movie.name}}</h3>
                        <small>{{movie.release}}</small>
                        <p class="text-justify">
                            {{movie.decription}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data() {
      return {
            search: "",
            movies: this.$store.state.movies
      }
  },

    computed: {
        filteredList() {
            return this.movies.filter(movie => {
                return movie.name.toLowerCase().match(this.search.toLowerCase());
            })
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 10px 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.card {
    width: 250px;
    text-align: justify;
    margin-bottom: 30px;
}

</style>
