

const _certValues = [

    {
        images: "./assets/Certifications_folder/spes_cert.jpg",
        certName: "Acceptance Certification",
        certplace: "@Temporary City Hall, Pasig City"
    },

    {
        images: "./assets/Certifications_folder/.jpg",
        certName:  "OJT Ceritifiacte of Completion",
        certplace:  "@Lhoopa, Mandaluyong"
    }   

];

_showCertificates(_certValues);

function _showCertificates(certValues){
    
    const carousel = document.querySelector('carousel');
    const certvalues = certValues;

     let carousels = '';
    certvalues.forEach((value) => {

        
         carousels += `
         <div>
            <img
                src="${value.images}"
                alt="picture_of_Dwight_RAMOS"
            />
         div>
         `


        
    });
    document.getElementById('group').innerHTML = carousels;
    



};