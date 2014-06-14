define(function(require, exports, module) {

  var Engine = require('famous/core/Engine');  
  var RotatingCube = require('views/RotatingCube');

  var rotatingCube = new RotatingCube();

  var mainContext = Engine.createContext();
  mainContext.setPerspective(1000);
  mainContext.add(rotatingCube);
  

});
