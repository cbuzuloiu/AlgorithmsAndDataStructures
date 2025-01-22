#!/bin/bash

# Bash script to commit and push changes to Git with user interaction

echo "Starting Git commit process..."

# Add all changes to the staging area
git add .
echo "All changes added to staging area."

# Show the status of the repository
git status

# Ask the user if they want to continue
read -p "Do you want to continue? (y/n): " proceed
if [[ $proceed != "y" ]]; then
  echo "Aborting Git commit process."
  exit 1
fi

# Get commit message from the user
read -p "Enter commit message: " commit_message

# Commit changes with the user-provided message
git commit -m "$commit_message"

# Push changes to the 'main' branch on the remote repository
echo "Pushing changes to the 'main' branch..."
git push -u origin main

echo "Git commit process completed."
