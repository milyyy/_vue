<template>
<div class="flex">
  <div class="black-bg">

    <div class="header">
      <div :class="['title', {'active':tab == 1}]" @click="tab=1;init()">
        <span>LONDON</span>
      </div>
      <div :class="['title', {'active':tab == 2}]" @click="tab=2;init()"></div>
        <span>TOKYO</span>
      </div>
    </div>

    <div class="center-container">
      <!-- 'EUR/USD' -->
      <div class="_text1 spacecenter right-content" @click="showitem1()">
        <span class="line1">{{this.symbol}}</span>&nbsp;&nbsp;
        <span class="sm">{{this.diancha}}</span>
        <span class="sm">{{this.bid_amount/1000000}}M</span>
        <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
        <span>&nbsp;&nbsp;{{fourPoint(bid)}}<sup>{{this.bid|supFormat}}</sup></span>
        <span>&nbsp;&nbsp;{{fourPoint(ask)}}<sup>{{this.ask|supFormat}}</sup></span>
        <div><span class="iconfont icon-color">&#xe720;</span></div>
        <span>{{this.ask_amount/1000000}}M</span>
        <div>
          <span class="iconfont" :class="color?'right-content-green':'right-content-red'" v-show="color">&#xeb6e;</span>
          <span class="iconfont" :class="color?'right-content-green':'right-content-red'" v-show="!color">&#xeb6d;</span>
        </div>
      </div>
      <!-- 深度1 -->
      <div class="_text1" style="width:100%" v-for='(item,index) in datalist' :key="item.index" id="show">
        <div class="_text1 right-content-yellow spacecenter" v-show="index>0&&show">
          <span>{{item.symbol}}</span>&nbsp;&nbsp;
          <span class="sm">{{(item.ask*10000-item.bid*10000).toFixed(1)}}</span>
          <span class="sm">{{item.bid_amount/1000000}}M</span>
          <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
          <span>&nbsp;&nbsp;{{fourPoint(item.bid)}}<sup>{{item.bid|supFormat}}</sup></span>
          <span>&nbsp;&nbsp;{{fourPoint(item.ask)}}<sup>{{item.ask|supFormat}}</sup></span>
          <div><span class="iconfont icon-color">&#xe720;</span></div>
          <span>{{item.ask_amount/1000000}}M</span>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div>
      <!-- 'GBP/USD' -->
      <div class="_text1 spacecenter right-content" @click="showitem2()">
        <span class="line1">{{this.symbol2}}</span>&nbsp;&nbsp;
        <span class="sm">{{this.diancha2}}</span>
        <span class="sm">{{this.bid_amount2/1000000}}M</span>
        <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
        <span>&nbsp;&nbsp;{{fourPoint(bid2)}}<sup>{{bid2|supFormat}}</sup></span>
        <span>&nbsp;&nbsp;{{fourPoint(ask2)}}<sup>{{ask2|supFormat}}</sup></span>
        <!-- <span>&nbsp;&nbsp;{{this.bid2.toFixed(5)}}</span>
        <span>{{this.ask2.toFixed(5)}}</span> -->
        <div><span class="iconfont icon-color">&#xe720;</span></div>
        <span>{{this.ask_amount2/1000000}}M</span>
        <div>
          <span class="iconfont" :class="color2?'right-content-green':'right-content-red'" v-show="color2">&#xeb6e;</span>
          <span class="iconfont" :class="color2?'right-content-green':'right-content-red'" v-show="!color2">&#xeb6d;</span>
        </div>
      </div>
      <!-- 深度2 -->
      <div class="_text1" style="width:100%" v-for='(item,index) in datalist2' :key="item.index" id="show">
        <div class="_text1 right-content-yellow spacecenter" v-show="index>0&&show2">
          <span>{{item.symbol}}</span>&nbsp;&nbsp;
          <span class="sm">{{(item.ask*10000-item.bid*10000).toFixed(1)}}</span>
          <span class="sm">{{item.bid_amount/1000000}}M</span>
          <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
          <span>&nbsp;&nbsp;{{fourPoint(item.bid)}}<sup>{{item.bid|supFormat}}</sup></span>
          <span>&nbsp;&nbsp;{{fourPoint(item.ask)}}<sup>{{item.ask|supFormat}}</sup></span>
          <!-- <span>&nbsp;&nbsp;{{item.bid.toFixed(5)}}</span>
          <span>{{item.ask.toFixed(5)}}</span> -->
          <div><span class="iconfont icon-color">&#xe720;</span></div>
          <span>{{item.ask_amount/1000000}}M</span>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div>

      <!-- 'EUR/USD' -->
      <div class="_text1 spacecenter right-content" @click="showitem3()">
        <span class="line1">{{this.symbol3}}</span>&nbsp;&nbsp;
        <span class="sm">{{this.diancha3}}</span>
        <span class="sm">{{this.bid_amount3/1000000}}M</span>
        <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
        <span>&nbsp;&nbsp;{{twoPoint(bid3)}}<sup>{{this.bid3|backFormat(3)}}</sup></span>
        <span>&nbsp;&nbsp;{{twoPoint(ask3)}}<sup>{{this.ask3|backFormat(3)}}</sup></span>
        <!-- <span>{{this.ask3.toFixed(3)}}</span> -->
        <div><span class="iconfont icon-color">&#xe720;</span></div>
        <span>{{this.ask_amount3/1000000}}M</span>
        <div>
          <span class="iconfont" :class="color3?'right-content-green':'right-content-red'" v-show="color3">&#xeb6e;</span>
          <span class="iconfont" :class="color3?'right-content-green':'right-content-red'" v-show="!color3">&#xeb6d;</span>
        </div>
      </div>
      <!-- 深度3 -->
      <div class="_text1" style="width:100%" v-for='(item,index) in datalist3' :key="item.index" id="show">
        <div class="_text1 right-content-yellow spacecenter" v-show="index>0&&show3">
          <span>{{item.symbol}}</span>&nbsp;&nbsp;
          <span class="sm">{{(item.ask*100-item.bid*100).toFixed(1)}}</span>
          <span class="sm">{{item.bid_amount/1000000}}M</span>
          <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
          <span>&nbsp;&nbsp;{{twoPoint(item.bid)}}<sup>{{item.bid|backFormat(3)}}</sup></span>
          <span>&nbsp;&nbsp;{{twoPoint(item.ask)}}<sup>{{item.ask|backFormat(3)}}</sup></span>
          <div><span class="iconfont icon-color">&#xe720;</span></div>
          <span>{{item.ask_amount/1000000}}M</span>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div>

      <!-- 'EUR/USD' -->
      <div class="_text1 spacecenter right-content" @click="showitem4()">
        <span class="line1">{{this.symbol4}}</span>&nbsp;&nbsp;
        <span class="sm">{{this.diancha4}}</span>
        <span class="sm">{{this.bid_amount4/1000000}}M</span>
        <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
        <span>&nbsp;&nbsp;{{fourPoint(bid4)}}<sup>{{this.bid4|supFormat}}</sup></span>
        <span>&nbsp;&nbsp;{{fourPoint(ask4)}}<sup>{{this.ask4|supFormat}}</sup></span>
        <!-- <span>&nbsp;&nbsp;{{this.bid4.toFixed(5)}}</span>
        <span>{{this.ask4.toFixed(5)}}</span> -->
        <div><span class="iconfont icon-color">&#xe720;</span></div>
        <span>{{this.ask_amount4/1000000}}M</span>
        <div>
          <span class="iconfont" :class="color4?'right-content-green':'right-content-red'" v-show="color4">&#xeb6e;</span>
          <span class="iconfont" :class="color4?'right-content-green':'right-content-red'" v-show="!color4">&#xeb6d;</span>
        </div>
      </div>
      <!-- 深度4 -->
      <div class="_text1" style="width:100%" v-for='(item,index) in datalist4' :key="item.index">
        <div class="_text1 right-content-yellow spacecenter" v-show="index>0&&show4">
          <span>{{item.symbol}}</span>&nbsp;&nbsp;
          <span class="sm">{{(item.ask*10000-item.bid*10000).toFixed(1)}}</span>
          <span class="sm">{{item.bid_amount/1000000}}M</span>
          <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
          <span>&nbsp;&nbsp;{{fourPoint(bid)}}<sup>{{item.bid|supFormat}}</sup></span>
          <span>&nbsp;&nbsp;{{fourPoint(ask)}}<sup>{{item.ask|supFormat}}</sup></span>
          <!-- <span>&nbsp;&nbsp;{{item.bid.toFixed(5)}}</span>
          <span>{{item.ask.toFixed(5)}}</span> -->
          <div><span class="iconfont icon-color">&#xe720;</span></div>
          <span>{{item.ask_amount/1000000}}M</span>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div>

      <!-- 'EUR/USD' -->
      <div class="_text1 spacecenter right-content" @click="showitem5()">
        <span class="line1">{{this.symbol5}}</span>&nbsp;&nbsp;
        <span class="sm">{{this.diancha5}}</span>
        <span class="sm">{{this.bid_amount5/1000000}}M</span>
        <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
        <span>&nbsp;&nbsp;{{fourPoint(bid5)}}<sup>{{this.bid5|supFormat}}</sup></span>
        <span>&nbsp;&nbsp;{{fourPoint(ask5)}}<sup>{{this.ask5|supFormat}}</sup></span>
        <!-- <span>&nbsp;&nbsp;{{this.bid5.toFixed(5)}}</span>
        <span>{{this.ask5.toFixed(5)}}</span> -->
        <div><span class="iconfont icon-color">&#xe720;</span></div>
        <span>{{this.ask_amount5/1000000}}M</span>
        <div>
          <span class="iconfont" :class="color5?'right-content-green':'right-content-red'" v-show="color5">&#xeb6e;</span>
          <span class="iconfont" :class="color5?'right-content-green':'right-content-red'" v-show="!color5">&#xeb6d;</span>
        </div>
      </div>
      <!-- 深度5 -->
      <div class="_text1" style="width:100%" v-for='(item,index) in datalist5' :key="item.index">
        <div class="_text1 right-content-yellow spacecenter" v-show="index>0&&show5">
          <span>{{item.symbol}}</span>&nbsp;&nbsp;
          <span class="sm">{{(item.ask*10000-item.bid*10000).toFixed(1)}}</span>
          <span class="sm">{{item.bid_amount/1000000}}M</span>
          <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
          <span>&nbsp;&nbsp;{{fourPoint(bid)}}<sup>{{item.bid|supFormat}}</sup></span>
          <span>&nbsp;&nbsp;{{fourPoint(ask)}}<sup>{{item.ask|supFormat}}</sup></span>
          <!-- <span>&nbsp;&nbsp;{{item.bid.toFixed(5)}}</span>
          <span>{{item.ask.toFixed(5)}}</span> -->
          <div><span class="iconfont icon-color">&#xe720;</span></div>
          <span>{{item.ask_amount/1000000}}M</span>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div>

      <!-- 'EUR/USD' -->
      <div class="_text1 spacecenter right-content" @click="showitem6()">
        <span class="line1">{{this.symbol6}}</span>&nbsp;&nbsp;
        <span class="sm">{{this.diancha6}}</span>
        <span class="sm">{{this.bid_amount6/1000000}}M</span>
        <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
        <span>&nbsp;&nbsp;{{fourPoint(bid6)}}<sup>{{this.bid6|supFormat}}</sup></span>
        <span>&nbsp;&nbsp;{{fourPoint(ask6)}}<sup>{{this.ask6|supFormat}}</sup></span>
        <!-- <span>&nbsp;&nbsp;{{this.bid6.toFixed(5)}}</span>
        <span>{{this.ask6.toFixed(5)}}</span> -->
        <div><span class="iconfont icon-color">&#xe720;</span></div>
        <span>{{this.ask_amount6/1000000}}M</span>
        <div>
          <span class="iconfont" :class="color6?'right-content-green':'right-content-red'" v-show="color6">&#xeb6e;</span>
          <span class="iconfont" :class="color6?'right-content-green':'right-content-red'" v-show="!color6">&#xeb6d;</span>
        </div>
      </div>
      <!-- 深度6 -->
      <div class="_text1" style="width:100%" v-for='(item,index) in datalist6' :key="item.index">
        <div class="_text1 right-content-yellow spacecenter" v-show="index>0&&show6">
          <span>{{item.symbol}}</span>&nbsp;&nbsp;
          <span class="sm">{{(item.ask*10000-item.bid*10000).toFixed(1)}}</span>
          <span class="sm">{{item.bid_amount/1000000}}M</span>
          <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
          <span>&nbsp;&nbsp;{{fourPoint(bid)}}<sup>{{item.bid|supFormat}}</sup></span>
          <span>&nbsp;&nbsp;{{fourPoint(ask)}}<sup>{{item.ask|supFormat}}</sup></span>
          <!-- <span>&nbsp;&nbsp;{{item.bid.toFixed(5)}}</span>
          <span>{{item.ask.toFixed(5)}}</span> -->
          <div><span class="iconfont icon-color">&#xe720;</span></div>
          <span>{{item.ask_amount/1000000}}M</span>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div>

      <!-- 'EUR/USD' -->
      <div class="_text1 spacecenter right-content" @click="showitem7()">
        <span class="line1">{{this.symbol7}}</span>&nbsp;&nbsp;
        <span class="sm">{{this.diancha7}}</span>
        <span class="sm">{{this.bid_amount7/1000000}}M</span>
        <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
        <span>&nbsp;&nbsp;{{fourPoint(bid7)}}<sup>{{this.bid7|supFormat}}</sup></span>
        <span>&nbsp;&nbsp;{{fourPoint(ask7)}}<sup>{{this.ask7|supFormat}}</sup></span>
        <!-- <span>&nbsp;&nbsp;{{this.bid7.toFixed(5)}}</span>
        <span>{{this.ask7.toFixed(5)}}</span> -->
        <div><span class="iconfont icon-color">&#xe720;</span></div>
        <span>{{this.ask_amount7/1000000}}M</span>
        <div>
          <span class="iconfont" :class="color7?'right-content-green':'right-content-red'" v-show="color7">&#xeb6e;</span>
          <span class="iconfont" :class="color7?'right-content-green':'right-content-red'" v-show="!color7">&#xeb6d;</span>
        </div>
      </div>
      <!-- 深度7 -->
      <div class="_text1" style="width:100%" v-for='(item,index) in datalist7' :key="item.index">
        <div class="_text1 right-content-yellow spacecenter" v-show="index>0&&show7">
          <span>{{item.symbol}}</span>&nbsp;&nbsp;
          <span class="sm">{{(item.ask*10000-item.bid*10000).toFixed(1)}}</span>
          <span class="sm">{{item.bid_amount/1000000}}M</span>
          <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
          <span>&nbsp;&nbsp;{{fourPoint(bid)}}<sup>{{item.bid|supFormat}}</sup></span>
          <span>&nbsp;&nbsp;{{fourPoint(ask)}}<sup>{{item.ask|supFormat}}</sup></span>
          <!-- <span>&nbsp;&nbsp;{{item.bid.toFixed(5)}}</span>
          <span>{{item.ask.toFixed(5)}}</span> -->
          <div><span class="iconfont icon-color">&#xe720;</span></div>
          <span>{{item.ask_amount/1000000}}M</span>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div>

      <!-- 'EUR/USD' -->
      <div class="_text1 spacecenter right-content" @click="showitem8()">
        <span class="line1">{{this.symbol8}}</span>&nbsp;&nbsp;
        <span class="sm">{{this.diancha8}}</span>
        <span class="sm">{{this.bid_amount8/1000}}K</span>
        <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
        <span>&nbsp;&nbsp;{{this.bid8.toFixed(2)}}</span>
        <span>{{this.ask8.toFixed(2)}}</span>
        <div><span class="iconfont icon-color">&#xe720;</span></div>
        <span>{{this.ask_amount8/1000}}K</span>
        <div>
          <span class="iconfont" :class="color8?'right-content-green':'right-content-red'" v-show="color8">&#xeb6e;</span>
          <span class="iconfont" :class="color8?'right-content-green':'right-content-red'" v-show="!color8">&#xeb6d;</span>
        </div>
      </div>
      <!-- 深度8 -->
      <div class="_text1" style="width:100%" v-for='(item,index) in datalist8' :key="item.index">
        <div class="_text1 right-content-yellow spacecenter" v-show="index>0&&show8">
          <span>{{item.symbol}}</span>&nbsp;&nbsp;
          <span class="sm">{{(item.ask*100-item.bid*100).toFixed(1)}}</span>
          <span class="sm">{{item.bid_amount/1000}}K</span>
          <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
          <span>&nbsp;&nbsp;{{item.bid.toFixed(2)}}</span>
          <span>{{item.ask.toFixed(2)}}</span>
          <div><span class="iconfont icon-color">&#xe720;</span></div>
          <span>{{item.ask_amount/1000}}K</span>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div>

      <!-- 'EUR/USD' -->
      <div class="_text1 spacecenter right-content" @click="showitem9()">
        <span class="line1">{{this.symbol9}}</span>&nbsp;&nbsp;
        <span class="sm">{{this.diancha9}}</span>
        <span class="sm">{{this.bid_amount9/1000000}}M</span>
        <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
        <span>&nbsp;&nbsp;{{twoPoint(bid9)}}<sup>{{this.bid9|backFormat(3)}}</sup></span>
        <span>&nbsp;&nbsp;{{twoPoint(ask9)}}<sup>{{this.ask9|backFormat(3)}}</sup></span>
        <div><span class="iconfont icon-color">&#xe720;</span></div>
        <span>{{this.ask_amount9/1000000}}M</span>
        <div>
          <span class="iconfont" :class="color9?'right-content-green':'right-content-red'" v-show="color9">&#xeb6e;</span>
          <span class="iconfont" :class="color9?'right-content-green':'right-content-red'" v-show="!color9">&#xeb6d;</span>
        </div>
      </div>
      <!-- 深度9 -->
      <div class="_text1" style="width:100%" v-for='(item,index) in datalist9' :key="item.index">
        <div class="_text1 right-content-yellow spacecenter" v-show="index>0&&show9">
          <span>{{item.symbol}}</span>&nbsp;&nbsp;
          <span class="sm">{{(item.ask*100-item.bid*100).toFixed(1)}}</span>
          <span class="sm">{{item.bid_amount/1000000}}M</span>
          <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
          <span>&nbsp;&nbsp;{{twoPoint(item.bid)}}<sup>{{item.bid|backFormat(3)}}</sup></span>
          <span>&nbsp;&nbsp;{{twoPoint(item.ask)}}<sup>{{item.ask|backFormat(3)}}</sup></span>
          <!-- <span>{{item.ask.toFixed(3)}}</span> -->
          <div><span class="iconfont icon-color">&#xe720;</span></div>
          <span>{{item.ask_amount/1000000}}M</span>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div>

      <!-- 'EUR/USD' -->
      <div class="_text1 spacecenter right-content" @click="showitem10()">
        <span class="line1">{{this.symbol10}}</span>&nbsp;&nbsp;
        <span class="sm">{{this.diancha10}}</span>
        <span class="sm">{{this.bid_amount10/1000000}}M</span>
        <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
        <span>&nbsp;&nbsp;{{fourPoint(bid10)}}<sup>{{this.bid10|supFormat}}</sup></span>
        <span>&nbsp;&nbsp;{{fourPoint(ask10)}}<sup>{{this.ask10|supFormat}}</sup></span>
        <!-- <span>&nbsp;&nbsp;{{this.bid10.toFixed(5)}}</span>
        <span>{{this.ask10.toFixed(5)}}</span> -->
        <div><span class="iconfont icon-color">&#xe720;</span></div>
        <span>{{this.ask_amount10/1000000}}M</span>
        <div>
          <span class="iconfont" :class="color10?'right-content-green':'right-content-red'" v-show="color10">&#xeb6e;</span>
          <span class="iconfont" :class="color10?'right-content-green':'right-content-red'" v-show="!color10">&#xeb6d;</span>
        </div>
      </div>
      <!-- 深度10 -->
      <div class="_text1" style="width:100%" v-for='(item,index) in datalist10' :key="item.index">
        <div class="_text1 right-content-yellow spacecenter" v-show="index>0&&show10">
          <span>{{item.symbol}}</span>&nbsp;&nbsp;
          <span class="sm">{{(item.ask*10000-item.bid*10000).toFixed(1)}}</span>
          <span class="sm">{{item.bid_amount/1000000}}M</span>
          <div><span class="iconfont icon-color rotate">&#xe720;</span></div>
          <span>&nbsp;&nbsp;{{fourPoint(item.bid)}}<sup>{{item.bid|supFormat}}</sup></span>
          <span>&nbsp;&nbsp;{{fourPoint(item.ask)}}<sup>{{item.ask|supFormat}}</sup></span>
          <!-- <span>&nbsp;&nbsp;{{item.bid.toFixed(5)}}</span>
          <span>{{item.ask.toFixed(5)}}</span> -->
          <div><span class="iconfont icon-color">&#xe720;</span></div>
          <span>{{item.ask_amount/1000000}}M</span>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div>
    </div>
    <div class="right-bottom">
      <div style="width:50%; text-align: center">SPREAD</div>
      <div style="margin-left:3%">BID</div>
      <div style="margin-left:5%">OFFER</div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      tab: 1,
      path: "ws://cuprice.baileyhenrycapital.com/ws",
      socket: "",
      datalist: [],
      datalist2: [],
      datalist3: [],
      datalist4: [],
      datalist5: [],
      datalist6: [],
      datalist7: [],
      datalist8: [],
      datalist9: [],
      datalist10: [],
      datalist11: [],
      datalist12: [],

      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
      show10: false,
      show11: false,
      show12: false,

      // 总开关
      allshow: false,
      // 品种
      symbol: "EUR/USD",
      diancha: "",
      bid_amount: "",
      bid: 0,
      ask: 0,
      ask_amount: "",
      // 颜色判断
      color: "",
      // 上一次数值
      lastask_amount: "",

      // 品种
      symbol2: "GBP/USD",
      diancha2: "",
      bid_amount2: "",
      bid2: 0,
      ask2: 0,
      ask_amount2: "",
      // 颜色判断
      color2: "",
      // 上一次数值
      lastask_amount2: "",

      // 品种
      symbol3: "USD/JPY",
      diancha3: "",
      bid_amount3: "",
      bid3: 0,
      ask3: 0,
      ask_amount3: "",
      // 颜色判断
      color3: "",
      // 上一次数值
      lastask_amount3: "",

      // 品种
      symbol4: "AUD/USD",
      diancha4: "",
      bid_amount4: "",
      bid4: 0,
      ask4: 0,
      ask_amount4: "",
      // 颜色判断
      color4: "",
      // 上一次数值
      lastask_amount4: "",

      // 品种
      symbol5: "NZD/USD",
      diancha5: "",
      bid_amount5: "",
      bid5: 0,
      ask5: 0,
      ask_amount5: "",
      // 颜色判断
      color5: "",
      // 上一次数值
      lastask_amount5: "",

      // 品种
      symbol6: "USD/CAD",
      diancha6: "",
      bid_amount6: "",
      bid6: 0,
      ask6: 0,
      ask_amount6: "",
      // 颜色判断
      color6: "",
      // 上一次数值
      lastask_amount6: "",

      // 品种
      symbol7: "USD/CHF",
      diancha7: "",
      bid_amount7: "",
      bid7: 0,
      ask7: 0,
      ask_amount7: "",
      // 颜色判断
      color7: "",
      // 上一次数值
      lastask_amount7: "",

      // 品种
      symbol8: "XAU/USD",
      diancha8: "",
      bid_amount8: "",
      bid8: 0,
      ask8: 0,
      ask_amount8: "",
      // 颜色判断
      color8: "",
      // 上一次数值
      lastask_amount8: "",

      // 品种
      symbol9: "GBP/JPY",
      diancha9: "",
      bid_amount9: "",
      bid9: 0,
      ask9: 0,
      ask_amount9: "",
      // 颜色判断
      color9: "",
      // 上一次数值
      lastask_amount9: "",

      // 品种
      symbol10: "EUR/GBP",
      diancha10: "",
      bid_amount10: "",
      bid10: 0,
      ask10: 0,
      ask_amount10: "",
      // 颜色判断
      color10: "",
      // 上一次数值
      lastask_amount10: "",

      // 品种
      symbol11: "EUR/JPY",
      diancha11: "",
      bid_amount11: "",
      bid11: 0,
      ask11: 0,
      ask_amount11: "",
      // 颜色判断
      color11: "",
      // 上一次数值
      lastask_amount11: "",

      // 品种
      symbol12: "AUD/JPY",
      diancha12: "",
      bid_amount12: "",
      bid12: 0,
      ask12: 0,
      ask_amount12: "",
      // 颜色判断
      color12: "",
      // 上一次数值
      lastask_amount12: "",
      isOnline: false,
    }
  },
  methods: {
    init() {
      if(typeof(WebSocket) === "undefined"){
         alert("您的浏览器不支持socket")
      }else{
        
        if(this.tab == 1) {
          this.path = "ws://intprice.baileyhenrycapital.com/ws"
          
          this.socket = new WebSocket(this.path);
          // 实例化socket
          console.log('this', this.path);
          // 监听socket连接
          this.socket.onopen = this.open;
          // 监听socket错误信息
          this.socket.onerror = this.error;
          // 监听socket消息
          this.socket.onmessage = this.getMessage1;
          this.socket = null;
        } else if (this.tab ==2) {
        
          this.path= "ws://cuprice.baileyhenrycapital.com/ws"
          this.socket = new WebSocket(this.path);
          // 实例化socket
          console.log('this', this.path);
          // 监听socket连接
          this.socket.onopen = this.open;
          // 监听socket错误信息
          this.socket.onerror = this.error;
          // 监听socket消息
          this.socket.onmessage = this.getMessage2;
          this.socket = null;
        }
      }
    },
    open() {
      this.status = true;
      console.log("socket连接成功")
    },
    error() {
      this.status = false;
      console.log("连接错误")
    },
    // 后4位补零
    fourPoint(value){   // 补零
      var value=Math.round(parseFloat(value)*100000)/100000;
      var arr=value.toString().split(".");
      if(arr.length == 1){
        return value.toString()+".0000";
      }
      if(arr.length == 2) {
        if (arr[1].length==1) {
          return arr[0]+'.'+arr[1] + '000';
        }
        if (arr[1].length==2) {
          return arr[0]+'.'+arr[1] + '00';
        }
        if (arr[1].length==3) {
          return arr[0]+'.'+arr[1] + '0';
        }
        if (arr[1].length>=4) {
          return arr[0]+'.'+ arr[1].substr(0,4)
        }
      }
    },
    // 后两位补零
    twoPoint(value){
      var value=Math.round(parseFloat(value)*100000)/100000;
      var arr=value.toString().split(".");
      if(arr.length == 1){
        return value.toString()+".00";
      }
      if(arr.length == 2) {
        if (arr[1].length==1) {
          return arr[0]+'.'+arr[1] + '0';
        }
        if (arr[1].length>=2) {
          return arr[0]+'.'+ arr[1].substr(0,2)
        }
      }
    },
    /**
     * params: msg => {data} [object]
     * symbol: EUR/USD [string]
     * 
    */
    getItem( msg, symbol, obj ) {
      let {data} = msg;
      let {lastask_amount, cmd, ask, ask_amount, bid, bid_amount, diancha} = obj;
      let list = []; // dange
      if(JSON.parse(data)[symbol]){
        list = JSON.parse(data)[symbol];
      }
      if(list.length > 0){
        lastask_amount = list[2].ask_amount
        symbol = list[0].symbol
        diancha = ((list[0].ask-list[0].bid)*10000).toFixed(1)
        bid_amount = list[0].bid_amount
        bid = list[0].bid
        ask = list[0].ask
        ask_amount = list[0].ask_amount
      }
    },
    getMessage1(msg) {
      if(this.tab === 2){
        return;
      }
      
      if(JSON.parse(msg.data)['EUR/USD']){
        this.datalist = JSON.parse(msg.data)['EUR/USD']
      }
      if(this.datalist.length>0){
        // console.log(this.datalist)
        this.lastask_amount = this.datalist[2].ask_amount
        this.symbol = this.datalist[0].symbol
        this.ask = this.datalist[0].ask
        this.ask_amount = this.datalist[0].ask_amount
        this.bid = this.datalist[0].bid
        this.bid_amount = this.datalist[0].bid_amount
        this.diancha = ((this.datalist[0].ask-this.datalist[0].bid)*10000).toFixed(1)
        // this.diancha = this.fourPoint(this.datalist[0].ask-this.datalist[0].bid)
      }

      if(JSON.parse(msg.data)['GBP/USD']){
        this.datalist2 = JSON.parse(msg.data)['GBP/USD']
      }
      if(this.datalist2.length>0){
        // console.log(this.datalist2)
        this.lastask_amount2 = this.datalist2[2].ask_amount
        this.symbol2 = this.datalist2[0].symbol
        this.ask2 = this.datalist2[0].ask
        this.ask_amount2 = this.datalist2[0].ask_amount
        this.bid2 = this.datalist2[0].bid
        this.bid_amount2 = this.datalist2[0].bid_amount
        this.diancha2 = ((this.datalist2[0].ask-this.datalist2[0].bid)*10000).toFixed(1)
      }

      if(JSON.parse(msg.data)['USD/JPY']){
        this.datalist3 = JSON.parse(msg.data)['USD/JPY']
      }
      if(this.datalist3.length>0){
        this.lastask_amount3 = this.datalist3[2].ask_amount
        this.symbol3 = this.datalist3[0].symbol
        this.ask3 = this.datalist3[0].ask
        this.ask_amount3 = this.datalist3[0].ask_amount
        this.bid3 = this.datalist3[0].bid
        this.bid_amount3 = this.datalist3[0].bid_amount
        this.diancha3 = ((this.datalist3[0].ask-this.datalist3[0].bid)*100).toFixed(1)
      }

      if(JSON.parse(msg.data)['AUD/USD']){
        this.datalist4 = JSON.parse(msg.data)['AUD/USD']
      }
      if(this.datalist4.length>0){
        this.lastask_amount4 = this.datalist4[2].ask_amount
        this.symbol4 = this.datalist4[0].symbol
        this.ask4 = this.datalist4[0].ask
        this.ask_amount4 = this.datalist4[0].ask_amount
        this.bid4 = this.datalist4[0].bid
        this.bid_amount4 = this.datalist4[0].bid_amount
        this.diancha4 = ((this.datalist4[0].ask-this.datalist4[0].bid)*10000).toFixed(1)
      }

      if(JSON.parse(msg.data)['NZD/USD']){
        this.datalist5 = JSON.parse(msg.data)['NZD/USD']
      }
      if(this.datalist5.length>0){
        this.lastask_amount5 = this.datalist5[2].ask_amount
        this.symbol5 = this.datalist5[0].symbol
        this.ask5 = this.datalist5[0].ask
        this.ask_amount5 = this.datalist5[0].ask_amount
        this.bid5 = this.datalist5[0].bid
        this.bid_amount5 = this.datalist5[0].bid_amount
        this.diancha5 = ((this.datalist5[0].ask-this.datalist5[0].bid)*10000).toFixed(1)
      }

      if(JSON.parse(msg.data)['USD/CAD']){
        this.datalist6 = JSON.parse(msg.data)['USD/CAD']
      }
      if(this.datalist6.length>0){
        this.lastask_amount6 = this.datalist6[2].ask_amount
        this.symbol6 = this.datalist6[0].symbol
        this.ask6 = this.datalist6[0].ask
        this.ask_amount6 = this.datalist6[0].ask_amount
        this.bid6 = this.datalist6[0].bid
        this.bid_amount6 = this.datalist6[0].bid_amount
        this.diancha6 = ((this.datalist6[0].ask-this.datalist6[0].bid)*10000).toFixed(1)
      }

      if(JSON.parse(msg.data)['USD/CHF']){
        this.datalist7 = JSON.parse(msg.data)['USD/CHF']
      }
      if(this.datalist7.length>0){
        this.lastask_amount7 = this.datalist7[2].ask_amount
        this.symbol7 = this.datalist7[0].symbol
        this.ask7 = this.datalist7[0].ask
        this.ask_amount7 = this.datalist7[0].ask_amount
        this.bid7 = this.datalist7[0].bid
        this.bid_amount7 = this.datalist7[0].bid_amount
        this.diancha7 = ((this.datalist7[0].ask-this.datalist7[0].bid)*10000).toFixed(1)
      }

      if(JSON.parse(msg.data)['XAU/USD']){
        this.datalist8 = JSON.parse(msg.data)['XAU/USD']
      }
      if(this.datalist8.length>0){
        this.lastask_amount8 = this.datalist8[2].ask_amount
        this.symbol8 = this.datalist8[0].symbol
        this.ask8 = this.datalist8[0].ask
        this.ask_amount8 = this.datalist8[0].ask_amount
        this.bid8 = this.datalist8[0].bid
        this.bid_amount8 = this.datalist8[0].bid_amount
        this.diancha8 = ((this.datalist8[0].ask-this.datalist8[0].bid)*100).toFixed(1)
      }

      if(JSON.parse(msg.data)['GBP/JPY']){
        this.datalist9 = JSON.parse(msg.data)['GBP/JPY']
      }
      if(this.datalist9.length>0){
        this.lastask_amount9 = this.datalist9[2].ask_amount
        this.symbol9 = this.datalist9[0].symbol
        this.ask9 = this.datalist9[0].ask
        this.ask_amount9 = this.datalist9[0].ask_amount
        this.bid9 = this.datalist9[0].bid
        this.bid_amount9 = this.datalist9[0].bid_amount
        this.diancha9 = ((this.datalist9[0].ask-this.datalist9[0].bid)*100).toFixed(1)
      }

      if(JSON.parse(msg.data)['EUR/GBP']){
        this.datalist10 = JSON.parse(msg.data)['EUR/GBP']
      }
      if(this.datalist10.length>0){
        this.lastask_amount10 = this.datalist10[2].ask_amount
        this.symbol10 = this.datalist10[0].symbol
        this.ask10 = this.datalist10[0].ask
        this.ask_amount10 = this.datalist10[0].ask_amount
        this.bid10 = this.datalist10[0].bid
        this.bid_amount10 = this.datalist10[0].bid_amount
        this.diancha10 = ((this.datalist10[0].ask-this.datalist10[0].bid)*10000).toFixed(1)
      }

      if(JSON.parse(msg.data)['EUR/JPY']){
        this.datalist11 = JSON.parse(msg.data)['EUR/JPY']
      }
      if(this.datalist11.length>0){
        this.lastask_amount11 = this.datalist11[2].ask_amount
        this.symbol11 = this.datalist11[0].symbol
        this.ask11 = this.datalist11[0].ask
        this.ask_amount11 = this.datalist11[0].ask_amount
        this.bid11 = this.datalist11[0].bid
        this.bid_amount11 = this.datalist11[0].bid_amount
        this.diancha11 = ((this.datalist11[0].ask-this.datalist11[0].bid)*10000).toFixed(1)
      }

      if(JSON.parse(msg.data)['AUD/JPY']){
        this.datalist12 = JSON.parse(msg.data)['AUD/JPY']
      }
      if(this.datalist12.length>0){
        this.lastask_amount12 = this.datalist12[2].ask_amount
        this.symbol12 = this.datalist12[0].symbol
        this.ask12 = this.datalist12[0].ask
        this.ask_amount12 = this.datalist12[0].ask_amount
        this.bid12 = this.datalist12[0].bid
        this.bid_amount12 = this.datalist12[0].bid_amount
        this.diancha12 = ((this.datalist12[0].ask-this.datalist12[0].bid)*10000).toFixed(1)
      }
    },
    getMessage2(msg) {
      if(this.tab === 1){
        return;
      }
      if(JSON.parse(msg.data)['EUR/USD']){
        this.datalist = JSON.parse(msg.data)['EUR/USD']
      }
      if(this.datalist.length>0){
        // console.log(this.datalist)
        this.lastask_amount = this.datalist[2].ask_amount
        this.symbol = this.datalist[0].symbol
        this.ask = this.datalist[0].ask
        this.ask_amount = this.datalist[0].ask_amount
        this.bid = this.datalist[0].bid
        this.bid_amount = this.datalist[0].bid_amount
        this.diancha = ((this.datalist[0].ask-this.datalist[0].bid)*10000).toFixed(1)
        // this.diancha = this.fourPoint(this.datalist[0].ask-this.datalist[0].bid)
      }

      if(JSON.parse(msg.data)['GBP/USD']){
        this.datalist2 = JSON.parse(msg.data)['GBP/USD']
      }
      if(this.datalist2.length>0){
        // console.log(this.datalist2)
        this.lastask_amount2 = this.datalist2[2].ask_amount
        this.symbol2 = this.datalist2[0].symbol
        this.ask2 = this.datalist2[0].ask
        this.ask_amount2 = this.datalist2[0].ask_amount
        this.bid2 = this.datalist2[0].bid
        this.bid_amount2 = this.datalist2[0].bid_amount
        this.diancha2 = ((this.datalist2[0].ask-this.datalist2[0].bid)*10000).toFixed(1)
      }

      if(JSON.parse(msg.data)['USD/JPY']){
        this.datalist3 = JSON.parse(msg.data)['USD/JPY']
      }
      if(this.datalist3.length>0){
        this.lastask_amount3 = this.datalist3[2].ask_amount
        this.symbol3 = this.datalist3[0].symbol
        this.ask3 = this.datalist3[0].ask
        this.ask_amount3 = this.datalist3[0].ask_amount
        this.bid3 = this.datalist3[0].bid
        this.bid_amount3 = this.datalist3[0].bid_amount
        this.diancha3 = ((this.datalist3[0].ask-this.datalist3[0].bid)*100).toFixed(1)
      }

      if(JSON.parse(msg.data)['AUD/USD']){
        this.datalist4 = JSON.parse(msg.data)['AUD/USD']
      }
      if(this.datalist4.length>0){
        this.lastask_amount4 = this.datalist4[2].ask_amount
        this.symbol4 = this.datalist4[0].symbol
        this.ask4 = this.datalist4[0].ask
        this.ask_amount4 = this.datalist4[0].ask_amount
        this.bid4 = this.datalist4[0].bid
        this.bid_amount4 = this.datalist4[0].bid_amount
        this.diancha4 = ((this.datalist4[0].ask-this.datalist4[0].bid)*10000).toFixed(1)
      }

      if(JSON.parse(msg.data)['NZD/USD']){
        this.datalist5 = JSON.parse(msg.data)['NZD/USD']
      }
      if(this.datalist5.length>0){
        this.lastask_amount5 = this.datalist5[2].ask_amount
        this.symbol5 = this.datalist5[0].symbol
        this.ask5 = this.datalist5[0].ask
        this.ask_amount5 = this.datalist5[0].ask_amount
        this.bid5 = this.datalist5[0].bid
        this.bid_amount5 = this.datalist5[0].bid_amount
        this.diancha5 = ((this.datalist5[0].ask-this.datalist5[0].bid)*10000).toFixed(1)
      }

      if(JSON.parse(msg.data)['USD/CAD']){
        this.datalist6 = JSON.parse(msg.data)['USD/CAD']
      }
      if(this.datalist6.length>0){
        this.lastask_amount6 = this.datalist6[2].ask_amount
        this.symbol6 = this.datalist6[0].symbol
        this.ask6 = this.datalist6[0].ask
        this.ask_amount6 = this.datalist6[0].ask_amount
        this.bid6 = this.datalist6[0].bid
        this.bid_amount6 = this.datalist6[0].bid_amount
        this.diancha6 = ((this.datalist6[0].ask-this.datalist6[0].bid)*10000).toFixed(1)
      }

      if(JSON.parse(msg.data)['USD/CHF']){
        this.datalist7 = JSON.parse(msg.data)['USD/CHF']
      }
      if(this.datalist7.length>0){
        this.lastask_amount7 = this.datalist7[2].ask_amount
        this.symbol7 = this.datalist7[0].symbol
        this.ask7 = this.datalist7[0].ask
        this.ask_amount7 = this.datalist7[0].ask_amount
        this.bid7 = this.datalist7[0].bid
        this.bid_amount7 = this.datalist7[0].bid_amount
        this.diancha7 = ((this.datalist7[0].ask-this.datalist7[0].bid)*10000).toFixed(1)
      }

      if(JSON.parse(msg.data)['XAU/USD']){
        this.datalist8 = JSON.parse(msg.data)['XAU/USD']
      }
      if(this.datalist8.length>0){
        this.lastask_amount8 = this.datalist8[2].ask_amount
        this.symbol8 = this.datalist8[0].symbol
        this.ask8 = this.datalist8[0].ask
        this.ask_amount8 = this.datalist8[0].ask_amount
        this.bid8 = this.datalist8[0].bid
        this.bid_amount8 = this.datalist8[0].bid_amount
        this.diancha8 = ((this.datalist8[0].ask-this.datalist8[0].bid)*100).toFixed(1)
      }

      if(JSON.parse(msg.data)['GBP/JPY']){
        this.datalist9 = JSON.parse(msg.data)['GBP/JPY']
      }
      if(this.datalist9.length>0){
        this.lastask_amount9 = this.datalist9[2].ask_amount
        this.symbol9 = this.datalist9[0].symbol
        this.ask9 = this.datalist9[0].ask
        this.ask_amount9 = this.datalist9[0].ask_amount
        this.bid9 = this.datalist9[0].bid
        this.bid_amount9 = this.datalist9[0].bid_amount
        this.diancha9 = ((this.datalist9[0].ask-this.datalist9[0].bid)*100).toFixed(1)
      }

      if(JSON.parse(msg.data)['EUR/GBP']){
        this.datalist10 = JSON.parse(msg.data)['EUR/GBP']
      }
      if(this.datalist10.length>0){
        this.lastask_amount10 = this.datalist10[2].ask_amount
        this.symbol10 = this.datalist10[0].symbol
        this.ask10 = this.datalist10[0].ask
        this.ask_amount10 = this.datalist10[0].ask_amount
        this.bid10 = this.datalist10[0].bid
        this.bid_amount10 = this.datalist10[0].bid_amount
        this.diancha10 = ((this.datalist10[0].ask-this.datalist10[0].bid)*10000).toFixed(1)
      }

      if(JSON.parse(msg.data)['EUR/JPY']){
        this.datalist11 = JSON.parse(msg.data)['EUR/JPY']
      }
      if(this.datalist11.length>0){
        this.lastask_amount11 = this.datalist11[2].ask_amount
        this.symbol11 = this.datalist11[0].symbol
        this.ask11 = this.datalist11[0].ask
        this.ask_amount11 = this.datalist11[0].ask_amount
        this.bid11 = this.datalist11[0].bid
        this.bid_amount11 = this.datalist11[0].bid_amount
        this.diancha11 = ((this.datalist11[0].ask-this.datalist11[0].bid)*10000).toFixed(1)
      }

      if(JSON.parse(msg.data)['AUD/JPY']){
        this.datalist12 = JSON.parse(msg.data)['AUD/JPY']
      }
      if(this.datalist12.length>0){
        this.lastask_amount12 = this.datalist12[2].ask_amount
        this.symbol12 = this.datalist12[0].symbol
        this.ask12 = this.datalist12[0].ask
        this.ask_amount12 = this.datalist12[0].ask_amount
        this.bid12 = this.datalist12[0].bid
        this.bid_amount12 = this.datalist12[0].bid_amount
        this.diancha12 = ((this.datalist12[0].ask-this.datalist12[0].bid)*10000).toFixed(1)
      }
    },
    // send() {
    //   this.socket.send(params)
    // },
    close() {
      console.log("socket已经关闭")
    },
    closeall() {
      this.show=false
      this.show2=false
      this.show3=false
      this.show4=false
      this.show5=false
      this.show6=false
      this.show7=false
      this.show8=false
      this.show9=false
      this.show10=false
      this.show11=false
      this.show12=false
    },
    showitem1(){
      if(this.show==true){
        this.show=false
      }else{
        this.closeall()
        this.show=true
      }
    },
    showitem2(){
      if(this.show2==true){
        this.show2=false
      }else{
        this.closeall()
        this.show2=true
      }
    },
    showitem3(){
      if(this.show3==true){
        this.show3=false
      }else{
        this.closeall()
        this.show3=true
      }
    },
    showitem4(){
      if(this.show4==true){
        this.show4=false
      }else{
        this.closeall()
        this.show4=true
      }
    },
    showitem5(){
      if(this.show5==true){
        this.show5=false
      }else{
        this.closeall()
        this.show5=true
      }
    },
    showitem6(){
      if(this.show6==true){
        this.show6=false
      }else{
        this.closeall()
        this.show6=true
      }
    },
    showitem7(){
      if(this.show7==true){
        this.show7=false
      }else{
        this.closeall()
        this.show7=true
      }
    },
    showitem8(){
      if(this.show8==true){
        this.show8=false
      }else{
        this.closeall()
        this.show8=true
      }
    },
    showitem9(){
      if(this.show9==true){
        this.show9=false
      }else{
        this.closeall()
        this.show9=true
      }
    },
    showitem10(){
      if(this.show10==true){
        this.show10=false
      }else{
        this.closeall()
        this.show10=true
      }
    },
    showitem11(){
      if(this.show11==true){
        this.show11=false
      }else{
        this.closeall()
        this.show11=true
      }
    },
    showitem12(){
      if(this.show12==true){
        this.show12=false
      }else{
        this.closeall()
        this.show12=true
      }
    },


  },
  filters:{
    nmFormat(n){
      return (Math.floor(n * 10000)/10000).toString();
    },
    supFormat(n){
      return (Math.floor(n * 100000)/100000).toString().substr(-1);
    },
    frontFormat(v, n) {
      if(n ==3 || n==2) { //小数点3位或2位
        return Math.floor(v*Math.pow(10, 2))/Math.pow(10,2)
      }
    },
    backFormat(v, n) { 
      if(n ==3|| n==2) { //小数点两位
        return (Math.floor(v*Math.pow(10, n))/Math.pow(10,n)).toString().substr(-1);
      }
    },
  },
  watch: {
    ask_amount(val) {
      if (this.ask_amount>this.lastask_amount){this.color = true}
      if (this.ask_amount<this.lastask_amount){this.color = false}
    },
    ask_amount2(val) {
      if (this.ask_amount2>this.lastask_amount2){this.color2 = true}
      if (this.ask_amount2<this.lastask_amount2){this.color2 = false}
    },
    ask_amount3(val) {
      if (this.ask_amount3>this.lastask_amount3){this.color3 = true}
      if (this.ask_amount3<this.lastask_amount3){this.color3 = false}
    },
    ask_amount4(val) {
      if (this.ask_amount4>this.lastask_amount4){this.color4 = true}
      if (this.ask_amount4<this.lastask_amount4){this.color4 = false}
    },
    ask_amount5(val) {
      if (this.ask_amount5>this.lastask_amount5){this.color5 = true}
      if (this.ask_amount5<this.lastask_amount5){this.color5 = false}
    },
    ask_amount6(val) {
      if (this.ask_amount6>this.lastask_amount6){this.color6 = true}
      if (this.ask_amount6<this.lastask_amount6){this.color6 = false}
    },
    ask_amount7(val) {
      if (this.ask_amount7>this.lastask_amount7){this.color7 = true}
      if (this.ask_amount7<this.lastask_amount7){this.color7 = false}
    },
    ask_amount8(val) {
      if (this.ask_amount8>this.lastask_amount8){this.color8 = true}
      if (this.ask_amount8<this.lastask_amount8){this.color8 = false}
    },
    ask_amount9(val) {
      if (this.ask_amount9>this.lastask_amount9){this.color9 = true}
      if (this.ask_amount9<this.lastask_amount9){this.color9 = false}
    },
    ask_amount10(val) {
      if (this.ask_amount10>this.lastask_amount10){this.color10 = true}
      if (this.ask_amount10<this.lastask_amount10){this.color10 = false}
    },
    ask_amount11(val) {
      if (this.ask_amount11>this.lastask_amount11){this.color11 = true}
      if (this.ask_amount11<this.lastask_amount11){this.color11 = false}
    },
    ask_amount12(val) {
      if (this.ask_amount12>this.lastask_amount12){this.color12 = true}
      if (this.ask_amount12<this.lastask_amount12){this.color12 = false}
    }
  },
  mounted() {
    // this.socket = new WebSocket(this.path)
    this.init()
    window.addEventListener("online", ()=>{
      console.log("网络连接了");
      this.init()
    });
  },
  beforeDestroy() {
    // clearInterval(this.timer);
    this.socket=null;
    console.log('断开')
  }
}
</script>

