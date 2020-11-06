# kata-js-sandpile

In this kata, you will be challenged to implement the abelian sandpile, a type of cellular automata. See [this Wikipedia article](https://en.wikipedia.org/wiki/Abelian_sandpile_model) for a more technical description.

<img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Tannin_heap.jpeg" width=300>

## Description

A *sandpile* is a 2-dimensional square array with the following properties:

#### Each cell of the array contains an integer between zero and three.
You can think of this as being the number of grains of sand in that location on the pile.

|<img src="/sandpile_images/sand00.png" width=200>|
|:-:|

*Example: A* `4 x 4` *sandpile.*

#### Sand can be added at any location.

We can add a grain of sand to any cell in the pile.

|<img src="/sandpile_images/sand01.png" width=200>|
|:-:|

*Example: Adding one to the location* `(1, 2)`.

#### Sand cannot be removed directly.
There is no method to remove sand from a particular location on the pile.
It is possible to remove sand indirectly via the method described below.

#### If adding sand to a location brings its value above four causes that location to "topple."
This causes its value to be reduced by four and then each adjacent neighbor to increase by one. (Note, cells must be touching to be considered adjacent. Two cells which share a corner but not an edge are not adjacent.)

| <img src="/sandpile_images/sand03.png" width=200> | :arrow_right: | <img src="/sandpile_images/sand04.png" width=200> |
|:-:|:-:|:-:|

*Example: Adding one to the location* `(1, 1)` *increased it's value to* `4`. *This caused a topple, which resulted in* `(1, 1)` *being set to* `0` *and the four adjacent cells going up by one.*

#### If a cell on the boundary topples, grains fall off the pile and are removed.
Sand is removed from the table when a cell on the boundary topples. This could either be an edge cell, or a corner cell.

| <img src="/sandpile_images/sand06.png" width=200> | :arrow_right: | <img src="/sandpile_images/sand07.png" width=200> |
|:-:|:-:|:-:|

*Example: Adding a grain to cell* `(1, 0)` *caused it to topple. Because it was on the boundary, its three neighbors each increased by one, and the last grain "fell off the pile"*

#### Toppling could cause other cells to topple.
If a cell topples and one of its neighbors grows above four grains, then the toppling rule applies to that neighbor.
This will continue in an avalanche until all cells in the pile have less than four grains.

| <img src="/sandpile_images/sand09.png" width=200> | :arrow_right: | <img src="/sandpile_images/sand11.png" width=200> | :arrow_right: | <img src="/sandpile_images/sand12.png" width=200>
|:-:|:-:|:-:|:-:|:-:|

*Example: Adding a grain to* `(2, 0)` *caused that location to topple. This in turn caused the location* `(3, 0)` *to topple.* After this, each cell has less than four grains, so topplig ceases.
