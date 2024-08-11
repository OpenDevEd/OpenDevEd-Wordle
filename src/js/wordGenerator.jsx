


export function wordGenerator()
{
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L',
                    'M','N','P','Q','R','S','T','U','V','W','X','Y','Z']
    let word = '';

    for (let i = 0 ; i < 4; i++)
    {
        word += alphabet[Math.floor(Math.random()*(alphabet.length))];
    }

    return word;
}


