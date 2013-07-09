//QUnitを試す＆javascriptのthisに慣れる

function Obj(n_) {
  this.n = n_;

  this.times_and_sum = function (arr){
    var self = this; // http://qiita.com/Haru39/items/9935ce476a17d6258e27
    var times   = arr.map(function(x){return x * self.n;});
    var sum   = times.reduce(function(acc, x){return acc+x;});
    return sum;
  }
  return this;
}

var twice  = new Obj(2);
var triple = new Obj(3);

//コンストラクタを介さないパターン
var json_obj = {
  n: null,
  times_and_sum : function(arr){
    var self = this;
    return arr.map(function(x){return x * self.n;}).reduce(function(acc, x){return acc+x;});
  }
};