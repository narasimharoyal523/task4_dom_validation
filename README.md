# 🧠 Task 4: Complex Form Validation and Dynamic DOM Manipulation

**Level:** Intermediate  
**Objective:**  
- Add **advanced form validation** (e.g., password strength)  
- Use **JavaScript DOM manipulation** to dynamically update the UI  
- Simulate **client-side routing** (SPA-like behavior)

---

## 🛠 Technologies Used

- HTML + CSS
- Bootstrap 5
- JavaScript (DOM & Form Handling)
- Node.js + Express
- EJS (Embedded JavaScript templates)

---

## 📁 Project Structure

task4_dom_validation/ ├── views/ │ └── index.ejs ├── public/ │ └── script.js ├── server.js ├── package.json

---

## 🎯 Features

- Real-time **password strength meter**
- **Client-side validation** for Name, Email, and Password
- **No page reload**: SPA-like behavior using JavaScript to toggle views
- Dynamic UI updates:
  - Hide form after submit
  - Show confirmation
  - Back button to return

---

## ⚙️ How to Run

1. Navigate to the folder:
   ```bash
   cd task4_dom_validation
2. Install required packages:
   ```bash
   npm install
3. Start the server:\
   ```bash
   node server.js
4. Visit in browser:
   ```bash
   http://localhost:3000
💡 How It Works
The form checks:

Name is not empty

Email is valid

Password has min 6 characters, and strength is shown as you type

On submission:

Form is hidden

Success message is displayed dynamically

No reload, just DOM update

"Back" button allows toggling back to form view

✅ Example Use
Fill form with:

makefile
Copy code
Name: Narasimha
Email: royal@example.com
Password: Royal123
You'll see:

Password strength → Strong

On submit → Success message
