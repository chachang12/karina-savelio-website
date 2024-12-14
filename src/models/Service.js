class LinguisticService {
    constructor(name, description, examples, image, color, category) {
        this.name = name;
        this.description = description;
        this.examples = examples; // Array of examples
        this.image = image; // URL or path to the image
        this.color = color; // Unique color for the service
        this.category = category; // Category of the service (business or personal)
    }

    // Method to add an example
    addExample(example) {
        this.examples.push(example);
    }

    // Method to get service details
    getServiceDetails() {
        return {
            name: this.name,
            description: this.description,
            examples: this.examples,
            image: this.image,
            color: this.color,
            category: this.category
        };
    }
}

export default LinguisticService;