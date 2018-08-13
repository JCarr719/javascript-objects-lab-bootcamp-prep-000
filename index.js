var recipes={
  BBRibs: 'babies'
}

function updateObjectWithKeyAndValue(object,key,value){
var newObj = Object.assign({},object)
newObj[key]=value
return newObj
}
function destructivelyUdateObjectWithKeyAndValue(object,key,value){
  object.key='value'
}