document.getElementById('fetchButton').addEventListener('click', () => {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Loading...';

    const fetchData = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject('Operation timed out.');
        }, 5000);

        fetch('https://dummyjson.com/posts')
            .then(response => {
                clearTimeout(timeout);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error.message);
            });
    });

    fetchData
        .then(data => {
            resultDiv.textContent = JSON.stringify(data.posts, null, 2);
        })
        .catch(errorMessage => {
            resultDiv.textContent = errorMessage;
        });
});