document.getElementById('fetchButton').addEventListener('click', function() {
    // Simulate a delay of 5 seconds
    setTimeout(() => {
        fetchPosts(displayPosts);
    }, 5000);
});


function fetchPosts(callback) {
    fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => {
            const titles = data.posts.map(post => post.title).join('<br>');
            callback(titles);
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
            callback('Failed to fetch posts.');
        });
}

function displayPosts(titles) {
    document.getElementById('content').innerHTML = titles || 'No posts available.';
}