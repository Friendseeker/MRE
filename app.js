async function alertDuration({ target: { files } }) {
    // Load the video in an HTML element
    const video = document.createElement('video')
    video.src = URL.createObjectURL(files[0])
    video.load()

    // Wait for the video to finish loading
    await new Promise(resolve => (video.addEventListener('durationchange', () => resolve())))

    alert(`Video duration is ${video.duration}s`)
    video.remove()
}

document.querySelector('#media-upload').addEventListener('change', alertDuration)
