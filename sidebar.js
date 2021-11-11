const sidebar = document.querySelector('.sidebar');
const sidebarcontent = document.querySelector('.sidebar-content');

document.querySelector('#sidebar-toggle-button').onclick = function () {
    sidebar.classList.toggle('sidebar-small')
    toggle_element(sidebarcontent);
}

function toggle_element(element) {
    if (element.style.display == "none") {
        element.style.display = "block"
    } else {
        element.style.display = "none";
    }
}