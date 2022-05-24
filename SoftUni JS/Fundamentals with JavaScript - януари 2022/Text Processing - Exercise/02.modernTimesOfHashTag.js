function modernTimesOfHashTag(str) {

    let text = str.split(' ');

    for (let word of text) {

        if (word.length > 1 && word.includes("#")) {

            let hashTag = word.slice(1);

            if (/^[a-zA-Z]+$/.test(hashTag)) {
                console.log(hashTag);

            }
        }
    }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');