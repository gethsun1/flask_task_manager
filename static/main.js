document.getElementById('task-date').value = '2025-01-01';
document.getElementById('task-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('task-input').value;
    const taskDate = document.getElementById('task-date').value;
    // Generate task
    let response = await fetch('/generate_task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task: taskInput, date: taskDate })
    });
    let data = await response.json();
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');
    taskCard.innerHTML = `<p><strong>Date:</strong> ${taskDate}</p><p>${data.task_list}</p>`;
    document.getElementById('task-output').appendChild(taskCard);


    // Generate image
    // Go to the Lotion API - You folks have access here: https://github.com/rogeliorv/lotion
    response = await fetch('https://lotion-ai.vercel.app/api/generateImage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: taskInput })
    });
    const imageResponse = await response.json();
    const img = document.createElement('img');
    img.src = imageResponse.url;
    img.classList.add('task-image');
    taskCard.appendChild(img);
});
