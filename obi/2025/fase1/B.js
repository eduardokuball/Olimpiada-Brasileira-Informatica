export default function choffeShop(min, max, capacity, dose) {

    return (Math.ceil((capacity - max) / dose) * dose) <= (capacity - min);
    
}
