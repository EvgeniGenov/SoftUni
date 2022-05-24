function cutAndReverse(str) {
    let reverse = str.split("").reverse();
    let start = [""];
    let end = [""];

    for (let i = 0; i < reverse.length / 2; i++) {
        start.push(reverse[i]);
    }

    for (let i = reverse.length / 2; i < reverse.length; i++) {
        end.push(reverse[i]);
    }

    console.log(end.join(''));
    console.log(start.join(''));

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');