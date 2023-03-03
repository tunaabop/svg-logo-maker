class Shapes {
    constructor() {
      this.color = 'black';
    }
    render() {
      throw new Error('Child class must implement a render() method.');
    }
    getColor(){
      return this.color;
    }
    setColor(color){
        this.color = color;
    }
}
module.exports = Shapes;
  