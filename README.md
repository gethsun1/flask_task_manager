
# AI-Powered Task Generator

---

This is a Flask web application that generates detailed to-do lists based on user input using OpenAI's GPT-3.5-turbo model. The app also includes a feature for generating images related to the task descriptions using Stable Diffusion (placeholder function included).

## Features

- Generate detailed to-do lists from user input
- Input includes task description and optional date
- Display generated tasks in a modern and elegant UI with raised cards
- Placeholder for generating images using Stable Diffusion

## Getting Started

### Prerequisites

- Python 3.7+
- OpenAI API key
- Stable Diffusion setup (if using the image generation feature)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ai-powered-task-generator.git
   cd ai-powered-task-generator
   ```

2. **Create a virtual environment**

   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows, use `venv\Scripts\activate`
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Set your OpenAI API key**

   Replace `'OPENAI_API_KEY'` in `.env` in your local environment with your OpenAI API key.
   If it is a prod environment, make sure to set it as an environment variable.

### Running the App

1. **Start the Flask application**

   ```bash
   python app.py
   ```

2. **Open your browser and go to**

   ```
   http://127.0.0.1:5000/
   ```

## Usage

1. **Enter a task description and optional date** into the input fields.
2. **Click "Generate Task"** to receive a detailed to-do list.
3. **Generated tasks** will be displayed in raised cards with a modern UI.
4. **(Optional)** Click "Generate Image" to generate an image related to the task description (requires implementing the image generation function).

## File Structure

```plaintext
.
├── app.py               # Main Flask application
├── templates
│   └── index.html       # HTML template for the web interface
├── static
│   └── styles.css       # CSS file for styling
├── requirements.txt     # List of dependencies
└── README.md            # This README file
```
