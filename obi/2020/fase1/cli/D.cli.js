import { input, output } from '../../../../utils/io.js';
import countMusicChanges from '../D.js';

const [friendsQuantity, musics, selectedMusicInitial] = input().split(' ').map(Number);

const friends = [];

for (let i = 0; i < friendsQuantity; i++) {
    const [beloved, hated] = input().split(' ').map(Number);
    friends.push({ beloved, hated });
}

const result = countMusicChanges(friends, selectedMusicInitial);

output(result);