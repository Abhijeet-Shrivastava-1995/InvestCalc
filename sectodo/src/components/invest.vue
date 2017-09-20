<<template>
  <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-6 col-sm-4">
          <h1 class="heading">Investment</h1>
          <div class="input-group input-group-icon">
          <input type="text" placeholder="">
          <calendar v-on:dateChanged="changed" v-on:SwitchPreviousMonth="pre" v-on:SwitchNextMonth="next"
      v-bind:debug="false"/>
          </div>
          <div class="input-group input-group-icon">
              <input type="text" placeholder="Invested Amount">
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
              <button class="calc_button btn-lg btn-success">Calculate</button>
          </div>
            <div>
                  <label>Your net worth today is</label>
              </div>
               <div class="input-group input-group-icon">
              <input type="text" placeholder="Invested Amount">
          </div>
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
      funds: [],
      funding: []
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
    }
  },
  created () {
    this.$http.get('http://localhost:8080/test.json').then(function (data) {
     // console.log(data.bodyText)
      this.funds = data.bodyText.split(';')
    })
  }
}
</script>

<style>
div{
  display: block;
}
.container {
    max-width: 108em;
    padding: 1em 3em 2em 3em;
    margin: 0em auto;
    background-color: #fff;
    border-radius: 4.2px;
    box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
}
.row:before, .row:after {
    content: "";
    display: table;
}
input[type="text"]{
  font-size:25px;
}
input{
    
    text-align: center;
    display: block;
    line-height: 1.4em;
    background-color: #f9f9f9;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    box-sizing: border-box;
   
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
.input-group:before,
.input-group:after {
  content: "";
  display: table;
}
.input-group:after {
  clear: both;
}
.input-group-icon {
  position: relative;
}
.input-group-icon input {
  padding-left: 4.4em;
}
.input-group-icon .input-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 3.4em;
  height: 3.4em;
  line-height: 3.4em;
  text-align: center;
  pointer-events: none;
}
.input-group-icon .input-icon:after {
  position: absolute;
  top: 0.6em;
  bottom: 0.6em;
  left: 3.4em;
  display: block;
  border-right: 1px solid #e5e5e5;
  content: "";
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
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
.select_opt{
  position: relative;
}
.calc_button{
  margin-left: 0;
  width: 500px;
}
label{
 
    margin-left: 70px;
}

</style>

