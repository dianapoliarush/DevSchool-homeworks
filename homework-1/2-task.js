function minMovesHanoiTower(disksNum) {
    // one disk -> one move
    if (disksNum === 1) {
        return 1;
    } else {
        // moving top disk to the second rod, the third rod is the spare rod
        const move1 = minMovesHanoiTower(disksNum - 1);
        // moving bigger disk to the spare rod
        const move2 = 1;
        // moving smaller disk to the third rod, the first rod is the spare rod
        const move3 = minMovesHanoiTower(disksNum - 1);
        return move1 + move2 + move3;
    }
}

console.log(minMovesHanoiTower(3));
console.log(minMovesHanoiTower(4));
console.log(minMovesHanoiTower(8));



