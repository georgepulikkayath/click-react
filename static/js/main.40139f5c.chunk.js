(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Splinter",image:"https://t3.ftcdn.net/jpg/01/63/59/54/240_F_163595441_hB6iTn5YU43BOBY3l78IVRvfZreJyVBV.jpg",count:0},{id:2,name:"Donatello",image:"https://cbsnews3.cbsistatic.com/hub/i/r/2010/12/03/79ed9c0e-a644-11e2-a3f0-029118418759/resize/620x465/94b66abc1317bbbd3581ad4f2c4bc7a7/365073.jpg",count:0},{id:3,name:"April",image:"https://img.freepik.com/free-vector/cute-bunny-waving-hand_43633-807.jpg?size=338&ext=jpg",count:0},{id:4,name:"Dexter",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJECTjTXVBrtlqNdyXcjf6_NvunD83cOvLuk_SO9QQQUnY0HQhtQ",count:0},{id:5,name:"Courage",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJ6ZsTP3luUaiUshJH5ykkDMtcSY9HQEE6NtpwuLJqXLXuTRb4w",count:0},{id:6,name:"Doug Funnie",image:"https://images-i.jpimedia.uk/imagefetch/c_fill,f_auto,h_1043,q_auto:eco,w_1600/https://inews.co.uk/wp-content/uploads/2018/05/tony-the-tiger.jpg",count:0},{id:7,name:"Krai",image:"https://previews.123rf.com/images/tigatelu/tigatelu1509/tigatelu150900533/45168915-cartoon-lion-sitting.jpg",count:0},{id:8,name:"Sensie",image:"https://i.pinimg.com/originals/8f/b1/62/8fb16268171047d65e4600e544ffcbd6.jpg",count:0},{id:9,name:"Metalhead",image:"https://www.freepngimg.com/thumb/cartoon/7-2-cartoon-picture.png",count:0},{id:10,name:"Shredder",image:"https://cdn.pixabay.com/photo/2017/11/06/18/30/eggplant-2924511__340.png",count:0},{id:11,name:"Michelangelo",image:"https://image.shutterstock.com/image-illustration/vector-illustration-cute-baby-penguin-260nw-747975073.jpg",count:0},{id:12,name:"Raphael",image:"https://amp.businessinsider.com/images/59721be09d0918319c32a058-750-563.jpg",count:0}]},,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(3),o=n.n(i),r=(n(15),n(4)),s=n(5),u=n(7),m=n(6),g=n(8),l=(n(16),function(e){return c.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),h=(n(17),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),d=(n(18),function(e){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"title"},e.children),c.a.createElement("div",{className:"scores"},"Score: ",e.score," Highscore: ",e.highscore))}),p=n(1),f=(n(19),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={cards:p,score:0,highscore:0},n.gameOver=function(){return n.state.score>n.state.highscore&&n.setState({highscore:n.state.score},function(){console.log(this.state.highscore)}),n.state.cards.forEach(function(e){e.count=0}),alert("Game Over :( \nscore: ".concat(n.state.score)),n.setState({score:0}),!0},n.clickCount=function(e){n.state.cards.find(function(t,a){if(t.id===e){if(0===p[a].count)return p[a].count=p[a].count+1,n.setState({score:n.state.score+1},function(){console.log(this.state.score)}),n.state.cards.sort(function(){return Math.random()-.5}),!0;n.gameOver()}})},n}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(h,null,c.a.createElement(d,{score:this.state.score,highscore:this.state.highscore},"Clicky Game"),this.state.cards.map(function(t){return c.a.createElement(l,{clickCount:e.clickCount,id:t.id,key:t.id,image:t.image})}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.40139f5c.chunk.js.map