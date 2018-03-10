function handle_key(e) {
    switch (e.key) {
        case "y": case "Y":
            document.querySelector("#confirm > input.approve").click();
            break;
        case "n": case "N":
        document.querySelector("#dont_confirm > input.deny").click();
            break;
        default:
            break;
    }
}

document.addEventListener('keyup', handle_key, false);
