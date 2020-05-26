<template v-if="false">
  <!-- 单表备份 -->
  <div class="container relative clearfix" id="container2">

    <div class="info absolute">
      <div @mouseenter="changeSelectTurn(true)" @touchstart="changeSelectTurn(true)"
        @mouseleave="changeSelectTurn(false)" class="myCursor">
        <div>{{text}}</div>
        <ul class="lists" v-show="selectTurn" @mouseleave="delHoverActive">
          <li v-for="(val, key, i) in infoLists" :key="i" @click="setActive(i, key)" @mouseenter="setHoverActive(i)"
            :class="{ active: active === i, hoverActive: hoverActive === i }">
            {{ key }}
          </li>
        </ul>
      </div>
      <div class="pad header">
        <div class="headerTop flex">
          <div class="flex">
            <img :src="setSrc2(currentSymbol, 'str')" alt="" class="hb1" />
            <span>{{ currentSymbol.slice(0, 3) }}</span>
          </div>
          <div class="flex">
            <span>{{ currentSymbol.slice(4, 7) }}</span>
            <img :src="setSrc2(currentSymbol)" alt="" class="hb1" />
          </div>
        
        </div>

      </div>
      <div class="center relative">
        <div class="centerTop flex pad2">
          <div class="flex">

            <span class="ct1 mySpan">{{
              this.infoLists[currentSymbol][0].bid_amount
            }}</span>

            <img :src="bidImgSrc" alt="" />
          </div>
          <div class="flex">

            <img :src="askImgSrc" alt="" class="ct1" />

            <span class="mySpan">{{
              this.infoLists[currentSymbol][0].ask_amount
            }}</span>
          </div>
        </div>
        <div class="centerBottom flex pad3">
          <div class="flex">
            <span>{{ this.infoLists[currentSymbol][0].bid.slice(0, 4) }}</span>
            <span class="fs30">&nbsp;{{
                this.infoLists[currentSymbol][0].bid.slice(4, 6)
              }}</span><span>{{ this.infoLists[currentSymbol][0].bid.slice(6, 7) }}</span>
          </div>
          <div class="flex">
            <span>{{ this.infoLists[currentSymbol][0].ask.slice(0, 4) }}</span><span class="fs30">&nbsp;{{
                this.infoLists[currentSymbol][0].ask.slice(4, 6)
              }}</span><span>{{ this.infoLists[currentSymbol][0].ask.slice(6, 7) }}</span>
          </div>
        </div>
        <div class="absolute2">
          {{ setAbsolute }}
        </div>
      </div>
      <div class="bottom flex">
        <div class="bottomLeft">
          <div class="fs18 pad1 flex bck1">
            <span>Qty</span>
            <span>Bid</span>
          </div>
          <div class="pad2 flex bck26">
            <span class="pad4">{{
              this.infoLists[currentSymbol][0].bid_amount
            }}</span>
            <span class="pad4">{{ this.BidOrQty2("bid", 0) }}</span>
          </div>
          <div class="pad2 flex bck33">
            <span class="pad4">{{
              this.infoLists[currentSymbol][1].bid_amount
            }}</span>
            <span class="pad4">{{ this.BidOrQty2("bid", 1) }}</span>
          </div>
          <div class="pad2 flex bck26">
            <span class="pad4">{{
              this.infoLists[currentSymbol][2].bid_amount
            }}</span>
            <span class="pad4">{{ this.BidOrQty2("bid", 2) }}</span>
          </div>
        </div>
        <div class="bottomRight">
          <div class="fs18 pad1 flex bck1">
            <span class="marRight71">Offer</span>
            <span>Qty</span>
          </div>
          <div class="pad2 flex bck26">
            <!-- <span class="pad4">{{ this.infoLists[this.currentSymbol][0].ask.slice(4,7) }}</span> -->
            <span class="pad4">{{ this.BidOrQty2("ask", 0) }}</span>
            <span class="pad4">{{
              this.infoLists[currentSymbol][0].ask_amount
            }}</span>
          </div>
          <div class="pad2 flex bck33">
            <span class="pad4">{{ this.BidOrQty2("ask", 1) }}</span>
            <span class="pad4">{{
              this.infoLists[currentSymbol][1].ask_amount
            }}</span>
          </div>
          <div class="pad2 flex bck26">
            <span class="pad4">{{ this.BidOrQty2("ask", 2) }}</span>
            <span class="pad4">{{
              this.infoLists[currentSymbol][2].ask_amount
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const upSrc = require("jiaoyi/up.png");
    const downSrc = require("jiaoyi/down.png");
    return {
      path: "ws://cuprice.baileyhenrycapital.com/ws",
      // path: "ws://intprice.baileyhenrycapital.com/ws",
      socket: "",
      infoLists: {
        "EUR/USD": [
          {
            ask: "0.000",
            ask_amount: "0.000",
            bid: "0.000",
            bid_amount: "0.000"
          },
          {
            ask: "0.000",
            ask_amount: "0.000",
            bid: "0.000",
            bid_amount: "0.000"
          },
          {
            ask: "0.000",
            ask_amount: "0.000",
            bid: "0.000",
            bid_amount: "0.000"
          }
        ],
        "GBP/USD": [{}, {}, {}],
        "USD/JPY": [{}, {}, {}],
        "AUD/USD": [{}, {}, {}],
        "NZD/USD": [{}, {}, {}],
        "USD/CAD": [
          {
            ask: "0.000",
            ask_amount: "0.000",
            bid: "0.000",
            bid_amount: "0.000"
          },
          {
            ask: "0.000",
            ask_amount: "0.000",
            bid: "0.000",
            bid_amount: "0.000"
          },
          {
            ask: "0.000",
            ask_amount: "0.000",
            bid: "0.000",
            bid_amount: "0.000"
          }
        ],
        "USD/CHF": [{}, {}, {}],
        "XAU/USD": [{}, {}, {}],
        "GBP/JPY": [{}, {}, {}],
        "EUR/GBP": [{}, {}, {}]
      },
      selectTurn: false,
      // currentSymbol: "USD/CAD",
      currentSymbol: "EUR/USD",
      // active: 5, //默认选中的货币对
      active: 0, //默认选中的货币对
      // hoverActive: 5, //鼠标移动时,选中的货币对
      hoverActive: 0, //鼠标移动时,选中的货币对
      arr: [
        "EUR",
        "GBP",
        "USD",
        "AUD",
        "NZD",
        "USD",
        "USD",
        "XAU",
        "GBP",
        "EUR"
      ], //左边的国旗
      arr2: [
        "USD",
        "USD",
        "JPY",
        "USD",
        "USD",
        "CAD",
        "CHF",
        "USD",
        "JPY",
        "GBP"
      ], //右边的国旗
      obj: {},
      obj2: {},
      bidImgSrc: "",
      askImgSrc: "",
      lastBid: "", //上一次的bid数据，用来判断三角是向上还是向下。
      lastAsk: "", //上一次的ask数据，用来判断三角是向上还是向下。
      n: 0,
      lastN: "",
      //储存上一次的后台数据,当星期天没有值得时候使用
      lastData1: "",
      lastData2: "",
      lastData3: "",
      lastData4: "",
      lastData5: "",
      lastData6: "",
      lastData7: "",
      lastData8: "",
      lastData9: "",
      lastData10: "",
      text: "EUR/USD",
      flag:false
    };
  },
  created() {
    let _this = this;
    setData();
    setData2();
    function setData(obj) {
      _this.arr.forEach(function(val, i) {
        let img = "img" + i;
        _this.obj[img] = require("jiaoyi/" + val + ".png");
      });
    }
    function setData2() {
      _this.arr2.forEach(function(val, i) {
        let img = "img" + i;
        _this.obj2[img] = require("jiaoyi/" + val + ".png");
      });
    }
  },
  methods: {
    //初始化
    init() {
      if (typeof WebSocket === "undefined") {
        alert("您的浏览器不支持webSocket");
      } else {
        this.socket = new WebSocket(this.path);
        this.socket.onopen = this.open;
        this.socket.onerror = this.error;
        this.socket.onmessage = this.getMessage;
      }
    },
    open() {
      console.log("连接成功");
    },
    error() {
      console.log("连接失败");
    },
    changeFlag(){
      this.flag=true
    },
    getMessage(msg) {
      // console.log(msg)
      var data = JSON.parse(msg.data); //后台数据
      
      var key = Object.keys(data)[0]; //当前货币对
      if(this.flag){
        data=[]
      }
      if (data.length == 0) {
       
        // console.log(123123213213)
        
        switch (this.currentSymbol) {
          case "EUR/USD":
            data = this.lastData1;
            key = Object.keys(data)[0]
            break;
          case "GBP/USD":
            data = this.lastData2;
            key = Object.keys(data)[0]
            break;
          case "USD/JPY":
            data = this.lastData3;
            key = Object.keys(data)[0]
            break;
          case "AUD/USD":
            data = this.lastData4;
            key = Object.keys(data)[0]
            break;
          case "NZD/USD":
            data = this.lastData5;
            key = Object.keys(data)[0]
            break;
          case "USD/CAD":
            data = this.lastData6;
            key = Object.keys(data)[0]
            break;
          case "USD/CHF":
            data = this.lastData7;
            key = Object.keys(data)[0]
            break;
          case "XAU/USD":
            data = this.lastData8;
            key = Object.keys(data)[0]
            break;
          case "GBP/JPY":
            data = this.lastData9;
            key = Object.keys(data)[0]
            break;
          case "EUR/GBP":
            data = this.lastData10;
            key = Object.keys(data)[0]
            break;
        }
        // return
      }
      switch (key) {
        case "EUR/USD":
          this.lastData1 = data;
          break;
        case "GBP/USD":
          this.lastData2 = data;
          break;
        case "USD/JPY":
          this.lastData3 = data;
          break;
        case "AUD/USD":
          this.lastData4 = data;
          break;
        case "NZD/USD":
          this.lastData5 = data;
          break;
        case "USD/CAD":
          this.lastData6 = data;
          break;
        case "USD/CHF":
          this.lastData7 = data;
          break;
        case "XAU/USD":
          this.lastData8 = data;
          break;
        case "GBP/JPY":
          this.lastData9 = data;
          break;
        case "EUR/GBP":
          this.lastData10 = data;
          break;
      }

      // this.lastData = data;
      // console.log(456)
      // console.log(this.lastData);

      var _this = this;
      // console.log(data)

      return (function(msg, currentSymbol) {
        Object.keys(_this.infoLists)
          .filter(function(val) {
            return val == key;
            // return val==_this.currentSymbol
            //当返回值是这个的时候，为什么会闪
          }) //["XAU/USD"]得到一个长度为1的数组
          .map(function(val) {
            var val2 = data[key];
            _this.infoLists[val].map(function(valSon, i) {
              valSon.ask = val2[i].ask.toString().padEnd(7, 0);
              valSon.bid = val2[i].bid.toString().padEnd(7, 0);
              valSon.ask_amount =
                key == "XAU/USD"
                  ? val2[i].ask_amount / 1000 + "k"
                  : val2[i].ask_amount / 1000000 + "M";
              valSon.bid_amount =
                key == "XAU/USD"
                  ? val2[i].bid_amount / 1000 + "k"
                  : val2[i].bid_amount / 1000000 + "M";
              if (i == 0) {
                // _this.n++
                // console.log(_this.n)
                // console.log(valSon)

                if (key == currentSymbol) {
                  _this.n++;
                  // console.log(_this.n)
                  // console.log(JSON.parse(JSON.stringify(valSon)))
                  if (valSon.bid > _this.lastBid) {
                    _this.bidImgSrc = require("jiaoyi/up.png");
                  } else if (valSon.bid < _this.lastBid) {
                    _this.bidImgSrc = require("jiaoyi/down.png");
                  } else {
                    _this.bidImgSrc = _this.bidImgSrc;
                  }
                  if (valSon.ask > _this.lastAsk) {
                    _this.askImgSrc = require("jiaoyi/up.png");
                  } else if (valSon.ask < _this.lastAsk) {
                    _this.askImgSrc = require("jiaoyi/down.png");
                  } else {
                    _this.askImgSrc = _this.askImgSrc;
                  }
                  _this.lastBid = valSon.bid;
                  _this.lastAsk = valSon.ask;
                }
              }
            });
          });
      })(msg, this.currentSymbol);
    },

    changeSelectTurn(item) {
      if (item == true) {
        this.selectTurn = true;
      } else {
        this.selectTurn = false;
      }
    },
    setActive(i, key) {
      this.active = i;
      this.currentSymbol = key;
      this.text = key
      // $t('baojia2.请选择货币') = key
      console.log('key',key);
      
      this.selectTurn = false;
    },
    setHoverActive(i) {
      this.hoverActive = i;
    },
    delHoverActive() {
      this.hoverActive = "";
    },
    // 下拉框国旗的显示
    setSrc(i, val) {
      if (val) {
        let img = "img" + i;
        return this.obj[img];
      } else {
        let img = "img" + i;
        return this.obj2[img];
      }
    },
    //头部国旗的显示
    setSrc2(key, val) {
      var index;
      Object.keys(this.infoLists).forEach(function(val, i) {
        if (val == key) index = i;
      });
      if (val) {
        let img = "img" + index;
        return this.obj[img];
      } else {
        let img = "img" + index;
        return this.obj2[img];
      }
    },
    upDownImg(key, symbol) {
      if (key == symbol) {
        // console.log(key);
        if (valSon.bid > _this.lastBid) {
          // _this.bidImgSrc = require("jiaoyi/up.png");
          _this.bidImgSrc = upSrc;
          // console.log('上',_this.n)
        } else if (valSon.bid < _this.lastBid) {
          // _this.bidImgSrc = require("jiaoyi/down.png");
          _this.bidImgSrc = downSrc;
          // console.log('下',_this.n)
        } else {
          _this.bidImgSrc = _this.bidImgSrc;
          // console.log('不变',_this.n)
        }
        if (valSon.ask > _this.lastAsk) {
          _this.bidImgSrc = upSrc;
          // _this.askImgSrc = require("jiaoyi/up.png");
          // console.log('上',_this.n)
        } else if (valSon.ask < _this.lastAsk) {
          _this.bidImgSrc = downSrc;
          // _this.askImgSrc = require("jiaoyi/down.png");
          // console.log('下',_this.n)
        } else {
          _this.askImgSrc = _this.askImgSrc;
          // console.log('不变',_this.n)
        }
        _this.lastBid = valSon.bid;
        _this.lastAsk = valSon.ask;
      }
    },
  },
  computed: {
    //计算货币对点差
    setAbsolute() {
      var str = "";
      if (this.currentSymbol == "XAU/USD") {
        str =
          (this.infoLists[this.currentSymbol][0].ask.slice(5, 7) -
            this.infoLists[this.currentSymbol][0].bid.slice(5, 7)) /
          10;
        if (str < 0) {
          str = (str + 10).toFixed(1);
        }
      } else {
        str =
          (this.infoLists[this.currentSymbol][0].ask.slice(4, 7) -
            this.infoLists[this.currentSymbol][0].bid.slice(4, 7)) /
          10;
      }
      return str;
    },
    //设置Bid和Qty
    // 只有return一个函数，才可以传参数
    BidOrQty2() {
      return function(key, i) {
        return this.currentSymbol == "XAU/USD"
          ? this.infoLists[this.currentSymbol][i][key].slice(5, 7)
          : this.infoLists[this.currentSymbol][i][key].slice(4, 7);
      };
    }
  },
  filters: {
    myFilter(msg) {
      return msg;
    }
  },
  mounted() {
    this.init();
    window.addEventListener("online", ()=>{
      console.log("网络连接了");
      this.init()
    });
    // this.$store.state.language='en'
    // this.$store.state.locale='en'
  },
  beforeDestroy() {
    // clearInterval(this.timer);
    this.socket=null;
    console.log('断开')
  }
};
</script>
<style scoped lang="sass">

