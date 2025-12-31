#!/bin/bash
# Build script for Render deployment

set -e  # Exit on error

echo "Node version:"
node --version

echo "NPM version:"
npm --version

echo "Installing dependencies..."
npm ci

echo "Building Angular application for production..."
npm run build:prod

echo "Build complete!"
echo "Output directory: dist/corvay-technologies/browser"
