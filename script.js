document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const userInput = document.getElementById('userInput');
    const optionsContainer = document.getElementById('options-container'); // Get the new container

    generateBtn.addEventListener('click', async () => {
        const prompt = userInput.value;
        if (!prompt) {
            alert('Please enter a topic!');
            return;
        }

        // --- Step 1: Provide User Feedback ---
        optionsContainer.innerHTML = '<p class="placeholder-text">Generating your options... Please wait.</p>';
        generateBtn.disabled = true;
        userInput.value = '';


        try {
            const response = await fetch('http://localhost:3000/generate-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: prompt }),
            });

            if (!response.ok) {
                throw new Error(`Server responded with status: ${response.status}`);
            }

            const data = await response.json();
            
            // --- Step 2: Process the API Response ---
            // Clear the "Generating..." message
            optionsContainer.innerHTML = ''; 

            // Split the single string response into an array of options.
            // This regex splits by "--- OPTION [number] ---"
            const options = data.post.split(/--- OPTION \d+ ---/).filter(option => option.trim() !== '');

            if (options.length === 0) {
                 optionsContainer.innerHTML = '<p class="placeholder-text">Could not generate options. Please try a different prompt.</p>';
                 return;
            }

            // --- Step 3: Create and Display a Box for Each Option ---
            options.forEach(optionText => {
                const trimmedText = optionText.trim();
                const optionBox = document.createElement('div');
                optionBox.classList.add('option-box');
                optionBox.innerText = trimmedText; // Use innerText to preserve line breaks

                // --- Step 4: Add Click-to-Copy Functionality ---
                optionBox.addEventListener('click', () => {
                    // Use the modern Clipboard API
                    navigator.clipboard.writeText(trimmedText).then(() => {
                        // Success! Provide visual feedback.
                        const originalText = optionBox.innerText;
                        optionBox.innerText = '✅ Copied to clipboard!';
                        optionBox.classList.add('copied');

                        // Revert back to the original state after 2 seconds
                        setTimeout(() => {
                            optionBox.innerText = originalText;
                            optionBox.classList.remove('copied');
                        }, 2000);
                    }).catch(err => {
                        console.error('Failed to copy text: ', err);
                        alert('Could not copy text to clipboard.');
                    });
                });

                optionsContainer.appendChild(optionBox);
            });

        } catch (error) {
            console.error('Error:', error);
            optionsContainer.innerHTML = '<p class="placeholder-text">Failed to generate post. Please check the console for errors.</p>';
        } finally {
            generateBtn.disabled = false;
        }
    });
});