<style lang="scss" scoped>
.center-container {
  height: 360px;
  overflow: auto !important;
}
.rotate {
  display: inline-block;
  transform: rotateY(180deg);
}
.header {
  width: 100%;
  color: #ab9a72;
  padding: 0.3rem 0 0.5rem 0;
  border-bottom: 0.0522em solid #b1a076;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  .title {
    cursor: pointer;
    font-size: 20px;
    line-height: 2rem;
    font-weight: bold;
    width: 50%;
    text-align: center;
    &:hover {
      color: #fff;
    }
    &::before {
      display: inline-block;
      content: "▼";
      margin-right: 4px;
      color: #555;
      transform: rotate(-90deg);
    }
    &.active {
      color: #fff;
      &::before {
        content: "▼";
        margin-right: 4px;
        float: none;
        font-size: 20px;
        // font-size: 1.2rem;
        transform: rotate(0deg);
        display: inline-block;
        color: #856526;
        transition: transform 0.2s;
      }
    }
  }
}
/* 滚动条凹槽的颜色，还可以设置边框属性 */
::-webkit-scrollbar-track-piece {
	// background-color:#a7a1a1;
	background-color: transparent;
	-webkit-border-radius: 2em;
	-moz-border-radius: 2em;
	border-radius: 2em;
}
/*滚动条的宽度*/
::-webkit-scrollbar {
	width:6px;
}
/*滚动条的设置*/
::-webkit-scrollbar-thumb {
	// background-color:#313030;
	background-color:transparent;
	background-clip:padding-box;
	-webkit-border-radius: 2em;
	-moz-border-radius: 2em;
	border-radius: 2em;
}
/*滚动条鼠标移上去*/
::-webkit-scrollbar-thumb:hover {
  background-color:#856526;
  cursor: pointer;
}
.spacecenter {
  display: flex;
  justify-content: space-around;
}
.spacecenter .sm {
  width: 12%;
}
.spacecenter span {
  width: 14.2%;
  text-align: center;
}
.spacecenter span:first-child {
  width: 14.2%;
  text-align: left;
}
.Container {
  padding: 4rem 0 3rem 0;
  min-height: 80vh;
}
.yellow-line{
  margin: 1.5rem 0;
  height: .0625rem;
  width: 100%;
  background: #f6b83d;
}
.left-title {
  color: #f6b83d;
  font-size: 1.5rem;
  padding: 0 .625rem;
  /* text-align: center */
}
.left-content {
  color: #f6b83d;
  font-size: 0.85rem;
  margin-bottom: 1.9rem;
  padding: 0 .625rem;
  line-height: 1.6rem
}
.left-content2 {
  color: #f6b83d;
  font-size: 0.85rem;
  padding: 0 .625rem;
}
.left-container {
  padding-right: 0rem;
  display: flex;
  align-items: center;
}

