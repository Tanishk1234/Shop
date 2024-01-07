document.getElementById('homeBtn').addEventListener('click', showHome);
document.getElementById('contactBtn').addEventListener('click', showContact);
document.getElementById('catalogBtn').addEventListener('click', showCatalog);
document.getElementById('aboutBtn').addEventListener('click', showAbout);
document.getElementById('contactLinkBtn').addEventListener('click', showContact);

function showHome() {
  document.getElementById('content').innerHTML = '<h2>About Us</h2><p>Explore our exquisite collection of gold jewelry.</p><button id="contactLinkBtn">Contact Us</button>';
  document.getElementById('content').classList.add('animate-fade-in');
}

function showContact() {
  document.getElementById('content').innerHTML = '<h2>Contact Us</h2><p>Reach out to us for any inquiries.</p><address>Your Jewelry Shop<br>123 Main Street<br>City, Country</address>';
  document.getElementById('content').classList.add('animate-fade-in');
}

function showCatalog() {
  document.getElementById('content').innerHTML = '<h2>Our Catalog</h2><p>Discover our stunning gold jewelry collection.</p>';
  document.getElementById('content').classList.add('animate-fade-in');
}

function showAbout() {
  document.getElementById('content').innerHTML = '<h2>About Us</h2><p>Explore our journey in crafting timeless gold jewelry.</p><button id="socialBtn">Social Links</button>';
  document.getElementById('content').classList.add('animate-fade-in');

  document.getElementById('socialBtn').addEventListener('click', showSocial);
}

function showSocial() {
  document.getElementById('content').innerHTML = '<h2>Connect with Us</h2><p>Follow us on social media for updates:</p><ul><li><a href="your-facebook-link">Facebook</a></li><li><a href="your-twitter-link">Twitter</a></li><li><a href="your-instagram-link">Instagram</a></li></ul>';
  document.getElementById('content').classList.add('animate-fade-in');
}
