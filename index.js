const driver = {name: 'Akarsh Shukla', streetAddress: '6322 field flower trail'}

function updateDriverWithKeyAndValue(obj, key, value) {
    const nextDriver = {...obj};
    
    nextDriver[key] = value;
    return nextDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromDriverByKey(obj, key) {
    const driver3 = {...obj};
    delete driver3[key];
    return driver3;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key];
    return obj;
}