.clearfix::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  zoom: 1;
}
.container {
  font-family: "Microsoft YaHei";
  font-weight: 400;
  font-size: 14px;
  color: #fff;
  .lists {
    width: 156px;
    position: absolute;
    z-index: 5;
    left: 160px;
    top: 32px;
    margin-left: -160px;
    background: #bdcff9;
    li {
      width: 100%;
      height: 32px;
      color: #515151;
      line-height: 24px;
      text-align: center;
      vertical-align: middle;
      box-sizing: border-box;
      // margin: 0 auto;
      line-height: 32px;
      display: flex;
      justify-content: center;
      // align-items: center;
      border-bottom: 1px solid #515151;
      .myImg {
        width: 36px;
      }
    }
    li:hover {
      cursor: pointer;
    }
    .active,
    .hoverActive {
      color: #fff;
      background: #5393ff;
      box-shadow: 2px 2px 5px #f6f6f6;
    }
  }
  .info {
    width: 490px;
    background: #EBF2FF;
    color: #4C89ED;
    font-size: 19px;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .pad {
      padding: 0 50px;
    }
    .pad1 {
      padding: 13px 60px;
    }
    .pad2 {
      padding: 14px 29px;
    }
    .pad3 {
      padding: 0 49px;
    }
    .pad4 {
      // padding: 0 14px;
      display: inline-block;
      width: 93px;
      text-align: center;
    }
    .relative {
      position: relative;
    }
    .absolute {
      position: absolute;
    }
    .fs30 {
      font-size: 30px;
      margin-right: 5px;
    }
    .fs18 {
      font-size: 18px;
    }
    // .marRight71 {
    //   margin-right: 71px;
    // }
    .bck1 {
      background: #DAE3F8;
    }
    .bck26 {
      background:#EBF2FF;
    }
    .bck33 {
      background: #E5EAF6;
    }
    .header {
      .headerTop {
        height: 56px;
        font-size: 20px;
        border-bottom: 2px solid #4C89ED;
        div {
          img {
            width: 43px;
            height: 29px;
            margin-left: 20px;
          }
          img:nth-child(1) {
            margin-left: 0;
            margin-right: 20px;
          }
        }
        .down {
          width: 24px;
          position: absolute;
          left: 50%;
          margin-left: -11px;
          top: 55px;
          z-index: 3;
        }
      }
      .headerTop::after {
        border-top-color: #1f1f1f;
        top: 52px;
      }
      .headerBottom {
        height: 60px;
        font-size: 23px;
        justify-content: space-around;
      }
    }
    .center {
      background: #EBF2FF;
      .centerTop {
        height: 50px;
        width: 90%;
        margin: 0 auto;
        .ct1 {
          margin-right: 60px;
        }
        .mySpan {
          width: 50px;
        }
      }
      .centerBottom {
        height: 50px;
        .cb1 {
          margin-right: 16px;
        }
      }
      .absolute2 {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -11px;
        margin-top: -12px;
      }
    }
  }
}
.myCursor {
  cursor: pointer;
  line-height: 38px;
  color: #fff;
  background-color: #4C89ED;
  padding-left: 10px;
}
// .active::after {
//       content: "";
//       width: 13px;
//       height: 18px;
//       background: url("../../assets/image/jiaoyi/xuanzhong-icon.png");
//       float: right;
//     }
// 手机端
// .myCursor{
//   cursor: pointer;
// }
@media screen and(max-width: 600px) {
  #container2 {
    font-size: 12px;
    height: 362px;
    .lists {
      background-color: "#000";
      li {
        width: 100%;
        height: 32px;
        line-height: 32px;
      }
    }
    .info {
      left: 32px;
      width: 344px;
    }
    .headerTop {
      font-size: 14px;
    }
    .pad {
      padding: 0;
    }
    .fs30 {
      margin-right: 0;
    }
    .marRight71 {
      margin-right: 5px;
    }
    .absolute {
      // margin-left: -15px;
      left: 50%;
      margin-left: -172px;
    }
    .pad1 {
      padding: 13px 33px;
    }
    .pad2 {
      padding: 9px 9px;
    }
    .centerBottom {
      height: 52px;
    }
    //   .active::after{
    //   display: inline-block!important;
    //   vertical-align: middle!important;
    // }
    // .active::after {
    //   content: "";
    //   width: 13px;
    //   height: 18px;
    //   background: url("../../assets/image/jiaoyi/xuanzhong-icon.png");
    //   // margin-top: 8px;
    //   float: right;
    // }
  }
  .pad4 {
    width: 76px !important;
  }
}
</style>
