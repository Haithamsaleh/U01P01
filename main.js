console.log("to do ");

let toDos = [
  { name: "wake up", isCom: false },
  { name: "code", isCom: false },
];

///// function

const triggerCompleted = (i) => {
  // if (toDos[i].isCom === true) {
  //   toDos[i].isCom = false;
  // } else {
  //   toDos[i].isCom = true;
  // }
  toDos[i].isCom = !toDos[i].isCom;
  render();
};

const deleteItem = (i) => {
  toDos.splice(i, 1);
  render();
};

const editName = (i) => {
  $("#list-" + i).html(`<input id='inputNew-${i}'  type="text" />`);
  $("#inputNew-" + i).val(toDos[i].name); /// to give the input previus value before editing
  $("#inputNew-" + i).change(() => {
    toDos[i].name = $("#inputNew-" + i).val();
    render();
  });
};

/////////////////////

const render = () => {
  $("#myList").html("");
  let countUn = 0;
  toDos.forEach((item, i) => {
    $("#myList").append(`<li id='list-${i}'> 
        <span id='listText-${i}'> ${item.name} </span>
        <button onclick='editName(${i})'>edit</button>
        <button id='deleteBtn-${i}'>delete</button>
        </li>`); // end of append
    if (item.isCom === false) {
      countUn++;
    } else {
      $("#listText-" + i).addClass("completed");
    }

    ///////////////// add event listener for trigger, delete and update
    $("#listText-" + i).click(() => {
      triggerCompleted(i);
    });
    $("#deleteBtn-" + i).click(() => {
      deleteItem(i);
    });
  });
  // end of forEach
  $("#completedText").text(`You have ${countUn} todos left.`);
};

render();

////////////// add new item
const addToList = () => {
  const inputVal = $("#inputAdd").val();
  // { name: "wake up", isCom: false }
  let newObj = { name: inputVal, isCom: false };
  toDos.push(newObj);
  $("#inputAdd").val("");
  render();
};

$("#addBtn").click(addToList);

///////////

$("#clearAllBtn").click(() => {
  toDos = [];
  render();
});

$("#clearCompletedBtn").click(() => {
  toDos = toDos.filter((item) => {
    return !item.isCom;
  });
  render();
});
