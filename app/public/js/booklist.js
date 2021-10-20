const BookList = {
    data() {
        return {
          "books": [],
          bookForm: {}
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
        .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson
        })
        .catch( (err) => {
            console.error(err);
        })
        .catch( (error) => {
            console.error(error);
        });
    },
    postNewBook(evt) {
        //this.bookForm.id = this.bookForm.id;        
        
        console.log("Posting!", this.bookForm);

        fetch('api/books/create.php', {
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
    },
    postEditBook(evt) {
        this.bookForm.id = this.selectedBook.id;

        console.log("Updating!", this.bookForm);

        fetch('api/books/update.php', {
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
            this.resetbookForm();
          });
      },
      selectBookToEdit(o) {
          this.selectedBook = o;
          this.bookForm = Object.assign({}, this.selectedBook);
      },
      resetOfferForm() {
          this.selectedBook = null;
          this.bookForm = {};
      }
  },
    created() {
        this.fetchBookData();
    } //end created
} // end Offer config
  
Vue.createApp(BookList).mount('#bookApp');
