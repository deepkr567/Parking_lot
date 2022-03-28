# Parking_lot
Simple Parking Lot Implementation

#How to use this repository

Install all dependencies
"npm install"

Run the main program
"node index.js"

Problem Statement:
-----------------------
Implemented Parking Lot system with following functionalities.

● Registration numbers of all cars of a particular colour.
● Slot number in which a car with a given registration number is parked.
● Slot numbers of all slots where a car of a particular colour is parked.


Inputs:
----------------------
create_parking_lot 6 
park KA1234 White 
park KA9999 White 
park KA0001 Black 
park KA7777 Red 
park KA2701 Blue 
park KA3141 Black
leave 4 
status
park KA3333 White 
park DL9999 White 
registration_numbers_for_cars_with_colour White 
slot_numbers_for_cars_with_colour White 
slot_number_for_registration_number KA3141 
slot_number_for_registration_number MH1111 

Outputs: 
------------------
Created a parking lot with 6 slots 
Allocated slot number: 1 
Allocated slot number: 2 
Allocated slot number: 3 
Allocated slot number: 4 
Allocated slot number: 5 
Allocated slot number: 6 
Slot number 4 is free 
Slot No. Registration No 
Colour 
1 
KA1234 
White 
2 
KA9999 
White 
3 
KA0001 
Black 
5 
KA2701 
Blue 
6 
KA3141
Black 
Allocated slot number: 4
Sorry, parking lot is full
KA1234, KA9999, KA3333
1, 2, 4
6
Not found
