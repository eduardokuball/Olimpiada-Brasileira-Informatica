export default function hands(number){

    if (number == 0) return ["*","*"];

    if(number <= 5) return ["I".repeat(number), "*" ];

    return ["I".repeat(5),  "I".repeat(number - 5)];
};
