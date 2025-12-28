# Physical AI & Robotics Book

Comprehensive online textbook covering Physical AI, ROS 2, Simulation, NVIDIA Isaac, VLA models, and Humanoid Robotics.

Built using **Spec-Kit Plus** workflow with **Gemini AI Code Assistant**.

## 🎯 Project Overview

This project was developed for a hackathon using a structured software development approach:
- Specification-driven development
- Iterative implementation
- Quality-first methodology
- Documentation-as-code

## 📚 Book Content

### Chapters
1. **Introduction** - What is Physical AI?
2. **ROS 2** - The Robotic Nervous System
3. **Simulation** - Digital Twin (Gazebo & Unity)
4. **NVIDIA Isaac** - AI-Robot Brain
5. **VLA Models** - Vision-Language-Action
6. **Humanoid Robotics** - Advanced Control
7. **Hardware** - Setup & Requirements

## 🛠️ Tech Stack

### Frontend
- **Framework:** Docusaurus 3.9.2
- **Language:** TypeScript
- **Styling:** Custom CSS (Teal theme #1e7a6f)
- **i18n:** English, Urdu (اردو), Hindi (हिंदी)

### Backend
- **API:** FastAPI
- **Database:** Qdrant (vector storage)
- **AI:** OpenAI Agents SDK + Gemini API
- **Auth:** Supabase

### Features
- 🎨 Modern teal-themed UI
- 🌍 Multi-language support (EN/UR/HI)
- 🔍 Local search functionality
- 💬 AI-powered RAG chatbot
- 🔐 User authentication & profiles
- 📱 Fully responsive design

## 🗂️ Project Structure

```
├── docs/                  # Book content (45+ pages)
├── src/
│   ├── components/       # React components
│   ├── pages/           # Custom pages
│   └── css/             # Styles
├── backend/
│   ├── chatbot/         # RAG chatbot
│   └── auth/            # Authentication
├── specs/               # Feature specifications
└── history/            # Development history
```

## 📋 Development Process

This project followed **Spec-Kit Plus** methodology:

### 1. Specification
- Clear requirements defined
- User stories documented
- Success criteria established

### 2. Planning
- Technical approach designed
- Architecture decisions made
- Implementation phases outlined

### 3. Implementation
- Feature-by-feature development
- Incremental testing
- Continuous refinement

### 4. Verification
- Code review
- Testing (manual + automated)
- Quality assurance

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0
- npm >= 9.0
- Python >= 3.11 (for backend)

### Frontend Setup
```bash
npm install
npm start  # Dev server on localhost:3000
```

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload  # API on localhost:8000
```

## 📖 Documentation

- **specs/** - Complete feature specifications
- **history/** - Development conversation logs
- **docs/** - Book content

Each feature has:
- `spec.md` - Requirements & acceptance criteria
- `plan.md` - Implementation strategy
- `tasks.md` - Task breakdown
- `quickstart.md` - Setup guide

## 🎯 Key Features

### Feature 001: Docusaurus Frontend
Modern, responsive book interface with custom theme

### Feature 002: Book Content
45+ pages of comprehensive Physical AI curriculum

### Feature 003: RAG Chatbot Backend
AI-powered Q&A system using book content

### Feature 004: Authentication
Supabase-based user management & profiles

### Feature 005: Chatbot UI
React component for interactive AI assistance

## 🤝 Contributing

This is a hackathon project. Contributions welcome!

1. Fork the repository
2. Create feature branch
3. Follow Spec-Kit Plus workflow
4. Submit pull request

## 📝 License

MIT License - See LICENSE file

## 👤 Author

**Hassan RJ**
- GitHub: [@HassanRJ-3108](https://github.com/HassanRJ-3108)
- Project: Book - Physical AI & Robotics

## 🙏 Acknowledgments

- Built with Gemini AI Code Assistant
- Spec-Kit Plus methodology
- Docusaurus community
- Open source contributors

---

**Last Updated:** December 2025  
**Status:** Active Development
