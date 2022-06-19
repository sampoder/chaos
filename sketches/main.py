G = 6.67e-11
SCALE = 0.001
particles = []

class Particle:
  def __init__(self, x, y, mass):
    self.position = PVector(x, y)
    self.acceleration = PVector(0, 0)
    self.velocity = PVector(0, 0)
    self.mass = mass
    self.radius = sqrt(self.mass / PI) * SCALE
    self.color = color(random(0, 255), random(0, 255), random(0, 255))
  def draw(self):
    noStroke()
    fill(self.color)
    ellipse(self.position.x, self.position.y, self.radius * 2, self.radius * 2)
  def applyForce(self, force):
    self.acceleration.add(PVector.div(force, self.mass))
  def physics(self, particle):
    if self == particle: 
        return
    mass = self.mass * particle.mass
    radius = self.radius + particle.radius
    distance = self.position.dist(particle.position)
    if distance <= radius:
        return
    force = PVector.sub(self.position, particle.position).setMag(G * mass  / (distance ** 2))
    particle.applyForce(force)

  def update(self):
    deltaVelocity = PVector.mult(self.acceleration, 60)
    self.velocity.set(self.velocity.add(deltaVelocity))
    self.position.set(self.position.add(PVector.mult(self.velocity, 60)))
    if self.position.x < 0 or self.position.x > width or self.position.y < 0 or self.position.y > height:
        x = random(0, width)
        y = random(0, height) 
        mass = random(1*pow(10, 8), 4*pow(10, 9))
        self.__init__(x, y, mass)
    self.acceleration.set(0, 0)

def setup():
  size(1000, 600)
  frameRate(60)
  for i in range(10):
    x = random(0, width)
    y = random(0, height)
    mass = random(1*pow(10, 8), 4*pow(10, 9))
    particles.append(Particle(x, y, mass))

def draw():
  background(10, 10, 10)
  for particleA in particles:
    for particleB in particles:
      if particleA != particleB:
        particleA.physics(particleB)
  for particle in particles:
    particle.update()
    particle.draw()
