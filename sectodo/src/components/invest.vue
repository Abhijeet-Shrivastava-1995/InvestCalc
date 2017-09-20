<<template>
  <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-6 col-sm-4">
          <h1 class="heading">Investment</h1>
          <form method="GET" action="test.json?:17-Sep-2017">

          <div class="input-group input-group-icon">
          <!-- <label >Date of Investment</label> -->
          <!-- <calendar v-on:dateChanged="changed" v-on:SwitchPreviousMonth="pre"
           v-on:SwitchNextMonth="next"
      v-bind:debug="false"/>
          <p></p> -->
          <input type="text" placeholder="DD-MON-YYYY" v-model="date"/>
          </div> 
          <div class="input-group input-group-icon">
              <input type="text" placeholder="Invested Amount" v-model="amountInvested"/>
          </div>
          <div>
              <select class="select-group">
                  <option></option>
                  </select>
              </div>
               <div>
              <select class="select-group">
                  <option></option>
                  </select>
              </div>
               <div>
              <select class="select-group">
                  <option></option>
                  </select>
              </div>
            
               <div >
                 <input hidden name="date" v-model="this.date"/>
              <input v-on:click="calculate (something, something)" class="calc_button btn-lg btn-success" type="submit" value="Calculate" />
          </div>
            <div>
                  <label>Your net worth today is</label>
              </div>
               <div class="input-group input-group-icon">
              <input type="text" placeholder="Invested Amount">
          </div>
          </form>
          </div>
          
        </div>
    </div>
</template>

<<script>
import calendar from './calendar'
export default {
  components: {
    calendar
  },
  data () {
    return {
      date: '',
      amountInvested: ''
    }
  },
  methods: {
    pre (from, to) {
      console.group('pre month')
      console.log('from', from)
      console.log('to', to)
      console.groupEnd()
    },
    next (from, to) {
      console.group('next month')
      console.log('from', from)
      console.log('to', to)
      console.groupEnd()
    },
    changed (to) {
      console.log('changed to', to)
    },
    calculate (investFundName, investDate) {
      var today = new Date()
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      var date = today.getDate()
      var mon = months[today.getMonth()]
      var year = today.getFullYear()
      var fulldate = date + '-' + mon + '-' + year
      console.log(fulldate)
    }
  }
}
</script>

<style>
div{
  display: block;
}

.row:before, .row:after {
    content: "";
    display: table;
}
input[type="text"]{
  font-size:25px;
}

.heading {
    text-align: center;
    color: #7ed321;
    font-size: 90px;
   
}
.input-group {
    margin-bottom: 1em;
    zoom: 1;
    width: 100%;
}


.select-group{
  padding:10px 10px 10px 10px;
  width: 500px;
  margin-bottom: 1em;
  margin-top: 1em;
  margin-left: 350px;
  height:50px;
}
.select_opt{
  position: relative;
}
.calc_button{
  margin-left: 350px;
  width: 500px;
}
label{
  margin-left: 395px;
  font-size: 30px;
}

body {
  padding: 1em;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 15px;
  color: #b9b9b9;
  background-color: #e3e3e3;
}
h4 {
  font-size: 70px;
  color: #7ed321;
}
input{
  width: 100%;
  padding: 1em;
  line-height: 1.4;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}

.input-group {
  margin-bottom: 1em;
  zoom: 1;
}

.container {
  max-width: 38em;
  padding: 1em 3em 2em 3em;
  margin: 0em auto;
  background-color: #fff;
  border-radius: 4.2px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
}

.select-group{
  /* padding:10px 10px 10px 10px; */
  width: 500px;
  margin-bottom: 1em;
  margin-top: 1em;

  margin-left:-10px;
  height:50px;
}

.calc_button{
  margin-left: -10px;
  width: 500px;
}
label{
 
    margin-left: 105px;
}

</style>