.right-container {
  padding-left: 3rem
}
.black-bg {
  background: #0a0a0a;
  border-radius: 6px;
  /* height: 530px; */
  min-width: 490px;
  max-width: 550px;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  text-align: center;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
  align-items: center;
  overflow: hidden;
}
.right-title {
  color: #ebd0bf;
  background: #1b1a1a;
  width: 100%;
  padding: .325rem 0;
  margin-bottom: .25rem;
  font-size: 1.1rem;
  // text-shadow: 0 0 5px rgb(128, 41, 0), 0 0 10px rgb(128, 30, 0);
}
.right-content {
  color: #ffffff;
  background: #1b1a1a;
  width: 100%;
  padding: .325rem 0;
  margin-bottom: .25rem;
  font-size: 0.85rem;
  cursor: pointer;
  // text-shadow: 0 0 5px rgb(64, 163, 64);
  align-items: center
}
.icon-color {
  color: #676765;
  font-weight: 600;
  font-size: 0.6rem
}
.right-content-red {
  color: red;
  background: #1b1a1a;
  width: 100%;
  padding: .325rem 0;
  margin-bottom: .25rem;
  font-size: 0.85rem;
  cursor: pointer;
  // text-shadow: 0 0 5px green, 0 0 10px green;
}
.right-content-green {
  color: rgb(6, 206, 6);
  background: #1b1a1a;
  width: 100%;
  padding: .325rem 0;
  margin-bottom: .25rem;
  font-size: 0.85rem;
  cursor: pointer;
  // text-shadow: 0 0 5px green, 0 0 10px green;
}
.right-content-yellow {
  color: #dab198;
  /* background: #1b1a1a; */
  background: #4e44449e;
  width: 100%;
  padding: .325rem ;
  padding-right: 0;
  margin-bottom: .25rem;
  font-size: 0.79rem;
  cursor: pointer;
  // text-shadow: 0 0 5px green, 0 0 10px green;
}
.right-bottom {
  width: 100%;
  color: #ab9a72;
  padding: .3rem 0 .5rem 0;
  border-top: 0.0522em solid #b1a076;
  display: flex;
  // justify-content: space-around;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
}
.right-bottom div {
  // width: 14.2%;
  text-align: left;
  font-size: 20px;
}

.image-container {
  padding: 1.5rem 3rem 0.5rem 3rem;
  background: rgba(27, 26, 26, 0.4);
  border-radius: 5px;
  width: 18%;
  margin: 0 1%;
  cursor: pointer;
}
.bottom-img {
  text-align: center;
}
.bottom-title {
  color: #f6b83d;
  font-size: 1rem;
  margin: 1rem 0;
  line-height: 1.6rem;
  text-align: center;
}
.bottom-content {
  color: #f6b83d;
  font-size: 0.85rem;
  margin: 1rem 0;
  line-height: 1.6rem;
  text-align: center;
}

@media screen and (max-width: 600px) {
  .black-bg{
    min-width: 367px;
  }
  .spacecenter span{
    width: 17%;
  }
}
</style>

