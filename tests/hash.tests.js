module("Hash tests");
hash.clear(); // Reset hash before testing

test('Object and methods exists', function() {
    equals(typeof(hash.get), "function");
    equals(typeof(hash.add), "function");
    equals(typeof(hash.remove), "function");
    equals(typeof(hash.clear), "function");
});

test('Add one parameter to hash', function() {
    hash.add({ param1: "foo" });
    equals(window.location.hash, "#param1=foo");
});

test('Get one parameter', function() {
    equals(hash.get('param1'), "foo");
});

test('Add three parameter to hash', function() {
    hash.add({ param2: "bar", param3: "dar", param4: "mar" });
    equals(window.location.hash, "#param1=foo&param2=bar&param3=dar&param4=mar");
    equals(hash.get('param1'), "foo");
    equals(hash.get('param3'), "dar");
    equals(hash.get('param2'), "bar");
    equals(hash.get('param4'), "mar");
});



test('Get all', function() {
    deepEqual(hash.get(), {
        param1: "foo",
        param2: "bar", 
        param3: "dar", 
        param4: "mar" 
    });
});

test('Remove one', function() {
    equals(hash.get('param2'), "bar");
    hash.remove('param2');
    equals(hash.get('param2'), undefined); 
});

test('Clear all', function() {
    hash.clear();
    var locationHash = window.location.hash;
    locationHash = (locationHash == "#") ? "" : locationHash; // IE6-8 returns # which is also ok
    equals(locationHash, "");
});