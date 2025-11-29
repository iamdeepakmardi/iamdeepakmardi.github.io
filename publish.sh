#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "🚀 Starting deployment process..."

# Ensure we are on dev branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "dev" ]; then
  echo "❌ Error: You must be on the 'dev' branch to run this script."
  exit 1
fi

# Build the project
echo "📦 Building the project..."
npm run build

# Check if dist directory exists
if [ ! -d "dist" ]; then
  echo "❌ Error: Build failed. 'dist' directory not found."
  exit 1
fi

# Move dist to a temporary location outside the repo to avoid git checkout issues
echo "🚚 Moving build artifacts..."
rm -rf ../temp_site_build
mv dist ../temp_site_build

# Switch to main branch
echo "switched to main branch..."
git checkout main

# Clean main branch (remove everything except .git)
echo "🧹 Cleaning main branch..."
find . -maxdepth 1 ! -name '.git' ! -name '.' ! -name '..' -exec rm -rf {} +

# Move build files to root
echo "📥 Installing new build..."
cp -r ../temp_site_build/* .

# Add all files
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# Push to origin main
echo "⬆️ Pushing to GitHub..."
git push origin main

# Clean up temp directory
rm -rf ../temp_site_build

# Switch back to dev
echo "🔙 Switching back to dev..."
git checkout dev

echo "✅ Deployment complete!"
