document.getElementById('fetchButton').addEventListener('click', async () => {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Loading...';

    try {
        const response = await Promise.race([
            fetch('https://dummyjson.com/posts'),
            new Promise((_, reject) => setTimeout(() => reject('Operation timed out.'), 5000))
        ]);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        resultDiv.textContent = JSON.stringify(data.posts, null, 2);
    } catch (error) {
        resultDiv.textContent = error.message;
    }
});