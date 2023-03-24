# startup
Ski Speedometer is a mobile app for skiing enthusiasts who want to measure their speed and compete with their friends. With Ski Speedometer, you can track your maximum speed for each run, upload your speeds, and compare your results with your friends. So, let’s get out there and see who is the fastest skier on the slopes!
Key Features: Run by run max speed tracking. Max speed leaderboards.

# git commands to remember
echo - Output the parameters of the command
cd - Change directory
mkdir - Make directory
rmdir - Remove directory
rm - Remove file(s)
mv - Move file(s)
cp - Copy files
ls - List files
curl - Command line client URL browser
grep - Regular expression search
find - Find files
top - View running processes with CPU and memory usage
df - View disk statistics
cat - Output the contents of a file
less - Interactively output the contents of a file
wc - Count the words in a file
ps - View the currently running processes
kill - Kill a currently running process
sudo - Execute a command as a super user (admin)
ssh - Create a secure shell on a remote computer
scp - Securely copy files to a remote computer
history - Show the history of commands
ping - Check if a website is up
tracert - Trace the connections to a website
dig - Show the DNS information for a domain
man - Look up a command in the manual

# how to resolve a git conflict
We resolve the conflict by modifying the file to remove the textual conflict delimiters and modifying the file to keep the changes we want. When we are done editing, our file contains what we want from both commits.

# arrow function syntax examples
const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);

# JSON
Type	Example
string	"crockford"
number	42
boolean	true
array	[null,42,"crockford"]
object	{"a":1,"b":"crockford"}
null	null

Note that in this example, JSON cannot represent the JavaScript undefined object and so it gets dropped when converting from JavaScript to JSON.

# Regular Expressions
Examples

const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true

# Rest

function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true

# Spread

function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}

# Destructring

const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2

# Exceptions (throw, try, catch, finally)

function connectDatabase() {
  throw new Error('connection error');
}

try {
  connectDatabase();
  console.log('never executed');
} catch (err) {
  console.log(err);
} finally {
  console.log('always executed');
}

// OUTPUT: Error: connection error
//         always executed

# Promises

const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2

# Await Async

function orderPizza(flavorRequest) {
  return new Promise((resolve, reject) => {
    console.log("Ordering " + flavorRequest + " flavored pizza!")
    if (flavorRequest == "pepperoni") {
      resolve("Making pepperoni pizza")
    }
    else{
      reject("Sorry we only have pepperoni")
    }
  })
}

function makePizza(response) {
  return new Promise((resolve, reject) => {
    console.log("Making pepperoni pizza")
    resolve("Pizza is ready.")
  })
}

async function doWork(flavor){
  try{
    const response = await orderPizza(flavor)
    console.log("Order received")
    const processedResponse = await makePizza(response)
    console.log(processedResponse)
  }
  catch (err) {
    console.log(err)
  }
}

doWork("cheese")

# Notes from simon service project

Adding fetch commands isn't as difficult as I thought it would be. Making my simon project a service through node.js and express was a lot simpler than I thought it would be. Now I just need to figure it out for my startup project to really internalize everythin.

# Notes from simon login project

At this point there is so much going on in my Simon Project that I don't really understand every line of code, but I think when I finish my startup project it will make more sense.
