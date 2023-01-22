let input;

function reset(){
    d3.selectAll('svg').remove();
}

// tree and array 1st  button function 

function treeAndArray(){
    reset();
    let inputText = document.getElementById("array-input")
    // change instruction for each button
    document.querySelector('#visual-title').innerHTML = "Binary Tree And Array";

    document.querySelector('#instructions').innerHTML = "Click a Value in a binary tree or array to highlight its corresponding location in the data Structure";

    if(inputText.value!=''){
        input = inputText.value.trim().split(/\s+|\,+/g).map((num)=>parseInt(num));

        createBinaryTreeAndArr(input)
    }
}

// Heapify function 2nd button in html

function heapify() {
    reset();
    let inputText = document.getElementById("array-input")
    if (inputText.value !== '') {
      input = inputText.value.trim().split(/\s+|\,+/g).map((num) => parseInt(num));


      makeHeap(input, input.length);

      createBinaryTreeAndArr(input);



      document.getElementById('instructions').innerHTML = "<p> Parent's value is always greater than or equal to the values of its children.</p>";

      document.getElementById('visual-title').innerHTML = "Max-Heap Binary Tree And Array";
    }
  }
  
//create binary tree and Array
function createBinaryTreeAndArr(arr){
    arrayContainer = createContainer("array-visual",arr,arr.length*60,100);
    let tree=new Tree();
    tree.createBinaryTree(input);
    createArray(arr,2,30,50,50);
}

//create binary search tree

function createBinarySearchTree(){
    let inputText = document.getElementById("array-input")
    if(inputText.value !=''){
        reset();
        input = inputText.value.trim().split(/\s+|\,+/g).map((num)=>parseInt(num));

        input.sort((a,b)=>a-b)

        // change instruction for each button
        document.querySelector('#visual-title').innerHTML = "Binary Search Tree";

        document.querySelector('#instructions').innerHTML = "The input data sorted and arranged into a Binary Search Tree";

        let tree=new Tree();
        tree.createBinarySearchTree(input);
    }
}

//default Values
input=[10,20,60,30,70,40,50];
let inputTest = document.getElementById("array-input")
inputTest.value=input;
createBinaryTreeAndArr(input);