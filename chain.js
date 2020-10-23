class Chain {
  constructor(bodyA, bodyB) {
    var options = {
      stiffness: 0.4,
      length: 20,
      bodyA: bodyA,
      bodyB: bodyB
    }
    this.chain = Constraint.create(options);
    World.add(world, this.chain);
  }

  display() {
    var posA = this.chain.bodyA.position;
    var posB = this.chain.bodyB.position;
    push();
    strokeWeight(5);
    stroke(255);
    line(posA.x, posA.y, posB.x, posB.y);
    pop();

  }
}