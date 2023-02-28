<template>

<div class=" topnav sticky-top" >
    <button class="btn" type="button" data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"
            id="menu-btn"
            
            style="color: white"
            >
      Menu
    </button>
    <div v-if="isLogged" > 
      <button class="btn logout-btn" style="color: white; font-size: 0.7em" @click="logout">logout</button>
    </div>
</div>


<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="true" 
      tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel"
      
  >
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">MoneySave</h5>
  </div>
  <div class="offcanvas-body">
      <div class="list-group">
              
              
              <section data-bs-dismiss="offcanvas"><router-link  :to="{name : 'home'}" class="list-group-item"   >Home</router-link></section>
              <section data-bs-dismiss="offcanvas"><router-link :to="{path : '/list/expenses'}" class="list-group-item" > Expenses</router-link></section>
              <section data-bs-dismiss="offcanvas"> <router-link :to="{path : '/list/incomes'}" class="list-group-item"> Incomes</router-link></section>
              
      </div>
      <form class="search-form" >
         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white " class="bi bi-search" viewBox="0 0 16 16">
                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
           </svg>
          </button>
      </form>

    </div>
</div>


</template>


<script> 
  import store from '../store'
    export default{ 
      name : 'Navigation',

      computed:{
        isLogged(){
            return store.getters.getAuth
          }
      },
      methods : {
          logout(){
              store.commit('reverseAuth', false);
              this.$router.replace({path : '/login'})
          },
      }
    }

</script>

<style scoped>
  .topnav{
    background-color :rgba(35, 39, 46, 1) ;
    height : 7vh;
    margin-bottom: 5vh;
    display: flex;
    flex-direction : row;
    justify-content: space-between;
    align-items : center;
    padding : 1vw;

  }
  .offcanvas-title{
    color : white;
  }
  .offcanvas{
    background-color : rgba(14, 15, 15, 1);
    border : 0;
    box-shadow : 5px 0px 4px rgba(35, 39, 46, 1);
  }
  .offcanvas-body{
    display : flex;
    flex-direction : column;
    align-items : flex-start;
    padding: 0,5vw;

  }
  .list-group-item{
        background-color : rgba(14, 15, 15, 1);
        color : white;
        margin-left : 0,4vw;
        width : 100%;    
  }
  .list-group-item:hover{
    background-color : rgba(187, 227, 246, 0.7);
    color : rgba(56, 60, 61, 0.95);
    border-right : 5px solid rgba(0, 101, 255, 1);
    border-radius : 4px;
  }
  .list-group{
    display : flex;
    flex-direction : column;
    align-items: flex-start;
    padding: 0;
    width : 100%;
    margin-bottom : 30vw
  }
  #menu-btn{
    background-color : transparent;
    border : 0;
  }
  #menu-btn:hover{
    background-color : rgba(103, 120, 129, 0.61);
  }
  section{
    width : 100%;
  }

  .search-form{
    display : flex;
    flex-direction : row ;
    align-items: flex-start;
    justify-content : flex-start;
    width : 100%;
    margin : 0;
  }
  .search-form input{
    width : 60%;
  }
  .search-form button{
    width : 15%;
  }
  .logout-btn{
    font-size : 0,1em;
    background-color: transparent;
  }
</style>