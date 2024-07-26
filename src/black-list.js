// Get modal elements
var modal = document.getElementById("modal");
var closeBtn = document.getElementsByClassName("close")[0];
var addItemBtn = document.getElementById("add-Item-Btn");
var itemList = document.getElementById("item-List");

// Open modal
document.getElementById("open-black-list").onclick = function() {
    modal.style.display = "block";
}

// Close modal and show settings
closeBtn.onclick = function() {
    modal.style.display = "none";
    showTab('settings');
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        showTab('settings');
    }
}

// Add item to list
addItemBtn.onclick = function() {
    var folderValue = document.getElementById("black-list-folder").value;
    var nameValue = document.getElementById("black-list-name").value;

    if (folderValue || nameValue) {
        var li = document.createElement("li");
        li.textContent = folderValue ? folderValue : nameValue;

        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.className = "delete";

        deleteBtn.onclick = function() {
            li.remove();
        }

        li.appendChild(deleteBtn);
        itemList.appendChild(li);

        document.getElementById("black-list-folder").value = "";
        document.getElementById("black-list-name").value = "";
    }
}

// Function to show a specific tab
function showTab(tabName) {
    var tabs = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    document.getElementById(tabName + '-container').style.display = 'block';
}

// Initial tab to be shown
showTab('main');
