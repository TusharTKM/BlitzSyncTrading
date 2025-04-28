# BlitzSyncTrading

BlitzSyncTrading is a web application for managing and generating tokens for algo-trading systems, allowing users to securely register, generate trading tokens, and monitor their trades. 

## 🛠️ Tech Stack
| Area          | Technologies Used |
|--------------|------------------|
| **Frontend** | React, Tailwind CSS, Axios |
| **Backend**  | Node.js, Express.js, REST API |
| **Database** | MongoDB |
| **Auth**     | JWT, bcrypt, cryptojs |


## 🚀 Features
- User Registration and Login
- Daily SEBI-compliant authorization & Token Generation for Algo Trading
- User Dashboard to manage profile and trades
- Contact Us page to reach out for support
- Responsive UI - for desktop and mobile trading
  
## 📦 Installation
1. **Clone the repository**
   ```bash
    git clone https://github.com/TusharTKM/BlitzSyncTrading.git
    cd BlitzSyncTrading

2. **Setup Backend**
   ```bash
    cd server
    npm install
    cp .env.example .env  # Update MongoDB URI and JWT secret
    npm start

3. **Setup Frontend**
   ```bash
    cd client
    npm install
    npm run dev

4. **Access the App**

Open http://localhost:5173 in your browser.

📜 License
MIT © [Tush/BlitzSynTrading]
