# Hash.js - URL Hash Manipulation

Hash.js is a 0.5 KB script that lets you in a super simple way manipulate 
everything behind `#` in urls. Tested in latest Chrome, Safari, Firefox and IE7,8,9.

See example page at [jonnystromberg.com/hash-js](http://jonnystromberg.com/hash-js) or see it 
in action at [PNGTextures.com](http://pngtextures.com).

Btw, [follow me (@javve) at Twitter](http://twitter.com/javve) and checkout my other project [List.js](http://listjs.com)

**Notice**:  The main focus of Hash.js is simplcity. This is no tool for your super-ajax-native-feeling-app-with-google-bot-support. If
that's your usage situation, use the awesome [History.js](https://github.com/balupton/history.js).

## Usage
Just include `hash.min.js` or `hash.js` at your site and then a `hash` object will become available.

    <script src="hash.min.js"></script>
    
    <script>
        hash.add({foo: "bar" });                // Url becomes http://url.com#foo=bar
    </scrtip>

## Methods

* **hash.add(params)**  
Add parameter to hash
        
        hash.add({ foo: "bar" });               // http://url.com#foo=bar
        hash.add({ car: "dar", sar: "par" });   // http://url.com#foo=bar&car=dar&sar=par
        
* **hash.get(param)** or **hash.get()**    
Returns value of paramter in hash. If `param` is `undefined` then all values are returned.
        
        var fooValue = hash.get('foo');         // fooValue == "bar"
        var allValues = hash.get();             // allValues == { foo: "bar", car: "dar", sar: "par"}

* **hash.remove(param)**  
Removes the value with name `param`.
        
        hash.remove('foo');                     // http://url.com#car=dar&sar=par
        
* **hash.clear()**  
Clears entire hash.
    
        hash.clear();                           // http://url.com#
        
        
## License 

DON'T BE A DICK PUBLIC LICENSE

Version 1, December 2009

Copyright (C) 2011 
[Jonny Strömberg](http://jonnystromberg.com) [@javve](http://twitter.com/javve)
 
Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

DON'T BE A DICK PUBLIC LICENSE  
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

1. Do whatever you like with the original work, just don't be a dick.  
Being a dick includes - but is not limited to - the following instances:

    1a. Outright copyright infringement - Don't just copy this and change the name.
    
    1b. Selling the unmodified original with no work done what-so-ever, that's REALLY being a dick.
    
    1c. Modifying the original work to contain hidden harmful content. That would make you a PROPER dick.

2. If you become rich through modifications, related works/services, or supporting the original work,
 share the love. Only a dick would make loads off this work and not buy the original works 
 creator(s) a pint.
 
3. Code is provided with no warranty. Using somebody else's code and bitching when it goes wrong makes 
 you a DONKEY dick. Fix the problem yourself. A non-dick would submit the fix back.