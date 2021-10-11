const BookList = {
    data() {
        return {
          "books": [],
        }
    },

    computed: {},
    methods: {
         prettyDollar(n) {
             const d = new Intl.NumberFormat("en-US").format(n);
             return "$ " + d;
        },
    
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
