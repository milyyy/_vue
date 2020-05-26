import Vue from "vue";
import App from "./App";
import "@babel/polyfill";
if(!Uint8Array.prototype.slice){
  Uint8Array.prototype.slice = function(){
    return new Uint8Array(this).subarray(this.arguments);
  }
};

// import "./assets/iconfont";
if (!String.prototype.padEnd) {
  String.prototype.padEnd = function padEnd(targetLength, padString) {
    targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
    padString = String(typeof padString !== 'undefined' ? padString : ' ');
    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return String(this) + padString.slice(0, targetLength);
    }
  };
}

// Array.prototype.slice = function(a, b){
//   // 如果a是负数，另添加判断
//   a=a||0;
//   b=b||this.length;
//   var ary=[];
//   for(var i=a; i<b; i++){
//       ary.push(this[i]);
//   }
//   // return Array.prototype.concat.apply([]).slice
//   return ary;
// }

new Vue({
  render: h=> h(App)
}).$mount('#app')