const { ceil} = Math;

// Main Function
export default function choffeShop(min, max, capacity, dose) {
    return (ceil((capacity - max) / dose) * dose) <= (capacity - min);
}
