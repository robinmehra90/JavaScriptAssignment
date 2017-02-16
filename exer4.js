var obj1={
  "name":"Robin Mehra",
  "age":25,
  "Department":"FEEN"
};

var obj2={};

for(var k in obj1)
{
  console.log("in Object1 key is "+ k + " and value is "+ obj1[k]);
}

function copy(ob1,ob2){
  for( var k in ob1)
  {
    ob2[k]=ob1[k]
  }
}

console.log("Copying one object into another");
copy(obj1,obj2)

for(var k in obj2)
{
  console.log(" in Object2 key is "+ k + " and value is "+ obj2[k]);
}
