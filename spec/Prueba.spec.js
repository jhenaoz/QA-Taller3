var {Calculadora} = require('../src/Calculadora');

describe('some test', function() {
  
  it('some test', function() {
    // Arrange
    var calc = new Calculadora();

    // Act
    var result = calc.add(5,5);

    //Assert
    expect(result).toBe(10);
  });

  it('some test', function() {
    var calc = new Calculadora();
    var result = calc.add(5,10);
    expect(result).toBe(15);
  });  
})