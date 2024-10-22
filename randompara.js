const text = [
    `The trend towards plant-based diets has been growing, with people recognizing the health and environmental benefits of reducing meat consumption. It's a way to nourish the body and support sustainable agriculture practices.`,
    `The development of sustainable forestry management practices is another important application of technology and nature. Sustainable forestry management practices prioritize biodiversity and carbon sequestration, reducing the environmental impact of forestry and promoting more responsible consumption of wood products.`,
    `The sound of a waterfall cascading down the rocks created a peaceful and calming scene.`,
    `Mindfulness is the practice of being present and fully engaged in the moment, and it is essential to cultivating a sense of peace and well-being. Whether it's through meditation, deep breathing, or simply taking time to savor the sights and sounds of the world around us, mindfulness can bring a sense of calm and clarity to our lives.`,
    `The use of open-source technologies in environmental monitoring is another innovative application of technology in nature. Open-source technologies allow for greater collaboration and data sharing, promoting more informed decision-making and environmental management.`,
    `The trend towards conscious consumerism has been gaining momentum, with people seeking out ethical and sustainable products. It's a way to support companies with a commitment to social and environmental responsibility.`,
    `Forgiveness is a difficult but necessary act that can bring healing and peace to both the forgiver and the forgiven. Whether it's forgiving oneself or others, it's important to let go of grudges and resentments in order to move forward.`,
    `Boundaries are the limits and guidelines we set for ourselves and our relationships, and they are essential to protecting our well-being and maintaining healthy interactions with others.`,
    `The development of green infrastructure is another important application of technology and nature. Green infrastructure uses natural systems to manage water, reduce heat island effects, and promote biodiversity in urban areas.`
];

// Shuffle the array function
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Select the input and data container
const item = document.getElementById("items");
const datacontainer = document.querySelector("#data");

// Generate paragraphs based on input
const generate = () => {
    if (isNaN(item.value) || item.value < 1 || item.value > 9) {
        const randomIndex = Math.floor(Math.random() * text.length);
        datacontainer.innerHTML = `<p>${text[randomIndex]}</p>`;
    } else {
        const localText = shuffle(text);
        const data = localText.slice(0, item.value);
        const paras = data.map((e) => {
            return `<p>${e}</p>`;
        });
        datacontainer.innerHTML = paras.join(""); // Convert array to string.
    }
}