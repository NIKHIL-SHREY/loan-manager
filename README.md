
## Tech Stack

### **Frontend**:
- **Vite + React + TypeScript**
- **Material-UI**: For the UI components like buttons, tables, and forms.
- **Tailwind CSS**: For responsive and custom styling.

### **Backend**:
- **Node.js + TypeScript**: For building the API.
- **Bun**: As a fast JavaScript runtime.
- **Mongoose**: For MongoDB ORM.

### **Database**:
- **MongoDB**: For storing user and loan information.

---

## Setup Instructions

### **1. Clone the Repository**
```bash
git clone https://github.com/NIKHIL_SHREY/loan-manager
cd creditsea
```

### **2. Install Dependencies**

#### Backend
```bash
cd server
bun install
```

#### Frontend
```bash
cd creditsea
bun install
```

### **3. Set Environment Variables for server and client**
Create a `.env` file in the root directory of server with the following details:
```bash
# Port number
PORT=5000
NODE_ENV=development
# URL of the Mongo DB
MONGODB_URL=mongodb+srv://nikhilshrey:F8UnYc1SKgGVoFXY@cluster0.w8gbb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
# JWT secret key
JSON_WEB_TOKEN_SECRET=AJKVzgfhJgYtiYuyzPmim5EKKiJ8D8YE
# Client URL
CLIENT_URL=http://localhost:5173
# Server URL
SERVER_URL=http://localhost:5000
```

Create a `.env` file in the root directory of client with the following details:

```bash
VITE_API_URL=http://localhost:5000/api
```

### **4. Run the Application**

#### Backend
```bash
bun run dev
```

#### Frontend
```bash
bun run dev
```

---
