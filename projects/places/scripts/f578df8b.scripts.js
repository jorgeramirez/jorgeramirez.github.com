window.places={serverUrl:"http://190.104.153.121/proxy/proxy.php?proxy_url=http://comealong.me/CAE_API",Models:{},Collections:{},Views:{},Routers:{},AuthData:{},renderMainPage:function(){function a(a,b){var c=_.template($("#places-list").html(),{places:a.models});$("#loading").fadeOut(400,function(){$("#places-table").append(c),places.PlacesList=new List("places-table",{valueNames:["name","address","city","country"]})})}function b(a,b){console.log("error")}$("#geocomplete").geocomplete({map:".map-canvas",details:"form"}),places.Places=new places.Collections.PlacesCollection,places.PlaceAddView=new places.Views.PlaceAdd,places.Places.fetch({success:a,error:b,add:!0,dataType:"json"})},beforeLogin:function(){$("#app").hide(),$("#places-table").children().remove(),places.PlacesList=null,!places.PlaceAddView||places.PlaceAddView.undelegateEvents()},loginComeAlong:function(){function b(b){console.log("logged into comealong"),console.log(b),$("#app").show(),a.renderMainPage()}function c(){console.log("comealong login error"),console.log(arguments)}var a=this;$.ajax({type:"POST",url:places.serverUrl+"/um/session",data:JSON.stringify({name:"facebook",authString:places.AuthData.accessToken}),dataType:"json",contentType:"application/json; charset=utf-8",crossDomain:!0,success:b,error:c})},init:function(){var a=this;window.session={},window.fbAsyncInit=function(){FB.init({appId:"306294449486120"}),session.user=new FacebookUser,session.user.on("facebook:unauthorized",function(b,c){a.beforeLogin(),session.user.login()}),session.user.on("facebook:connected",function(b,c){places.AuthData=c.authResponse,a.loginComeAlong()}),session.user.on("facebook:disconnected",function(b,c){a.beforeLogin(),session.user.login()}),$("#logout").click(function(){session.user.logout()}),session.user.updateLoginStatus()},function(a){var b,c="facebook-jssdk",d=a.getElementsByTagName("script")[0];if(a.getElementById(c))return;b=a.createElement("script"),b.id=c,b.async=!0,b.src="//connect.facebook.net/en_US/all.js",d.parentNode.insertBefore(b,d)}(document)}},$(document).ready(function(){places.init()}),places.Views.PlaceAdd=Backbone.View.extend({el:"#place-add",events:{"click #place-add button":"addNewPlace"},addNewPlace:function(a){var b=this,c=b.$el.find("form")[0].elements;console.log("add place"),console.log({name:c.name.value,address:c.formatted_address.value,city:c.locality.value,country:c.country.value,latitude:c.lat.value,longitude:c.lng.value}),a.preventDefault()}}),places.Models.PlaceModel=Backbone.Model.extend({defaults:{id:null,name:"",address:"",city:"",country:"",latitue:0,longitude:0}}),places.Collections.PlacesCollection=Backbone.Collection.extend({model:places.Models.PlaceModel,url:places.serverUrl+"/places"}),places.Routers.ApplicationRouter=Backbone.Router.extend({});