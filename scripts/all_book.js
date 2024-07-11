    document.addEventListener('DOMContentLoaded', () => {
        const searchInput = document.querySelector('.search-input');
        const categorySelector = document.querySelector('.category-selector');
        const resultsList = document.querySelector('.results-list');
        const categoryDescription = document.querySelector('.category-description-text');

        // Set default category selection to "All Categories"
        categorySelector.value = "all";

        // Initial description text
        categoryDescription.textContent = "Explore all books...";

        // Fetch and display results on page load
        fetchSearchResults();

        searchInput.addEventListener('input', fetchSearchResults);
        categorySelector.addEventListener('change', fetchSearchResults);

        function fetchSearchResults() {
            const query = searchInput.value.trim().toLowerCase();
            const category = categorySelector.value.toLowerCase();

            // Update category description
            updateCategoryDescription(category);

            // Simulate fetching search results
            const results = getSearchResults(query, category);

            displayResults(results);
        }

        function getSearchResults(query, category) {
            // Placeholder for actual search logic
            // Dummy data for now as this will be handled by the server, afterward.***
            const allResults = [
                { title: "Reading is A Novel Idea!", content: "1", image: "images/post1.jpg", href: "post1.html", tags: ["novel"] },
                { title: "Let's dive deep- me!", content: "2", image: "images/post1.jpg", href: "post1.1.html", tags: ["novel"] },
                { title: "Understanding the World", content: "3", image: "images/post2.jpg", href: "post2.html", tags: ["finance", "tag2"] },
                { title: "Understanding the World -Academic", content: "4", image: "images/post2.jpg", href: "post2.1.html", tags: ["finance", "tag2"] },
                { title: "Answering Why?", content: "5", image: "images/post3.jpg", href: "post3.html", tags: ["science", "tag3"] },
                { title: "Beyond This Realm!", content: "6", image: "images/post4.jpg", href: "post4.html", tags: ["fiction", "tag4"] },
                { title: "Beyond The Horizon!", content: "7", image: "images/post7.jpg", href: "post5.html", tags: ["other", "tag5"] },
                { title: "Let's Think About It", content: "8", image: "images/post6.jpg", href: "post6.html", tags: ["you", "tag6"] },





            ];

            return allResults.filter(post =>
                (category === "all" || post.tags.includes(category)) &&
                (query === "" || post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query))
            );
        }

        function displayResults(results) {
            resultsList.innerHTML = '';

            if (results.length === 0) {
                resultsList.innerHTML = '<p>No results found.</p>';
                return;
            }

            results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');

                resultItem.innerHTML = `
                    <a href="${result.href}" class="post-link">
                    <img src="${result.image}" alt="${result.title}">
                    <h4>${result.title}</h4>
                    <p>${result.content}</p>
                    </a>
                `;

                resultsList.appendChild(resultItem);
            });
        }

        function updateCategoryDescription(category) {
            let description = "";

            switch (category) {
                case "all":
                    description = "Explore all Books..";
                    break;
                case "novel":
                    description = "Discover all mystery, romance, horror, thriller ones";
                    break;
                case "finance":
                    description = "Read about Finance and markets";
                    break;
                case "science":
                    description = "Explore books about science and nature";
                    break;
                case "other":
                    description = "Find other interesting notes";
                    break;
                default:
                    description = "Explore all blog posts.";
                    break;
            }

            categoryDescription.textContent = description;
        }


    });