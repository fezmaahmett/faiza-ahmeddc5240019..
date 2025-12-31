// ================= STYLE =================
const style = document.createElement("style");
style.innerHTML = `
body {
  margin: 0;
  font-family: "Segoe UI", Arial, sans-serif;
  background: linear-gradient(135deg, #9cb0f2d8, #9eb2d9ff);
}

/* MAIN LAYOUT */
.app {
  display: flex;
  min-height: 100vh;
}

/* SIDEBAR */
.menu {
  width: 280px;
  background: linear-gradient(180deg, #0d121dff, #131f31ff);
  color: white;
  padding: 25px 15px;
  box-shadow: 4px 0 15px rgba(223, 65, 65, 0.15);
}

.menu h2 {
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.menu button {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: none;
  border-radius: 8px;
  background: #030d20ff;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.menu button:hover {
  background: #60a5fa;
  color: #0f172a;
  transform: translateX(4px);
}

/* CONTENT */
.content {
  flex: 1;
  padding: 30px;
}

/* CARDS */
.card {
  background: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(106, 192, 235, 0.08);
}

/* EXAMPLES */
.example {
  background: #d2d5ddff;
  padding: 12px;
  margin: 8px 0;
  border-left: 4px solid #6495f0ff;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.example:hover {
  background: #307ad9ff;
  transform: scale(1.01);
}

/* OUTPUT */
.output {
  background: #38ec77ff;
  color: #10251fff;
  padding: 8px;
  margin-top: 6px;
  border-radius: 10px;
  font-size: 14px;
}

/* PROFILE IMAGE */
img.profile {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  object-position: 50% 20%;
  display: block;
  margin: 0 auto 15px;
  border: 4px solid #2563eb;
}

/* LINKS */
a {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
}

a:hover {
  text-decoration: underline;
}
`;
document.head.appendChild(style);

// ================= LAYOUT =================
document.getElementById("app").innerHTML = `
<div class="app">
  <div class="menu">
    <h2>JS Project</h2>
    <button onclick="home()">Home</button>
    <button onclick="chapters()">Chapters</button>
    <button onclick="about()">About</button>
  </div>
  <div class="content" id="content"></div>
</div>
`;

const content = document.getElementById("content");

// ================= HOME =================
function home() {
  content.innerHTML = `
  <h2>Home</h2>
  <div class="card">
    <p>This project contains real working JavaScript examples:</p>
    <ul>
      <li>Chapter 7 – Objects (15 examples)</li>
      <li>Chapter 8 – DOM (5 examples)</li>
      <li>Chapter 9 – Events (9 examples)</li>
    </ul>
  </div>

  <div class="card">
    <h3>Reference Websites:</h3>
    <ul>
      <li><a href="https://www.w3schools.com/js/" target="_blank">W3Schools JavaScript Tutorial</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">MDN Web Docs - JavaScript</a></li>
    </ul>
  </div>
  `;
}

// ================= CHAPTERS =================
function chapters() {
  content.innerHTML = `
  <h2>Chapters</h2>

  <div class="card">
    <h3>Chapter 7 – Objects (Examples 0f ch 7)</h3>
    <div class="example" onclick="show(this, user.name)">1. Get property</div>
    <div class="example" onclick="show(this, user.age)">2. Get age</div>
    <div class="example" onclick="show(this, user.city)">3. Add property</div>
    <div class="example" onclick="show(this, Object.keys(user))">4. Object.keys()</div>
    <div class="example" onclick="show(this, Object.values(user))">5. Object.values()</div>
    <div class="example" onclick="show(this, JSON.stringify(user))">6. JSON.stringify()</div>
    <div class="example" onclick="show(this, JSON.parse('{\"a\":1}').a)">7. JSON.parse()</div>
    <div class="example" onclick="show(this, car.start())">8. Object method</div>
    <div class="example" onclick="show(this, person.name)">9. Constructor</div>
    <div class="example" onclick="show(this, student.name)">10. Class</div>
    <div class="example" onclick="show(this, 'name' in user)">11. in operator</div>
    <div class="example" onclick="show(this, user.hasOwnProperty('name'))">12. hasOwnProperty</div>
    <div class="example" onclick="show(this, Object.entries(user))">13. Object.entries</div>
    <div class="example" onclick="show(this, delete user.age)">14. delete property</div>
    <div class="example" onclick="show(this, user)">15. Final object</div>
  </div>




  
  <div class="card">
    <h3>Chapter 8 – DOM (Examples of ch 8)</h3>
    <div class="example" onclick="show(this, document.body.tagName)">1. document.body</div>
    <div class="example" onclick="show(this, document.getElementById('content') !== null)">2. getElementById</div>
    <div class="example" onclick="show(this, document.createElement('div').tagName)">3. createElement</div>
    <div class="example" onclick="this.style.color='red'; show(this,'Color changed')">4. style change</div>
    <div class="example" onclick="show(this, document.querySelectorAll('div').length)">5. querySelectorAll</div>
  </div>

  <div class="card">
    <h3>Chapter 9 – Events (Examples of ch 9)</h3>
    <div class="example" onclick="show(this,'Clicked')">1. Click</div>
    <div class="example" ondblclick="show(this,'Double Click')">2. Double Click</div>
    <div class="example" onmouseover="show(this,'Mouse Over')">3. Mouse Over</div>
    <div class="example" onmouseout="show(this,'Mouse Out')">4. Mouse Out</div>
    <div class="example" onmousedown="show(this,'Mouse Down')">5. Mouse Down</div>
    <div class="example" onmouseup="show(this,'Mouse Up')">6. Mouse Up</div>
    <div class="example" onfocus="show(this,'Focused')" tabindex="0">7. Focus</div>
    <div class="example" onblur="show(this,'Blur')" tabindex="0">8. Blur</div>
    <div class="example" onclick="show(this, window.innerWidth)">9. Window Size</div>
  </div>
  `;
}






// ================= ABOUT =================
function about() {
  content.innerHTML = `
  <h2>About Me</h2>





  <img src="h.jpg" alt="My Photo" class="profile">

  <p><b>Name:</b> faiza ahmed salad</p>
  <p><b>ID:</b> C5240010</p>
  <p><b>Class:</b> CM241</p>
  <p><b>Who Am I:</b> Photographer, Editor, Multimedia Specialist</p>
  `;
}

// ================= DATA =================
const user = { name: "Ali", age: 20 };
user.city = "Mogadishu";

const car = { start() { return "Car Started"; } };

function Person(name) { this.name = name; }
const person = new Person("faiza");

class Student { constructor(name) { this.name = name; } }
const student = new Student("caisha");

// ================= OUTPUT =================
function show(el, result) {
  const out = document.createElement("div");
  out.className = "output";
  out.innerText = "Output: " + result;
  el.appendChild(out);
}



// Load home initially
home();