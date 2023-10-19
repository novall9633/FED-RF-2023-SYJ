// 데이터 유형에 맞게 만들기 ////////////////

let category = ["man","woman","kids"]
let gname = ["반스캐쥬얼","반스어얼리","반스뉴진스","반스스타일"];
let gprice = ['83000','55000','76000','48000','66000']
// rdm[아이템개수]
let rdm = (x)=> Math.floor(Math.random()*x)

let bb = '';
for(let x=1;x<=19;x++){
bb += `
    {
        "idx":"${x}",
        "gname":"${gname[rdm(gname.length)]}",
        "category":"${category[rdm(category.length)]}",
        "gprice":"${gprice[rdm(gprice.length)]}"
    },
`;
}
console.log(bb);
