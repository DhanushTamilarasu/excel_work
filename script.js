var xlsx = require("xlsx");

var wb = xlsx.readFile("list_of_countries_and_dependencies_by_population_density_2743j.xlsx");

var ws = wb.Sheets["Countries by population density" ];

var data = xlsx.utils.sheet_to_json(ws);

// less than 10 values;
var Ten = data.map(( datas)=>{
    if(datas.Areakm<10){
        datas.Ten = "   True  ";
    }
    else{
        datas.Ten="   False  ";
    }
    return(datas);
});
// console.log(Ten);

// between 10 to 50;
var AboveTen = data.map(( datas)=>{
    if(datas.Areakm>10 && datas.Areakm<50 ){
        datas.AboveTen = "   True  ";
    }
    else{
        datas.AboveTen="  False  ";
    }
    return(datas);
});
// console.log(AboveTen);

//  above 100
var Above100 = data.map(( datas)=>{
    if(datas.Areakm<100){
        datas.Above100 = "  True  ";
    }
    else{
        datas.Above100="  False  ";
    }
    return(datas);
});
// console.log(Above100);

var newwb = xlsx.utils.book_new();
var newws = xlsx.utils.json_to_sheet(Ten,AboveTen,Above100);
xlsx.utils.book_append_sheet(newwb,newws,"Updated Data1");

xlsx.writeFile(newwb,"Updated Data1.xlsx");