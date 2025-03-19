
class Parent {
    greet() {
      console.log("Hello from Parent!");
    }
  }
  
  class Child extends Parent {
    greet() {
      console.log("Hello from Child!");
    }
  }
  
  const obj = new Child();
  obj.greet();
  
