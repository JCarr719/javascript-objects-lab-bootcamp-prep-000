var recipes={
  BBRibs: 'babies'
}

function updateObjectWithKeyAndValue(object,key,value){
var newObj = Object.assign({},object)
return newObj[key]=value
}