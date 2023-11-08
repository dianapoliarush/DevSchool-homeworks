class Warrior {
    constructor() {
        this._warriorLevel = 1;
        this._warriorExperience = 100;
        this._warriorAchievements = [];
    }
    level() {
        this._warriorLevel = Math.floor(this._warriorExperience / 100);
        return Math.min(this._warriorLevel, 100);
    }
    experience() {
        return Math.min(this._warriorExperience, 10000);
    }
    rank() {
        const ranks = [
            "Pushover",
            "Novice",
            "Fighter",
            "Warrior",
            "Veteran",
            "Sage",
            "Elite",
            "Conqueror",
            "Champion",
            "Master",
            "Greatest"
        ];
        return ranks[Math.floor(this._warriorLevel / 10)] || ranks[ranks.length - 1];
    }
    achievements() {
        return this._warriorAchievements;
    }
    training([description, exp, minLevel]) {
        if (minLevel > this._warriorLevel) return "Not strong enough";
        this._warriorAchievements.push(description);
        this._warriorExperience += exp;
        this._warriorLevel = Math.floor(this._warriorExperience / 100);
        return description;
    }
    isWarriorsSameRank(first, second) {
        return Math.floor(first / 10) === Math.floor(second / 10);
    }
    battle(enemyLevel) {
        if (enemyLevel < 1 || enemyLevel > 100) {
            return "Invalid level";
        }

        let fightResult = this.getFightResult(enemyLevel);
        this._warriorLevel = Math.floor(this._warriorExperience / 100);
        return fightResult;
    }
    getFightResult(enemyLevel) {
        switch (true) {
            case this._warriorLevel === enemyLevel:
                this._warriorExperience += 10;
                return "A good fight";
            case this._warriorLevel - enemyLevel === 1:
                this._warriorExperience += 5;
                return "A good fight";
            case this._warriorLevel - enemyLevel <= -5 &&
            !this.isWarriorsSameRank(this._warriorLevel, enemyLevel):
                return `You've been defeated`;
            case this._warriorLevel < enemyLevel:
                this._warriorExperience += 20 * ((enemyLevel - this._warriorLevel) * (enemyLevel - this._warriorLevel));
                return "An intense fight";
            default:
                return "Easy fight";
        }
    }
}


const bruce_lee = new Warrior();

console.log(bruce_lee.level()); // => 1
console.log(bruce_lee.experience()); // => 100
console.log(bruce_lee.rank()); // => "Pushover"
console.log(bruce_lee.achievements()); // => []
console.log(bruce_lee.training(["Defeated Chuck Norris", 9000, 1])); // => "Defeated Chuck Norris"
console.log(bruce_lee.experience()); // => 9100
console.log(bruce_lee.level()); // => 91
console.log(bruce_lee.rank()); // => "Master"
console.log(bruce_lee.battle(90)); // => "A good fight"
console.log(bruce_lee.experience()); // => 9105
console.log(bruce_lee.achievements()); // => ["Defeated Chuck Norris"]
