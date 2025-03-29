document.addEventListener("DOMContentLoaded", function () {
    // ✅ Find the "Explore Jobs" button by ID
    const exploreJobsButton = document.getElementById("explore-jobs-btn");

    // ✅ Ensure the button exists before adding an event listener
    if (exploreJobsButton) {
        exploreJobsButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            // ✅ Paths for local and deployed versions
            const localPath = "jobs.html"; // Local file
            const deployedPath = " https://seeker-sigma.vercel.app/"; // Vercel link

            // ✅ Check if running locally or on Vercel
            fetch(localPath, { method: 'HEAD' }) // Check if file exists locally
                .then(response => {
                    if (response.ok) {
                        window.location.href = localPath; // Open local file
                    } else {
                        window.location.href = deployedPath; // Redirect to Vercel
                    }
                })
                .catch(() => {
                    window.location.href = deployedPath; // Fallback in case of error
                });
        });
    } else {
        console.error("❌ Error: 'Explore Jobs' button not found! Check HTML.");
    }
});