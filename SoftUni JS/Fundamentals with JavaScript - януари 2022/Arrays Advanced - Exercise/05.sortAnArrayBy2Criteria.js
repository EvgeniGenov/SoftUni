function sortAnArrayBy2Criteria(arr) {

    let sortByLength = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));



    console.log(arr.join('\n'));

}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);