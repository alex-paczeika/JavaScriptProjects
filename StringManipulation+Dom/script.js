

document.body.append(document.createElement('textarea'));
var top = document.body.append(document.createElement('button'));
var afisare = document.getElementById('name');

afisare.textContent = "Array";

top.addEventListener('click', function()
{
    var arraytest =[];
    const text = document.querySelector('textarea').value;
    
    arraytest = text.split("\n");
console.log(arraytest[0][0]);
var newarraytest = [];

for(var i=0;i <arraytest.length;i++)
{
    for(var j=0 ; j< arraytest[i].length ; j++)
    {
        if(arraytest[i][j] === '_')
        {
            newarraytest[i] = arraytest[0][0] + arraytest[i].slice(1,j) + arraytest[i][j+1].toUpperCase() +arraytest[i].slice(j+2); 
        }
    }

}
    
afisare.textContent = newarraytest;

})



