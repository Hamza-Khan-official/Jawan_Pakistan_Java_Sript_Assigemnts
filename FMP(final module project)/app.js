var button;

function detailed_button(id) {

    button = document.getElementById(id);
    button.className = "card-body d-flex justify-content-center";
};

function detailed_button_close(id){
    button = document.getElementById(id);
    button.className = "card-body d-flex justify-content-center d-none";
}