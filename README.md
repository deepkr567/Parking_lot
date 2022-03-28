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

● Registration numbers of all cars of a particular colour. <br />
● Slot number in which a car with a given registration number is parked. <br />
● Slot numbers of all slots where a car of a particular colour is parked.<br />


Inputs:
----------------------
create_parking_lot 6 <br />
park KA1234 White <br />
park KA9999 White <br />
park KA0001 Black <br />
park KA7777 Red <br />
park KA2701 Blue <br />
park KA3141 Black <br />
leave 4 <br />
status <br />
park KA3333 White <br />
park DL9999 White <br />
registration_numbers_for_cars_with_colour White <br />
slot_numbers_for_cars_with_colour White <br />
slot_number_for_registration_number KA3141 <br />
slot_number_for_registration_number MH1111 <br />

Outputs: 
------------------
Created a parking lot with 6 slots <br />
Allocated slot number: 1 <br />
Allocated slot number: 2 <br />
Allocated slot number: 3 <br />
Allocated slot number: 4 <br />
Allocated slot number: 5 <br />
Allocated slot number: 6 <br />
Slot number 4 is free <br />
Slot No. Registration No <br />
Colour <br />
1 <br />
KA1234 <br />
White <br />
2 <br />
KA9999 <br />
White <br />
3 <br />
KA0001 <br />
Black <br />
5 <br />
KA2701 <br />
Blue <br />
6 <br />
KA3141<br />
Black <br />
Allocated slot number: 4 <br />
Sorry, parking lot is full <br />
KA1234, KA9999, KA3333 <br />
1, 2, 4 <br />
6 <br />
Not found <br />
