3. Describe in your own words the difference between passing something “by value”
versus “by reference.”


The difference is when we pass by reference we are handing in our only copy
of the variable and the function directly modifies that variable. When
we pass by value, we have another variable that points at the other variable. By
doing this, you are left with two instances of the same variable and only the copy
is modified leaving our original unchanged.


4. Describe in your own words a hash table (hash map) and why you would use it:


A hash table is used to implement an associative array that assigns key value pairs
to specific indexes of the array or indexes to "buckets".  A hashing function is
then used to access the various indexes of the buckets to pull out the data
contained within.
If you had an array full of data and knew the position of where a specific item
is stored in said array, you could quickly access that piece of data using a
hash table.


7. Some programming environments, such as Java Runtime and the .NET Framework
include a feature called garbage collection. In your own words,
what is garbage collection?


Garbage collection is a form of memory management in which objects that are
no longer being used will be discarded.  By doing this memory is being freed up
so other new objects can use that piece of memory.
