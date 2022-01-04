
const getRandom = array => {
    return array[Math.floor(Math.random() * array.length)];
}

const idea = {
    activity: [
        'newspaper',
        'magazine',
        'coloring',
        'gardening',
        'swimming',
        'singing',
        'dancing',
        'painting',
        'cooking',
        'jogging',
        'hiking',
        'stargazing',
        'volunteering',
        'sightseeing',
        'reading'
    ],
    functionality: [
        'todo',
        'search',
        'planner',
        'tracker',
        'locator',
        'research',
        'training',
        'scheduling',
        'discovery',
        'calculator',
        'notes',
        'marketplace',
        'camera',
        'streaming',
        'attending'
    ],
    whatFor: [
        'shopping',
        'traveling',
        'camping',
        'adventuring',
        'programers',
        'gardeners',
        'musicians',
        'artists',
        'athletes',
        'magicians',
        'cleaners',
        'managers',
        'fishing',
        'divers',
        'surfers'
    ],
    language: [
        'Java',
        'C',
        'C++',
        'Python',
        'Visual Basic',
        'C#',
        'PHP',
        'JavaScript',
        'Assembly',
        'Go',
        'Dart',
        'Fortran',
        'Rust',
        'Haskell',
        'WebAssembly'
    ],

    generateMessage() {
        const act = getRandom(this.activity);
        const func = getRandom(this.functionality);
        const whf = getRandom(this.whatFor);
        const lang = getRandom(this.language);

        console.log(`A ${act} ${func} for ${whf}\n - in ${lang}`);
    }
}

idea.generateMessage();
