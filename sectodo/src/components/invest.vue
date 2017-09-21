<template>
  <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-6 col-sm-4">
          <h1 class="heading">Investment</h1>
          <form method="GET" action="test.json">
          <div class="input-group input-group-icon">
          <input type="text" placeholder="DD-MON-YYYY" v-model="date"/>
          </div> 
          <div class="input-group input-group-icon">
              <input type="text" placeholder="Invested Amount" v-model="amountInvested"/>
          </div>
          <div>
            </div>
            <h3>.....Please choose a fund......</h3>
          <div >
              
              <select id="funds" class="select-group" v-model="fundname">
                 <option v-for="fund in fundList" v-bind:key="fund">{{ fund }}</option>
              </select>
          </div>
            <p v-for="fund in funds" v-bind:key="fund">{{fund}}</p>
              <div >
                <input hidden name="fundname" v-model="this.fundname"/>
                 <input hidden name="date" v-model="this.date"/>
                <input v-on:click="calculate()" class="calc_button btn-lg btn-success" type="button" value="Calculate" />
          </div>
            <div>
                  <label>Your net worth today is</label>
              </div>
              <p></p>
               <div class="input-group input-group-icon">
              <input type="text" v-model="newAmount" placeholder="New Amount">
          </div>
          </form>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      date: '',
      serverUrl: '/test.json?date=',
      amountInvested: '',
      fundname: '',
      funds: [],
      todays: {},
      newAmount: ''
    }
  },
  created () {
    console.log('there')
    var date = new Date()
    date.setDate(new Date().getDate() - 3)
    this.$http.get(this.serverUrl + this.getFormattedDate(date)).then(
      function (data) {
        console.log(data.body)
        this.todays = data.body
      })
  },
  computed: {
    fundList () {
      return Object.keys(this.todays)
    }
  },
  methods: {
    getFormattedDate (date) {
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      return date.getDate() + '-' + months[date.getMonth()] + '-' + date.getFullYear()
    },
    calculate () {
      var that = this
      this.$http.get(this.serverUrl + this.date).then(
        function (data) {
          var thatNav = that.todays[that.fundname]
          var thisNav = data.body[that.fundname]
          console.log((that.amountInvested / thatNav) * thisNav)
          that.newAmount = (that.amountInvested / thatNav) * thisNav
        })
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
  text-align: center;
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
  font-size:20px;
  margin-left:-10px;
  height:50px;
  color: black;
}
.calc_button{
  margin-left: -10px;
  width: 500px;
}
label{
 
    margin-left: 105px;
}
h3{
  position: relative;
  color: black;
  text-align: center;
  margin-top: 10px;
  
}
</style>