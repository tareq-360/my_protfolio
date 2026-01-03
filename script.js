// function downloadCV(){
//     const cv= document.getElementById("cv-content");
//     html2pdf()
//     .set({
//         margin: 0.5,
//         filename: 'Md_Tareq_Hossain_cv.pdf',
//         image: {type: 'jpeg', quality: 0.98},
//         html2canvas: {scakle: 2},
//         jsPDF: {unit: 'in', format: 'a4', orientation: 'portrait'}
//     })
//     .from(cv)
//     .save();
// }

// function downloadCV(){
//     alert("Working");
// }
// function downloadCV() {
//     const element = document.getElementById("cv-content");

//     if (!element) {
//         alert("CV content not found!");
//         return;
//     }

//     html2pdf()
//         .from(element)
//         .set({
//             margin: 0.5,
//             filename: 'MD_Tareq_Hossain_CV.pdf',
//             html2canvas: { scale: 2 },
//             jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
//         })
//         .save();
// }

// function downloadCV() {
//     const element = document.getElementById("cv-content");

//     if (!element) {
//         alert("CV content not found!");
//         return;
//     }

//     const opt = {
//         margin: 0,
//         filename: 'MD_Tareq_Hossain_CV.pdf',
//         image: { type: 'jpeg', quality: 1 },
//         html2canvas: {
//             scale: 2,
//             useCORS: true
//         },
//         jsPDF: {
//             unit: 'in',
//             format: 'a4',
//             orientation: 'portrait'
//         }
//     };

//     html2pdf().set(opt).from(element).save();
// }
function downloadCV() {
    window.print();
}