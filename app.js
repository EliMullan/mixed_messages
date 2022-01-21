const messages1 = [
    'Magnificent human,',
    'You beautiful creature,',
    'Amazing Earther,',
    'Creature of fire and blood,',
    'Leader of animal kingdom,'
];

const messages2 = [
    'keep calm...',
    'think about it...',
    'listen to this echo...',
    'there is wisdom all around you...',
    'look up to the stars...',
    'the stars are whispering...'
];

const messages3 = ['Logic is the beginning of wisdom, not the end.',  
'Live now; make now always the most precious time. Now will never come again.',
'Continue the petty bickering. I find it most intriguing.',
'You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true.',
'Insufficient facts always invite danger.',
'Make it so!',
'Perhaps man wasn\’t meant for paradise. Maybe he was meant to claw, to scratch all the way.',
'We can\’t avoid the future.',
'Respect is earned, not bestowed.',
'Flair is what marks the difference between artistry and mere competence.',
'The only person you\’re truly competing against is yourself.',
'Fear is the true enemy. The only enemy.',
'In critical moments, men sometimes see exactly what they wish to see.',
'Compassion: That\’s the one thing no machine ever had. Maybe it’s the one thing that keeps men ahead of them.',
'Sharing an orbit with God is no small experience.',
'I would gladly risk feeling bad at times if it also meant that I could taste my dessert.',
'Patience is sometimes a more effective weapon than the sword.',
'Change is the essential process of all existence.',
'Sometimes a feeling is all we humans have to go on',
'If we’re going to be damned, let’s be damned for what we really are.',
'Leave bigotry in your quarters; there’s no room for it on the bridge.',
'The prejudices people feel about each other disappear when they get to know each other.',
'Things are only impossible until they are not.',
'If we resist, we die. If we don\’t resist… we die.',
'Madness has no purpose. Or reason. But it may have a goal.',
'You mind your place, mister, or you\’ll be wearing concrete galoshes.',
'Confidence is faith in oneself. It can\’t easily be given by another.',
'Engage!',
'A lie is a very poor way to say hello.',
'A species that enslaves other beings is hardly superior, mentally or otherwise.',
'A man either lives life as it happens to him, meets it head-on and licks it, or he turns his back on it and starts to wither away.',
'Humans do have an amazing capacity for believing what they choose — and excluding that which is painful.',
'It\’s not safe out here. It\’s wondrous, with treasures to satiate desires both subtle and gross; but it’s not for the timid',
'You can use logic to justify almost anything. That\’s its power. And its flaw',
'Without followers, evil cannot spread.',
'They used to say that if man was meant to fly, he\’d have wings. But he did fly. He discovered he had to.',
'To all mankind: May we never find space so vast, planets so cold, heart and mind so empty, that we cannot fill them with love and warmth.'
];

const randomGenerator = arr => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

console.log(`${randomGenerator(messages1)} ${randomGenerator(messages2)} ${randomGenerator(messages3)}`);
