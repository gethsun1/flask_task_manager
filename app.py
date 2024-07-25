from flask import Flask, render_template, request, jsonify
import os
from dotenv import load_dotenv
import openai

load_dotenv()

app = Flask(__name__)

openai.api_key = os.getenv('OPENAI_API_KEY')

@app.route('/preset-tasks')
def preset_tasks():
    return render_template('preset_tasks.html')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_task', methods=['POST'])
def generate_task():
    user_input = request.json['task']
    task_date = request.json['date']
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": f"Generate a detailed to-do list for: {user_input}"}
        ],
        max_tokens=100
    )
    task_list = response['choices'][0]['message']['content'].strip()
    return jsonify(task_list=task_list, task_date=task_date)

if __name__ == '__main__':
    app.run(debug=True)
