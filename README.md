# Rich Text Editor using Tiptap

## 📌 Overview

This project is a **Rich Text Editor** built using **Tiptap** and **React**.

## 📖 Table of Contents

- [🎥 Demo](#🎥-demo)
- [🛠️ Tech Stack](#🛠️-tech-stack)
- [🚀 Features](#🚀-features)
- [📂 Project Structure](#📂-project-structure)
- [📝 Code Explanation](#📝-code-explanation)

  - [✨ Creating the Rich Text Editor with TipTap](#✨-creating-the-rich-text-editor-with-tiptap)
  - [🏗️ Implementing Variable Insertion](#🏗️-implementing-variable-insertion)

- [🚀 Setup](#🚀-setup)

## 🎥 Demo

[![](https://markdown-videos-api.jorgenkh.no/youtube/qnUTkPyZg8I)](https://youtu.be/qnUTkPyZg8I)

## 🛠️ Tech Stack

- **Frontend**: React (Vite) with Tiptap
- **Styling**: Tailwind CSS
- **State Management**: React Hooks

## 🚀 Features

- **Dynamic Variable Insertion**: Type `{{` to trigger a popover for inserting predefined variables.
- **Styled Tokens**: Inserted variables appear as interactive, formatted tokens.
- **Text Formatting**: Supports bold, italic, underline, strikethrough, and more.
- **Lists & Headings**: Create ordered/unordered lists and use H1-H6 headings.
- **Responsive Design**: Works across different screen sizes.

## 📂 Project Structure

```sh
rich-text-editor/
│── node_modules/            # Project dependencies
│── public/                  # Static assets
│── src/                     # Source code
│   ├── components/          # UI components
│   │   ├── BoldBtn.jsx
│   │   ├── FontDropdown.jsx
│   │   ├── HeadingDropdown.jsx
│   │   ├── HighlightBtn.jsx
│   │   ├── ItalicBtn.jsx
│   │   ├── MentionList.jsx
│   │   ├── OrderedListBtn.jsx
│   │   ├── StrikeThroughBtn.jsx
│   │   ├── suggestion.js
│   │   ├── TextAlignDropdown.jsx
│   │   ├── TipTapEditor.jsx   # Main editor component
│   │   ├── UnderlineBtn.jsx
│   │   ├── UnorderedListBtn.jsx
│   │   ├── VariableForms.jsx  # UI for variable input
│   ├── contexts/             # Context API for variables
│   │   ├── VarContextProvider.jsx
│   ├── App.jsx               # Main App component
│   ├── main.jsx              # Entry point
│   ├── index.css             # Global styles
│── .gitignore
│── eslint.config.js
│── index.html
│── package.json
│── package-lock.json
│── README.md
│── vite.config.js

```

## 📝 Code Explanation

### ✨ Creating the Rich Text Editor with TipTap

The project uses TipTap, a highly customizable text editor built on ProseMirror. The editor is implemented in the TipTapEditor.jsx file, where necessary extensions are configured to enable formatting features like:

- Bold, Italic, Underline, Strikethrough
- Lists (Ordered, Unordered)
- Headings (H1-H6)
- Highlighting and Text Alignment

### 🏗️ Implementing Variable Insertion

The editor allows users to insert predefined variables dynamically. This is achieved using TipTap's Mention Extension to recognize variables when a user types {{.

- The VarContextProvider.jsx (inside contexts/) manages the variable state using React Context API.
- The suggestion.js file controls how variables are suggested inside the editor when typing {{.
- The MentionList.jsx component handles the UI for variable selection.

Currently, the variables are displayed inside the editor, though ideally, a message should appear when a variable is inserted. This ensures that variables are being stored properly for future processing.

## 🚀 Setup

Follow these steps to set up and run the project:

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/rich-text-editor.git
cd rich-text-editor
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Start the Development Server

```
npm run dev
```
