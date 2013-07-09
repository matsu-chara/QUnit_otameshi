//アクセサリの合計数とcodeにキーホルダーが含まれているアイテムの名前一覧を取得したい
//http://ameblo.jp/ca-1pixel/entry-11144884109.htmlより
var items =[
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

// 手続き型テストしにくい
// var accessoriesCount = 0;
// var itemsCount = items.length;

// for(var i=0; i<itemsCount; i++){
//   var item = items[i];
//   if (item.category == 'accessory'){
//     accessoriesCount++;
//   }

//   if (item.code.indexOf('keyholder')!=-1){
//     console.log(item.name + "\n");
//   }
// }
// console.log(accessoriesCount);

function isAccessory(item){
  return item.category == "accessory";
}
// console.log(items.filter(isAccessory).length);

function isKeyholder(item){
  return item.code.indexOf('keyholder') != -1;
}
function getName(item){
  return item.name;
}
console.log(items.filter(isKeyholder).map(getName).join('\n'));
