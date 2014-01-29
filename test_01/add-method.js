function addMethod(object, name, fn) {
  var old = object[name];                        //#1
  object[name] = function(){
      
      
     for(var i = 0; i < arguments.length; i++) {
        console.log(" " + arguments[i]);
    }
    
    
    if (fn.length == arguments.length)           //#2
      return fn.apply(this, arguments)           //#2
    else if (typeof old == 'function')           //#3
      return old.apply(this, arguments);         //#3
  };
}
