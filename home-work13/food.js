
        function filterFoodPrice(food, min, max) {
            return food.filter(elem => elem.price >= min && elem.price <= max)
        }

        module.exports = { filterFoodPrice }