function showWithDelay(text, delay) {
	setTimeout(() => console.log(`Text: ${text} with delay: ${delay}`), delay);
}

showWithDelay('Hello', 3000);
