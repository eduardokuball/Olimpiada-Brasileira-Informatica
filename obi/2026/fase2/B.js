function cinema(ticketsTimes, sessionTimes, capacity) {
    const response = new Array(sessionTimes.length).fill(0);
    const queue = [...ticketsTimes];

    let i = 0;
    while (queue.length > 0) {
        const tTime = queue.shift();

        if (tTime <= sessionTimes[i] && response[i] < capacity)
            response[i]++;
        else i++;
    }

    return response;
}
