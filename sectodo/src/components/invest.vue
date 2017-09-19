<<template>
  <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="heading">investment</h1>
          </div>
          
        </div>
    </div>
</template>

<<script>
export default {
}
</script>

<<style>
div{
  display: block;
}
.container {
    max-width: 88em;
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
    position: relative;
    width: 500px;
    padding: 10px 10px 20px 10px;
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
    font-size: 95px;
    padding: 10px 10px 10px 65px;
}

.input-group {
    margin-bottom: 1em;
    zoom: 1;
}

.input-group-icon{
    position: relative;
}

.input-group-icon {
    position: absolute;
    top: 0;
    left: 350px;
    width: 3.4em;
    height: 3.4em;
    line-height: 3.4em;
    text-align: center;
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
</style>

