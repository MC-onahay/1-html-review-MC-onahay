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
    postNewBook(evt) {
        this.bookForm.bID = this.selectedStudent.bID;        
        
        console.log("Posting!", this.bookForm);

        fetch('api/offer/create.php', {
            method:'POST',
            body: JSON.stringify(this.bookForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.books = json;
            
            // reset the form
            this.bookForm = {};
          });
      }
  },
    created() {
        this.fetchBookData();
    } //end created
} // end Offer config
  
Vue.createApp(BookList).mount('#bookApp');
