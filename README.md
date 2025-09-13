# 🚀 LinkedIn Post Generator  

An AI-powered web app that generates professional, engaging LinkedIn posts from just a topic, keyword, or rough idea. Built with **Express.js**, **Google Gemini API**, and **TailwindCSS**.  

## ✨ Features  
- ✅ Generate **4 unique LinkedIn post options** instantly  
- ✅ Posts include a **hook, body, CTA, and hashtags**  
- ✅ Clean UI with **TailwindCSS styling**  
- ✅ Interactive preview area with **copyable post options**  
- ✅ Uses **Google Gemini (1.5 Flash)** for fast generation  

---

## 🛠️ Tech Stack  
- **Frontend:** HTML, TailwindCSS, Vanilla JS  
- **Backend:** Node.js, Express.js  
- **AI:** Google Generative AI (Gemini API)  
- **Styling:** Custom CSS + Tailwind  
- **Build Tools:** PostCSS, Autoprefixer  

---

## 📂 Project Structure  
```
├── index.html         # Main frontend UI  
├── style.css          # Custom styles + Tailwind utilities  
├── script.js          # (Frontend logic will be placed here)  
├── server.js          # Express backend with Gemini API integration  
├── tailwind.config.js # Tailwind setup  
├── postcss.config.js  # PostCSS setup  
├── package.json       # Node dependencies & scripts  
├── package-lock.json  # Lock file  
```

---

## ⚡ Getting Started  

### 1. Clone the Repository  
```bash
git clone https://github.com/your-username/linkedin-post-generator.git
cd linkedin-post-generator
```

### 2. Install Dependencies  
```bash
npm install
```

### 3. Set Up Environment Variables  
Create a `.env` file in the root folder:  
```env
GOOGLE_API_KEY=your_google_gemini_api_key
PORT=3000
```

### 4. Run the Backend  
```bash
npm start
```
Backend runs on: `http://localhost:3000`

### 5. Run the Frontend  
```bash
npm run frontend
```
Frontend will be served on: `http://localhost:5000` (or another available port).  

---

## 🖼️ Screenshots  
*(Add screenshots of your UI here once ready!)*  

---

## 🔑 How It Works  
1. Enter your topic/idea in the input box  
2. Click **Generate**  
3. The app fetches AI-generated LinkedIn posts via the **Express server + Gemini API**  
4. Posts appear in styled option boxes (click to copy).  

---

## 🚧 Future Improvements   
- [ ] User authentication for history tracking  
- [ ] More post style variations (casual, storytelling, technical)
- [ ] add filling text-area with generated post.
- [ ] drag and drop image and media for post.
- [ ] API for ai image generation related to post.
- [ ] post frontend fixings upcoming...

---

## 📜 License  
This project is licensed under the **MIT License** – feel free to use, modify, and distribute.  
