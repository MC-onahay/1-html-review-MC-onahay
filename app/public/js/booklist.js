const BookList = {
    data() {
        return {
          "books": [],
        }
    },

    methods:{
        fetchBookData(){
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (parsedJson) => {
            console.log(parsedJson);
            this.books = parsedJson
            })
        .catch( (err) => {
            console.error(err)
            })
        }
    },
    created() {
        this.fetchBookData();
    } //end created
} // end Offer config
  
Vue.createApp(BookList).mount('#bookApp');
