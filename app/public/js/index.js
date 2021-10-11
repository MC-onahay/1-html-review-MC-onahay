const Rando = {
    data() {
        return {
          "books": {},
          "selectedBook": null,
        }
    },
    computed:{
        prettyBirthday(){
            return dayjs(this.person.dob.date)
            .format('D MMM YYYY')
        }
    },
    methods:{
        fetchUserData(){
            fetch('/api/books/'')
            .then( response => response.json() )
            .then( (responseJson) => {
            console.log(responseJson);
            this.person = responseJson.results[0];
            })
        .catch( (err) => {
            console.error(err);
            })
        }
    },
    created() {
        this.fetchUserData();
    } //end created
} // end Offer config
  
Vue.createApp(Rando).mount('#randoApp');
