// const closeDialog = () => {
//     let dialog = document.getElementById('dialog');
//     // dialog.addEventListener('close', (event) => {

//     // })
//     // document.getElementById('dialog-button').onclick = function() {
//     //     dialog.close();
//     // }
//     document.getElementById('dialog-button').addEventListener('click', () => {
//         dialog.close();
//     })

//     // return dialog.close();
// };

let dialog = document.getElementById("dialog");

// document.getElementById('dialog-button').addEventListener('click', () => {
//     console.log("close dialog")
//     return dialog.close();
// });
    
// const openDialog = () => {
//     dialog.show();
// }

// // openDialog();

const closeDialog = () => {
    console.log(dialog.open)
    console.log("close dialog")
    // return dialog.close();
    return dialog.open = false;
}