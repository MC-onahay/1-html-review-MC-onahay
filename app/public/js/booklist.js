const BookList = {
    data() {
        return {
          "books": {},
          "selectedbook": null,
        }
    },

    methods:{
        fetchBookData(){
            fetch('/api/books/'')
            .then( response => response.json() )
            .then( (responseJson) => {
            console.log(responseJson);
            this.book = responseJson.results[0];
            })
        .catch( (err) => {
            console.error(err);
            })
        }
    },
    created() {
        this.fetchBookData();
    } //end created
} // end Offer config
  
Vue.createApp(BookList).mount('#bookApp');
