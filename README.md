# Cryptoverse - Cryptocurrency Information Platform

A modern, feature-rich React application for exploring cryptocurrency information, market data, and crypto news.

## 🚀 Features

- **Homepage Dashboard**: Get an overview of top cryptocurrencies and market statistics
- **Cryptocurrencies List**: Browse and search through comprehensive cryptocurrency data
- **Crypto Details**: View detailed information about individual cryptocurrencies including price, market cap, and charts
- **Exchanges**: Discover and explore cryptocurrency exchanges
- **Crypto News**: Stay updated with the latest cryptocurrency news and market updates
- **Real-time Data**: Powered by RapidAPI's Coinranking API for up-to-date crypto information
- **Interactive Charts**: Visualize cryptocurrency price trends using Chart.js
- **Responsive Design**: Beautiful UI built with Ant Design for seamless experience across devices

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/jerobalucas/cryptoverse-app.git
cd cryptoapp
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your RapidAPI key:
```
REACT_APP_RAPIDAPI_KEY=your_api_key_here
REACT_APP_RAPIDAPI_HOST=coinranking1.p.rapidapi.com
```

## 🚀 Getting Started

Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📦 Build

Create an optimized production build:
```bash
npm run build
```

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Homepage.jsx
│   ├── Cryptocurrencies.jsx
│   ├── CryptoDetails.jsx
│   ├── Exchanges.jsx
│   ├── News.jsx
│   └── Navbar.jsx
├── services/            # API services
│   └── cryptoApi.js     # RTK Query API endpoints
├── app/
│   └── store.js         # Redux store configuration
├── App.js               # Main app component
├── App.css              # Application styles
└── index.js             # React entry point
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2
- **Routing**: React Router 7.9
- **State Management**: Redux Toolkit 2.10 & RTK Query
- **UI Framework**: Ant Design 5.28
- **Visualization**: Chart.js 4.5 with react-chartjs-2
- **HTTP Client**: Axios 1.13
- **Utilities**: 
  - Millify (for number formatting)
  - Moment (for date/time handling)
  - html-react-parser (for HTML parsing)

## 🔌 API Integration

This project uses the **Coinranking API** via RapidAPI for cryptocurrency data:
- Real-time cryptocurrency prices and market data
- Exchange information
- Cryptocurrency news and updates
- Historical price data

## 📝 Available Scripts

- `npm start`: Run the development server
- `npm run build`: Build for production
- `npm test`: Run tests
- `npm run eject`: Eject from Create React App (irreversible)

## 🌐 Pages

- `/` - Homepage with cryptocurrency overview
- `/cryptocurrencies` - List of all cryptocurrencies
- `/crypto/:coinId` - Detailed information about a specific cryptocurrency
- `/exchanges` - Cryptocurrency exchanges directory
- `/news` - Latest cryptocurrency news

## 📄 License

This project is private and proprietary.

## 👤 Author

Jero Balucas

## 🤝 Contributing

For questions or suggestions, please reach out to the project owner.

---

**Note**: Make sure to keep your API credentials secure and never commit them to version control. Use environment variables instead.
