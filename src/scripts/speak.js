export const speak = (text) => {
	const msg = new SpeechSynthesisUtterance(text)
	const voices = window.speechSynthesis.getVoices()
	msg.voice = voices[0]
	window.speechSynthesis.speak(msg)
}