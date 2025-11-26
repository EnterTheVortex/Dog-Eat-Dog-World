<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta & SEO -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dog Eat Dog World | Home</title>
  <meta name="description" content="Dog Eat Dog World is your one-stop guide to dog breeds, nutrition, and responsible ownership.">

  <!-- Styles -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Header & Navigation -->
  <header>
  <h1>Dog Eat Dog World</h1>
  <nav>
    <div class="hamburger" onclick="toggleMenu()">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul>
      <li><a href="index.html" class="active">Home</a></li>
      <li><a href="breeds.html">Dog Breeds</a></li>
      <li><a href="nutrition.html">Nutrition</a></li>
      <li><a href="dosdonts.html">Dos & Don’ts</a></li>
      <li><a href="cant-eat.html">What They Can’t Eat</a></li>
    </ul>
  </nav>
</header>

  <!-- Hero Section -->
  <main>
    <section class="hero fullpage">
      <div class="hero-content">
        <h2>Welcome to Dog Eat Dog World</h2>
        <p>
          Dogs are more than pets — they’re loyal companions, family members, and lifelong friends. 
          At Dog Eat Dog World, we believe every breed has a story worth telling, and every owner deserves 
          the knowledge to give their dog the happiest, healthiest life possible.
        </p>
        <p>
          Whether you’re curious about the unique traits of different breeds, searching for the best 
          nutrition advice, or learning the dos and don’ts of responsible ownership, this site is your 
          trusted guide. We cover everything from playful Pomeranians to gentle giants like Great Danes, 
          offering insights into their personalities, care needs, and histories.
        </p>
        <p>
          Explore our comprehensive breed library, discover safe and healthy diets, and learn how to 
          avoid common mistakes that can affect your dog’s wellbeing. With practical tips, expert-backed 
          information, and easy-to-follow guides, Dog Eat Dog World is here to help you build a stronger 
          bond with your furry friend.
        </p>
        <a href="breeds.html" class="btn hero-btn">🐾 Explore Breeds</a>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer>
    <p>&copy; 2025 Dog Eat Dog World | All Rights Reserved</p>
  </footer>

  <!-- Scripts -->
  <!-- Load breed data first, then main script -->
  <script src="breeds-data.js"></script>
  <script src="script.js"></script>
</body>
</html>
