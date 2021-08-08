const names= ['abdul', 'Jobbar', 'Khai', 'sudhu', 'kobbar', 'abdul', 'Jobbar', 'Boltu'];


function removeDuplicate(names){
var unique= [];
for(const element of names){
   if(unique.indexOf(element) ==-1){
       unique.push(element);
   }
}
return unique;

}
let uniqueNames= removeDuplicate(names);
console.log(uniqueNames);