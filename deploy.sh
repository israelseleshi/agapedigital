#!/bin/bash

echo "🚀 Starting deployment process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the React application
echo "🔨 Building React application..."
npm run build

# Copy built files to the correct location
echo "📁 Copying built files..."
cp -r dist/* ./

# Install production dependencies only
echo "🔧 Installing production dependencies..."
npm ci --only=production

echo "✅ Deployment completed successfully!"
echo "🌐 Your website should now be live at https://agapedigital.com.et"
