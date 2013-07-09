test("QUnitお試し", function(){
  ok(true, "trueならGreen");
  equal(1, "1", "1=='1'");
  strictEqual(1, 1, "1===1");
});

test("Obj生成", function(){
  strictEqual(twice.n, 2, "生成確認その1");
  strictEqual(typeof twice.times_and_sum, "function", "生成確認その2");
  notStrictEqual(twice, triple, "newで違うオブジェクトが生成されるか");
});

test("Obj機能", function(){
  strictEqual(twice.times_and_sum([1,2,3,4,5]), 30);
  strictEqual(triple.times_and_sum([1,2,3,4,5]), 45);
});

test("json_obj機能", function(){
  notStrictEqual(json_obj.times_and_sum([1,2,3,4,5]), NaN), "初期化しないときの挙動";

  json_obj.n = 2;
  strictEqual(json_obj.times_and_sum([1,2,3,4,5]), 30);
  
  json_obj.n = 3;
  strictEqual(json_obj.times_and_sum([1,2,3,4,5]), 45);
});
