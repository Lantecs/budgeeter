const categoryToTypes = {
    Education: ["Tuition", "Books", "Courses"],
    Entertainment: ["Movies", "Games", "Concerts"],
    Food: ["Breakfast", "Lunch", "Dinner", "Snack"],
    Health: ["Doctor", "Medicine", "Gym"],
    Miscellaneous: ["Gift", "Donation"],
    Shopping: ["Clothing", "Electronics"],
    Transportation: ["Bus", "Taxi", "Flight"],
    Utilities: ["Electricity", "Water", "Internet"]
};

document.addEventListener("DOMContentLoaded", () => {
    const categorySelect = document.getElementById("category");
    const typeSelect = document.getElementById("type");

    categorySelect.addEventListener("change", () => {
        const selectedCategory = categorySelect.value;
        const types = categoryToTypes[selectedCategory] || [];

        // Clear previous options
        typeSelect.innerHTML = `<option value="" disabled selected>-- Select a Type --</option>`;

        // Populate new options
        types.forEach(type => {
            const option = document.createElement("option");
            option.value = type;
            option.textContent = type;
            typeSelect.appendChild(option);
        });
    });
});
    