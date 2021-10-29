const BookList = {
    data() {
        return {
          "books": [],
          bookForm: {},
          selectedBook: null
        }
    },

    computed: {},
    methods: {
         prettyDollar(n) {
             const d = new Intl.NumberFormat("en-US").format(n);
             return "$ " + d;
        },
        fetchBookData(){
            console.log("Fetching book data");
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
              console.error(err);
            })
        },
        postBook(evt) {
          if (this.selectedBook === null) {
            this.postNewBook(evt);
          } else {
            this.postEditBook(evt);
          }
        },
        postNewBook(evt) {      
        
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
            this.resetBookForm();
          });
        },
        postEditBook(evt) {

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
            this.resetBookForm();
          });
      },
      postDeleteBook(b) {
        if (!confirm("Are you sure you want to delete the book from the table?")) {
          return;
        }
        console.log("Delete", b);

        fetch('api/books/delete.php', {
            method:'POST',
            body: JSON.stringify(b),
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
            this.resetBookForm();
          });
      },
      selectBookToEdit(b) {
          this.selectedBook = b;
          this.bookForm = Object.assign({}, this.selectedBook);
      },
      resetBookForm() {
          this.selectedBook = null;
          this.bookForm = {};
      }
  },
  created() {
      this.fetchBookData();
    } //end created
} // end config
  
Vue.createApp(BookList).mount('#bookApp');



// const BookList = {
//   data() {
//     return {
//       books: [],
//       selectedBook: null,
//       bookForm: {}
//     }
//   },
//   computed: {},
//   methods: {
//       prettyData(d) {
//           return dayjs(d)
//           .format('D MMM YYYY')
//       },
//       prettyDollar(n) {
//           const d = new Intl.NumberFormat("en-US").format(n);
//           return "$ " + d;
//       },
//       selectbooks(s) {
//           if (s == this.selectedBook) {
//               return;
//           }
//           this.selectedBook = s;
//           this.books = [];
//           this.fetchBookData(this.selectedBook);
//       },
//       fetchBookData() {
//           fetch('/api/books/')
//           .then( response => response.json() )
//           .then( (responseJson) => {
//               console.log(responseJson);
//               this.books = responseJson;
//           })
//           .catch( (err) => {
//               console.error(err);
//           })
//       },
//       fetchBookData(s) {
//           console.log("Fetching book data for ", s);
//           fetch('/api/books')
//           .then( response => response.json() )
//           .then( (responseJson) => {
//               console.log(responseJson);
//               this.books = responseJson;
//           })
//           .catch( (err) => {
//               console.error(err);
//           })
//           .catch( (error) => {
//               console.error(error);
//           });
//       },
//       postBook(evt) {
//         if (this.selectedBook === null) {
//             this.postNewBook(evt);
//         } else {
//             this.postEditBook(evt);
//         }
//       },
//       postNewBook(evt) {
//         this.bookForm.id = this.selectedBook.id;

//         console.log("Creating!", this.bookForm);

//         fetch('api/books/create.php', {
//             method:'POST',
//             body: JSON.stringify(this.bookForm),
//             headers: {
//               "Content-Type": "application/json; charset=utf-8"
//             }
//           })
//           .then( response => response.json() )
//           .then( json => {
//             console.log("Returned from post:", json);
//             // TODO: test a result was returned!
//             this.books = json;

//             // reset the form
//             this.resetbookForm();
//           })
//           .catch( err => {
//             alert("Something went horribly wrong!");
//           });
//       },
//       postEditBook(evt) {
//         this.bookForm.id = this.selectedBook.id;
//         this.bookForm.id = this.selectedBook.id;

//         console.log("Updating!", this.bookForm);

//         fetch('api/books/update.php', {
//             method:'POST',
//             body: JSON.stringify(this.bookForm),
//             headers: {
//               "Content-Type": "application/json; charset=utf-8"
//             }
//           })
//           .then( response => response.json() )
//           .then( json => {
//             console.log("Returned from post:", json);
//             // TODO: test a result was returned!
//             this.books = json;

//             // reset the form
//             this.resetbookForm();
//           });
//       },
//       postDeleteBook(o) {
//         if (!confirm("Are you sure you want to delete the book from the table?")) {
//           return;
//         }
//         console.log("Delete!", o);

//         fetch('api/books/delete.php', {
//             method:'POST',
//             body: JSON.stringify(o),
//             headers: {
//               "Content-Type": "application/json; charset=utf-8"
//             }
//           })
//           .then( response => response.json() )
//           .then( json => {
//             console.log("Returned from post:", json);
//             // TODO: test a result was returned!
//             this.books = json;

//             // reset the form
//             this.resetbookForm();
//           });
//       },
//       selectBookToEdit(o) {
//           this.selectedbook = o;
//           this.bookForm = Object.assign({}, this.selectedBook);
//       },
//       resetbookForm() {
//           this.selectedBook = null;
//           this.bookForm = {};
//       }
//   },
//   created() {
//       this.fetchBookData();
//   }

// }

// Vue.createApp(BookList).mount('#bookApp');