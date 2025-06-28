#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\x1b[36m%s\x1b[0m', '🚀 Job Portal Setup Script');
console.log('\x1b[33m%s\x1b[0m', 'This script will set up your job portal project environment');
console.log('-----------------------------------------------------------\n');

// Check if config.env exists and create if not
const configPath = path.join(__dirname, 'backend', 'config', 'config.env');
const configExamplePath = path.join(__dirname, 'backend', 'config', 'config.env.example');

if (!fs.existsSync(configPath) && fs.existsSync(configExamplePath)) {
  console.log('⚙️  Creating config.env from example...');
  fs.copyFileSync(configExamplePath, configPath);
  console.log('\x1b[32m%s\x1b[0m', '✅ config.env created! Please edit it with your own values.');
}

// Create uploads directory if not exists
const uploadsDir = path.join(__dirname, 'backend', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  console.log('📁 Creating uploads directory...');
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('\x1b[32m%s\x1b[0m', '✅ uploads directory created!');
}

// Check for MongoDB URI and remind user
console.log('\n\x1b[33m%s\x1b[0m', '⚠️  Remember to set your MongoDB URI in backend/config/config.env');

// Function to install dependencies
const installDependencies = () => {
  try {
    // Install backend dependencies
    console.log('\n📦 Installing backend dependencies...');
    execSync('npm install', { stdio: 'inherit', cwd: path.join(__dirname, 'backend') });
    console.log('\x1b[32m%s\x1b[0m', '✅ Backend dependencies installed!');

    // Install frontend dependencies
    console.log('\n📦 Installing frontend dependencies...');
    execSync('npm install', { stdio: 'inherit', cwd: path.join(__dirname, 'frontend') });
    console.log('\x1b[32m%s\x1b[0m', '✅ Frontend dependencies installed!');

    console.log('\n\x1b[36m%s\x1b[0m', '🎉 Setup complete!');
    console.log('\x1b[36m%s\x1b[0m', '📝 To start the backend: cd backend && npm start');
    console.log('\x1b[36m%s\x1b[0m', '📝 To start the frontend: cd frontend && npm run dev');
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', '❌ Error during dependency installation:', error.message);
  } finally {
    rl.close();
  }
};

// Ask if user wants to install dependencies
rl.question('\n❓ Do you want to install dependencies now? (y/n): ', (answer) => {
  if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
    installDependencies();
  } else {
    console.log('\n\x1b[36m%s\x1b[0m', '📝 To install dependencies manually:');
    console.log('\x1b[36m%s\x1b[0m', '  1. cd backend && npm install');
    console.log('\x1b[36m%s\x1b[0m', '  2. cd frontend && npm install');
    rl.close();
  }
});
