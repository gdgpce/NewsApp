document.addEventListener("DOMContentLoaded", function () {
    const rssUrl = "https://feeds.feedburner.com/ndtvnews-top-stories";
    const headlinesContainer = document.getElementById("headlines");

    // Fetch the RSS feed
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`)
        .then(response => response.json())
        .then(data => {
            const items = data.items;

            // Iterate through the items and append to the headlines list
            items.forEach(item => {
                const listItem = document.createElement("li");
                const anchor = document.createElement("a");
                anchor.href = item.link;
                anchor.target = "_blank";
                anchor.textContent = item.title;
                listItem.appendChild(anchor);
                headlinesContainer.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching RSS feed:', error));
});