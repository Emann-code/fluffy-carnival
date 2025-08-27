 function getUniqueVowels (str) {
     const vowels = "aeiou" ;
     const found = new Set () ;

     for (let char of str.toLowerCase()) {
         if (vowels.includes(char)) {
             found.add(char) ;
         }
     }
       return Array.from(found) . join ("") ;
 }
 console.log(getUniqueVowels("antimonopolygeographicationalism"))


 function isPrime(num) {
  if (num <= 1) return false; // numbers less than or equal to 1 are not prime
  if (num === 2) return true; // 2 is prime
  if (num % 2 === 0) return false; // even numbers greater than 2 are not prime

  // check divisibility up to square root of num
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Example usage:
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
