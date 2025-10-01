var button;

function detailed_button() {

    button = document.getElementById('button_one_for_card');
    button.className = "card-body d-flex justify-content-center";
};

function detailed_button_close(){
    button = document.getElementById('button_one_for_card');
    button.className = "card-body d-flex justify-content-center d-none";
}