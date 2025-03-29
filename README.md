# React User Management App

## 🚀 Assignment Overview
This React application integrates with the Reqres API to perform basic user management functions. The project is divided into three levels of increasing complexity.

### 🌐 Base URL
```
https://reqres.in/
```

---

## 📌 Features

### ✅ Level 1: Authentication Screen
- Create a login page for user authentication.
- Use the following API endpoint for authentication:
  ```
  POST /api/login
  ```
  **Credentials:**
  ```json
  {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  }
  ```
- On successful login, store the authentication token and navigate to the Users List page.

### ✅ Level 2: List All Users
- Fetch users from the API:
  ```
  GET /api/users?page=1
  ```
- Display user details (first name, last name, avatar) in a structured format (table or card layout).
- Implement pagination to navigate through different user pages.

### ✅ Level 3: Edit, Delete, and Update Users
- **Edit User:**
  - Clicking "Edit" opens a form pre-filled with user details.
  - Allow editing first name, last name, and email.
  - Use the following API for updates:
    ```
    PUT /api/users/{id}
    ```
- **Delete User:**
  - Clicking "Delete" removes the user from the list.
  - Use the following API for deletion:
    ```
    DELETE /api/users/{id}
    ```
- Display appropriate success/error messages.

---

## 📦 Tech Stack
- **React** (Frontend Framework)
- **React Router** (Navigation)
- **Axios / Fetch API** (API Calls)
- **Tailwind CSS / Custom CSS** (Styling)

---

## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/react-user-management.git
cd react-user-management
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm start
```

The app should now be running at:
```
http://localhost:3000
```

---

## 🔑 Authentication Handling
- The authentication token is stored in **local storage**.
- Users are redirected to the **login page** if they are not authenticated.

---

## 🔍 Additional Features (Bonus Points)
- ✅ Client-side search and filtering
- ✅ React Router for navigation


---

---

## 📧 Contact
For any queries, feel free to reach out:
📩 Email: [ridhikashekhawat77@gmail.com](mailto:ridhikashekhawat77@gmail.com.com)
🔗 GitHub: [ridhyka](https://github.com/ridhyka)
