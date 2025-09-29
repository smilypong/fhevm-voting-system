#!/bin/bash

# FHEVM Voting System - GitHub Repository Creation Script
# This script helps you create a GitHub repository for the FHEVM Voting System

echo "🗳️ FHEVM Voting System - GitHub Repository Setup"
echo "=================================================="
echo ""

# Check if GitHub CLI is installed
if command -v gh &> /dev/null; then
    echo "✅ GitHub CLI found. Creating repository..."
    gh repo create smilypong/fhevm-voting-system --public --description "Privacy-preserving blockchain voting system with FHEVM technology"
    echo "✅ Repository created successfully!"
else
    echo "❌ GitHub CLI not found."
    echo ""
    echo "📋 Manual Steps to Create Repository:"
    echo "1. Go to https://github.com/smilypong"
    echo "2. Click 'New' or '+' button"
    echo "3. Repository name: fhevm-voting-system"
    echo "4. Description: Privacy-preserving blockchain voting system with FHEVM technology"
    echo "5. Choose Public or Private"
    echo "6. DO NOT initialize with README (we already have one)"
    echo "7. Click 'Create repository'"
    echo ""
    echo "After creating the repository, run:"
    echo "git push -u origin main"
fi

echo ""
echo "🚀 Next Steps:"
echo "1. Create repository on GitHub (if not done automatically)"
echo "2. Run: git push -u origin main"
echo "3. Test live server: npm run live"
echo "4. Open http://localhost:3000 to see the demo"
echo ""
echo "📱 Demo URLs:"
echo "- Main Demo: http://localhost:3000"
echo "- FHEVM Demo: http://localhost:3001"
echo "- Simple Voting: http://localhost:3002"
echo "- Demo Hub: http://localhost:8080"
