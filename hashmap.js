class Hashmap {
    constructor(capacity = 16, loadfactor = 0.75) {
      this.capacity = capacity;
      this.loadfactor = loadfactor;
      this.buckets = new Array(this.capacity);
      this.size = 0;
    }
    hash(key) {
      let hashcode = 0;
      let prime = 31;  // Use a prime number
    
      for (let i = 0; i < key.length; i++) {
        hashcode = (prime * hashcode + key.charCodeAt(i)) % this.capacity;
      }
      return hashcode;
    }
    
  
  
  
  
    set(key, value) {
      
      const index = this.hash(key);
      if (index < 0 || index >= this.buckets.length) {
        throw new Error("out of capacity");
      }
      if (!this.buckets[index]) {
        this.buckets[index] = [];
      }
      const bucket = this.buckets[index];
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          return;
        }
  
      }
      bucket.push([key, value]);
      this.size++;
  
      if (this.size / this.capacity > this.loadfactor) {
        this.resize();
      }
    }
  
  
  
  
  
    get(key) {
      const index = this.hash(key);
      if (index < 0 || index >= this.buckets.length) {
        throw new Error("wrong key name ");
      }
  
      if (!this.buckets[index]) {
        return null;
      }
  
      const bucket = this.buckets[index];
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
      return null;
    }
  
  
  
  
  
    has(key) {
      const index = this.hash(key);
      if (index < 0 || index >= this.buckets.length) {
        throw new Error("wrong key name ");
      }
  
      if (!this.buckets[index]) {
        return false;
      }
      const bucket = this.buckets[index];
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return true;
        }
      }
      return false;
    }
  
  
  
  
  
    remove(key) {
      const index = this.hash(key);
      if (index < 0 || index >= this.buckets.length) {
        throw new Error("wrong key name ");
      }
  
      if (!this.buckets[index]) {
        return false;
      }
      const bucket = this.buckets[index];
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          this.size--;
          return true;
        }
      }
      return false;
  
    }
  
  
    length() {
      return this.size;
    }
  
    clear() {
      this.buckets = new Array(this.capacity);
      this.size = 0;
  
    }
  
  
    keys() {
      const keyarray = [];
      for (const bucket of this.buckets) {
        if (bucket) {
          for (const [key] of bucket) {
            keyarray.push(key);
          }
        }
      }
      return keyarray;
    }
  
    values() {
      const valuearray = [];
      for (const bucket of this.buckets) {
        if (bucket) {
          for (const [, value] of bucket) {
            valuearray.push(value);
          }
        }
      }
      return valuearray;
    }
  
    resize() {
      const prevbuckets = this.buckets;
      this.capacity *= 2;
      this.buckets = new Array(this.capacity);
      this.size = 0;
  
      for (const bucket of prevbuckets) {
        if (bucket) {
          for (const [key, value] of bucket) {
            this.set(key, value);
          }
        }
      }
  
    }
    entries() {
      const entries = [];
      for (const bucket of this.buckets) {
        if (bucket) {
          for ( const entry of bucket) {
            entries.push(entry);
          }
        }
      }
      return entries;
    }
  
  
  
  }
  
  const test = new Hashmap() ;
  
  
  
  test.set('apple', 'red')
  test.set('banana', 'yellow')
  test.set('carrot', 'orange')
  test.set('dog', 'brown')
  test.set('elephant', 'gray')
  test.set('frog', 'green')
  test.set('grape', 'purple')
  test.set('hat', 'black')
  test.set('ice cream', 'white')
  test.set('jacket', 'blue')
  test.set('kite', 'pink')
  test.set('lion', 'golden')
  console.log(test.length());
  console.log(test.get("jacket"));
  test.set("jacket","red");
  console.log(test.length());
  console.log(test.get("jacket"));
  test.set('moon', 'silver')
  console.log(test.get("moon"));
  console.log(test.length());
  test.remove("moon");
  console.log(test.length());
  
  //test.clear();
  console.log(test.length());
  
  console.log(test.keys());
  console.log(test.values());
  
  console.log(test.entries());
  
  