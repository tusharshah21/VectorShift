# VectorShift Frontend Technical Assessment

This repository contains the solution for the VectorShift frontend technical assessment. The assessment consists of four parts: Node Abstraction, Styling, Text Node Logic, and Backend Integration.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Install dependencies (if not already installed):
    ```bash
    pip install fastapi uvicorn
    ```
3. Start the backend server:
    ```bash
    uvicorn main:app --reload
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` for the frontend.
2. Create a pipeline, add nodes, and click the submit button to interact with the backend.
3. Check for alerts displaying the number of nodes, edges, and whether the pipeline is a DAG.

## Features

### Part 1: Node Abstraction
- Created a base node abstraction to streamline the creation of new nodes.
- Implemented five new nodes to demonstrate the flexibility of the abstraction.

### Part 2: Styling
- Applied cohesive and attractive styling to the components.
- Used existing styles as inspiration while adding custom design elements.

### Part 3: Text Node Logic
- Enhanced the Text node to dynamically adjust its size based on the input.
- Added functionality to create new handles for variables defined in the text input.

### Part 4: Backend Integration
- Integrated the frontend with a simple Python/FastAPI backend.
- Implemented an endpoint to parse the pipeline and check for DAG structure.
- Displayed the results in a user-friendly alert.


---

Thank you for reviewing my submission!
