<style>
*{font-family:Glicker !important}
.colorAX{color: #fff;font-weight: bold;}
.colorNAV{color: cadetblue;font-weight: bold;cursor: pointer; display: inline-block;margin-right: 1rem;line-height: 2rem;}
</style>
<template>
	<div style=";position: relative;padding: 5px 0px 5px 0px;line-height: 2.5rem ">
		<span style="font-size: 18px;color:#fff ;font-weight: bold;cursor: pointer;position: relative;vertical-align: sub;" class="">
	
		</span> 		
		<div style="clear: both;"></div> 
	</div>
		<div class="Box" v-if="isLogin">
		 <component :initinfo="initinfoval"  ref="viewBox" :is="rou"></component> 
		</div>
</template>

<script setup >
import  Web3 from 'web3';
import { useRouter } from "vue-router";
import { ref,onMounted ,watch,provide} from 'vue';
import {service} from './assets/axios.js';
import loginobj from './view/login.vue';
import objectlist from './view/objectList.vue';
import { PublicKey, Transaction } from '@solana/web3.js';
const  initinfoval=ref("0");
provide('objectEdit', objectEdit);
async function inits (){
}


              



function objectEdit(str){
	var id=str.id;
	initinfoval.value=id;
	rou.value=object;
}
function objectlistfun(str){
	if(  isLogin.value==true){
		rou.value=objectlist;
	}
}

function objectpagefun(str){
	if(  isLogin.value==true){
		rou.value=objectpage;
	}
}


		
		
function funnumx(){
		var str=["A","a","B","b","C","c","D","d","E","e","F","f","1","2","3","4","5","6","7","8","9","0"];
		var randomNum = Math.floor(Math.random() * 15);
		return str[randomNum];
}

//////////////////登录///////////////
const login=ref({"name":"","password":""});
const dialogVisible=ref(false);
const rou=ref(loginobj);
const token=ref("");
const isLogin=ref(false);
function loginfunc(){
	if(login.value.name=="root321" && login.value.password=="xxxa111111...11"){
			   isLogin.value=true;  dialogVisible.value = false ;
			    rou.value=objectlist;
			   
			   sessionStorage.setItem("name",login.value.name);
	}
}

function outlogin(){
	sessionStorage.removeItem("code");sessionStorage.removeItem("name");
		rou.value=loginobj;
		isLogin.value=false;
		 sessionStorage.removeItem("name");
	
}
onMounted(() => {		
	  isLogin.value=true;  dialogVisible.value = false ;rou.value=objectlist;

})	
////////////////////////////////////
const  object_list=ref({"name":"","tokenlist":"","walletlist":"","tokenlistton":"","walletlistton":"","tokenlisttrc":"","walletlisttrc":"","callbackfun":"http://127.0.0.1/synpay/public/index.php/index/Index/callBack","status":"0","statuston":"0","statustrc":"0","ip":""})
function sub_object_list(){
	service.post('/public/index.php/index/Index/callBack', object_list.value).then(response => {
		
	}).catch(error => {
				
	})
}
function   createObject(){rou.value=object;}
function   objectList(){rou.value=objectlist;}
////////////////////////////////////////////////////////////////////////////////////////////////////
const projectId = "a7047e9c7b626fd49a413a6d7748971a";
if (!projectId) { throw new Error('VITE_PROJECT_ID is not set')}
const router = useRouter();
 function gourl(url){
	  router.push({
	      name: url
	  })
  }
onMounted(() => {		inits ();})	
const modal = ref({});

const userWallet=ref("");


</script>
