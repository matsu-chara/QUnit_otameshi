//functional_js.jsのテスト
module("Qunitお試し");
test("QUnitお試し", function(){
  ok(true, "trueならGreen");
  equal(1, "1", "1=='1'");
  strictEqual(1, 1, "1===1");
});


module("Thisの動作確認");
test("Obj生成", function(){
  strictEqual(twice.n, 2, "生成確認その1");
  strictEqual(typeof twice.times_and_sum, "function", "生成確認その2");
  notStrictEqual(twice, triple, "newで違うオブジェクトが生成されるか");
});

test("Obj機能", function(){
  strictEqual(twice.times_and_sum([1,2,3,4,5]), 30, "twice動作");
  strictEqual(triple.times_and_sum([1,2,3,4,5]), 45, "triple動作");
});

test("json_obj機能", function(){
  notStrictEqual(json_obj.times_and_sum([1,2,3,4,5]), NaN), "初期化しないときの挙動";

  json_obj.n = 2;
  strictEqual(json_obj.times_and_sum([1,2,3,4,5]), 30, "twice動作");
  
  json_obj.n = 3;
  strictEqual(json_obj.times_and_sum([1,2,3,4,5]), 45, "triple動作");
});


//functional_js2.jsのテスト
module("Itemのテスト", {
  setup: function(){
    items = [
    　　{
    　　　　"code": "pink_shirt",
    　　　　"name": "ピンク色のシャツ",
    　　　　"description": "「ハネムーン」の文字と共に、ハートをあしらいました。",
    　　　　"price": 2000,
    　　　　"category": "tops"
    　　},
    　　{
    　　　　"code": "green_keyholder",
    　　　　"name": "エメラルドグリーンのキーホルダー",
    　　　　"description": "ひらがなの「ぶ」をかたどり、上品な色に仕上げました。",
    　　　　"price": 1500,
    　　　　"category": "accessory"
    　　},
    　　{
    　　　　"code": "red_keyholder",
    　　　　"name": "レッドのキーホルダー",
    　　　　"description": "ひらがなの「ば」をかたどり、上品な色に仕上げました。",
    　　　　"price": 15000,
    　　　　"category": "accessory"
    　　}
    ];
  }
});

test("isAccessory", function(){
  tops_item      = items[0];
  accessory_item = items[1];
  equal(isAccessory(tops_item),      false, "not Accessory");
  equal(isAccessory(accessory_item), true,  "Accessory");
});

test("AccessoryCount", function(){
  equal(items.filter(isAccessory).length, 2, "Accessoryカウンタの動作")
});

test("isKeyholder", function(){
  tops_item      = items[0];
  accessory_item = items[1];
  equal(isKeyholder(tops_item),      false, "not Keyholder");
  equal(isKeyholder(accessory_item), true,  "Keyholder");
});

test("getName", function(){
  accessory_item = items[1];
  equal(getName(accessory_item), "エメラルドグリーンのキーホルダー", "getName");
});

test("getKeyholderNameList", function(){
  equal(items.filter(isKeyholder).map(getName).join("\n"), "エメラルドグリーンのキーホルダー\nレッドのキーホルダー");
});